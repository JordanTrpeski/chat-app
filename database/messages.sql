CREATE TABLE messages
(
    id uuid PRIMARY KEY DEFAULT uuid_in(md5(random()::text || random()::text)::cstring),
    sent_at TIMESTAMP NOT NULL DEFAULT now(),
    receiver uuid NOT NULl,
    sender uuid NOT NULL,
    text jsonb NOT NULL,
    CONSTRAINT fk_receiver
        FOREIGN KEY (receiver)
            REFERENCES users(id),
    CONSTRAINT fk_sender
        FOREIGN KEY (sender)
            REFERENCES users(id)
);


CREATE FUNCTION notify_message_sent() RETURNS trigger AS $trigger$
DECLARE
rec RECORD;
BEGIN
    rec := NEW;
    PERFORM pg_notify(concat('_',translate(rec.receiver :: text,'-', '')), row_to_json(rec) #>> '{}');
    PERFORM pg_notify(concat('_',translate(rec.sender :: text,'-', '')), row_to_json(rec) #>> '{}');
    RETURN rec;
END
$trigger$ LANGUAGE plpgsql;


CREATE TRIGGER message_sent_notification AFTER INSERT ON messages
    FOR EACH ROW EXECUTE PROCEDURE notify_message_sent();

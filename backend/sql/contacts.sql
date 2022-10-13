CREATE TABLE contacts
(
    first uuid NOT NULl,
    second uuid NOT NULL,
    CONSTRAINT fk_receiver
        FOREIGN KEY (first)
            REFERENCES users(id),
    CONSTRAINT fk_sender
        FOREIGN KEY (second)
            REFERENCES users(id)
);

CREATE UNIQUE INDEX ON contacts
    (LEAST(first, second), GREATEST(first, second));
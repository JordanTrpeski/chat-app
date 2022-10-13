CREATE TABLE users
(
    id uuid PRIMARY KEY DEFAULT uuid_in(md5(random()::text || random()::text)::cstring),
    profile jsonb NOT NULl,
    password_hash varchar NOT NULL,
    username varchar NOT NULL,
    CONSTRAINT unique_username UNIQUE (username)
);

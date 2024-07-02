CREATE TABLE users
(
    id SERIAL,
    name text,
    email text,
    CONSTRAINT employees_pkey PRIMARY KEY (id)
);

INSERT INTO users(name, email) VALUES
 ('Sumanth Kalluru', 'skalluru@wiweeki.com'),
 ('Tanmai Kal', 'tanmai.kal@gmail.com');
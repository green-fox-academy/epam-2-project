
CREATE DATABASE epam_app;
\connect epam_app;
CREATE TABLE heartbeat (ok BOOLEAN);
CREATE TABLE USERS (user_id SERIAL, email TEXT NOT NULL, password TEXT NOT NULL, status TEXT DEFAULT 'user', UNIQUE (email), PRIMARY KEY (user_id));

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(250) NOT NULL,
	devoured BOOLEAN NOT NULL,   -- false or true got ask
	PRIMARY KEY (id)
);

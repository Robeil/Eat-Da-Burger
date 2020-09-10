CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name STRING_AGG NOT NULL,
	devoured BOOLEAN DEFAULT false,   -- false or true got ask
	PRIMARY KEY (id)
);
 USE burgers;
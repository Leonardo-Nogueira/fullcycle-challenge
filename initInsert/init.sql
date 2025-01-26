CREATE DATABASE IF NOT EXISTS nodedb;
CREATE TABLE IF NOT EXISTS `nodedb`.`people`
(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(255) NOT NULL
);

USE nodedb;

INSERT INTO people (nome) values ('Leonardo');
INSERT INTO people (nome) values ('Joao');
INSERT INTO people (nome) values ('Leticia');
INSERT INTO people (nome) values ('Rafael');



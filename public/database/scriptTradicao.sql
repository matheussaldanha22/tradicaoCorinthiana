CREATE DATABASE tradicaoCorinthiana;
USE tradicaoCorinthiana;

CREATE TABLE usuario(
	idUsuario int primary key auto_increment,
	nome VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(30),
    dtRegistro TIMESTAMP DEFAULT current_timestamp
);


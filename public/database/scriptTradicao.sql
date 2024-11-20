CREATE DATABASE tradicaoCorinthiana;
USE tradicaoCorinthiana;

CREATE TABLE usuario(
	idUsuario int primary key auto_increment,
	nome VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(30),
    dtRegistro TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE historia(
	idhistoria int primary key auto_increment,
    titulo varchar(100),
    descrircao varchar(255),
    fk_usuario int,
    constraint fkUserHistoria foreign key (fk_usuario) references usuario(idUsuario)
);

CREATE table quiz(
	qtdPontos int,
    fk_usuario int,
    constraint fkUserQuiz foreign key (fk_usuario) references usuario(idUsuario),
    dtRealizacao TIMESTAMP DEFAULT current_timestamp
);

select * from quiz;
select * from usuario;
select * from historia;


-- select agrupar qtd de pessoas que tiraram tantos pontos
 select (select count(qtdPontos) as 'Até 5' from quiz where qtdPontos <= 5) as ate_5, 
        (select count(qtdPontos) as '5 a 11' from quiz where qtdPontos >5 and qtdPontos <= 11) as 5_a_11, 
        (select count(qtdPontos) as '11 a 14' from quiz where qtdPontos > 11 and qtdPontos <=14) as 11_a_14,
        (select count(qtdPontos) as '15' from quiz where qtdPontos = 15) as 15pts from quiz limit 1;
        
-- select mostra pontuações do usuario
SELECT usuario.nome,quiz.qtdPontos,quiz.dtRealizacao from quiz 
JOIN usuario ON idUsuario = fk_usuario
WHERE fk_usuario = 5; -- igual ao idUsuario do session storage

SELECT usuario.nome, MAX(quiz.qtdPontos) AS MaiorPontuacao FROM quiz
JOIN usuario ON idUsuario = fk_usuario 
WHERE fk_usuario = 5 -- igual ao idUsuario do session storage
GROUP BY usuario.nome;





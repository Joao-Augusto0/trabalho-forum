drop database if exists AskTalk;

create database AskTalk collate utf8_general_ci;

use AskTalk;

create table usuarios(
    id_user integer AUTO_INCREMENT not null primary key nome_user varchar (20) not null,
    nome_user varchar (20) not null,
    email varchar (30) not null,
    senha varchar (30) not null,
    telefone varchar(13),
    foto_user mediumblob
);

create table Categorias(
    categoria varchar (20) not null,
    favorito boolean
);

create table subCategorias(
    subCategoria varchar (20) not null,
    favorito boolean
);

create table publicacao(
    id_post integer AUTO_INCREMENT not null primary key,
    titulo_post varchar(30) not null,
    id_user integer not null,
    nome_categoria varchar(30),
    nomeSubCategoria varchar(30),
    coment varchar(200) not null,
    data datetime not null,
    curtidas boolean
);
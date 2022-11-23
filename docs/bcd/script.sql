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
    nome_categoria varchar (20) not null,

);

create table subCategorias(
    nome varchar (20) not null,
    informacoes varchar(40)
);

create table paginas(
    nome_pagina varchar(30) not null,
    nome_user varchar(30) not null,
    data datetime not null,
    foto_pagina mediumblob,
    foto_fundo mediumblob
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

create table favorito(
    nome_pagina varchar(30),
    nome_categorias varchar(30)
);
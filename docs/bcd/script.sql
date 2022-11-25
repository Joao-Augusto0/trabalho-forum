drop database if exists AskTalk;
create database AskTalk charset = UTF8 collate utf8_general_ci;
use AskTalk;

create table usuario(
    id_user integer AUTO_INCREMENT not null primary key,
    nome_user varchar (20) not null,
    nick varchar (20) not null,
    email varchar (30) not null,
    senha varchar (30) not null,
    telefone varchar(13),
    foto_user mediumblob
);

create table Categoria(
    categoria varchar (20) not null primary key,
    favorito boolean
);

create table subCategoria(
    subCategoria varchar (20) not null primary key,
    categoria varchar(20) not null,
    favorito boolean,
    foreign key(categoria) references Categoria(categoria)
);

create table publicacao(
    id_post integer AUTO_INCREMENT not null primary key,
    titulo_post varchar(30) not null,
    id_user integer not null,
    categoria varchar(20) not null,
    subCategoria varchar(20),
    coment varchar(200) not null,
    data datetime not null,
    curtidas boolean,      
    foreign key (id_user) references usuario(id_user) on delete cascade,
    foreign key (categoria) references Categoria(categoria),
    foreign key (subCategoria) references subCategoria(subCategoria) 
);
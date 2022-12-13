drop database if exists AskTalk;
create database AskTalk charset = UTF8 collate utf8_general_ci;
use AskTalk;

create table Usuario(
    id_user integer AUTO_INCREMENT not null primary key,
    nome_user varchar (20) not null,
    nick varchar (20) not null,
    role varchar (10) not null,
    email varchar (30) not null,
    senha varchar (30) not null,
    telefone varchar(13),
    foto_user mediumblob
);

create table Categoria(
    categoria varchar (20) not null primary key,
    favorito boolean
);

create table SubCategoria(
    subCategoria varchar (20) not null primary key,
    categoria varchar(20) not null,
    favorito boolean,
    foreign key(categoria) references Categoria(categoria)
);

create table Publicacao(
    id_post integer AUTO_INCREMENT not null primary key,
    titulo_post varchar(30) not null,
    id_user integer not null,
    categoria varchar(20) not null,
    subCategoria varchar(20),
    coment varchar(200) not null,
    data datetime not null,
    curtidas boolean,
    foto_publi mediumblob,      
    foreign key (id_user) references Usuario(id_user) on delete cascade,
    foreign key (categoria) references Categoria(categoria),
    foreign key (subCategoria) references SubCategoria(subCategoria) 
);

create table Resposta(
    id_resp integer not null AUTO_INCREMENT primary key,
    id_post integer not null,
    id_user integer not null,
    resp varchar(200) not null,
    foreign key (id_post) references Publicacao(id_post)on delete cascade, 
    foreign key (id_user) references Usuario(id_user) 
);


insert into Usuario values
(default,"adrianalemos","Adrian","ADMIN","josefina@gmail","1234","19987428374",null);

insert into Categoria values
("Futebol",FALSE);
insert into Categoria values
("Basquete",FALSE);
insert into Categoria values
("Hockey no gelo",FALSE);
insert into Categoria values
("Voleibol",FALSE);
insert into Categoria values
("Rugby",FALSE);

insert into SubCategoria values
("Bola","Basquete", FALSE);

insert into SubCategoria values
("estadio","Futebol", FALSE);

insert into SubCategoria values
("patrocínio","Futebol", FALSE);

insert into SubCategoria values
("times","Basquete", FALSE);

insert into SubCategoria values("jogadores","Rugby",FALSE)
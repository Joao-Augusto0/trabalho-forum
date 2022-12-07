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

insert into Usuario values
(default,"adrianalemos","Adrian","ADMIN","josefina@gmail","1234","19987428374",null);

insert into Categoria values
("Futebol",TRUE);

insert into SubCategoria values
("Camisa de time","Futebol", TRUE);

insert into Publicacao values (DEFAULT, "michael jordan",1,"Futebol","Camisa de time","simplesmente o melhor jogador de futebol do MUNDO the G.O.A.T","2022-12-01",true,null);
insert into Publicacao values (DEFAULT, "michael jordan",1,"Futebol","Camisa de time","simplesmente o melhor jogador de futebol do MUNDO the G.O.A.T","2022-12-01",true,null);
insert into Publicacao values (DEFAULT, "michael jordan",1,"Futebol","Camisa de time","simplesmente o melhor jogador de futebol do MUNDO the G.O.A.T","2022-12-01",true,null);
insert into Publicacao values (DEFAULT, "michael jordan",1,"Futebol","Camisa de time","simplesmente o melhor jogador de futebol do MUNDO the G.O.A.T","2022-12-01",true,null);
insert into Publicacao values (DEFAULT, "michael jordan",1,"Futebol","Camisa de time","simplesmente o melhor jogador de futebol do MUNDO the G.O.A.T","2022-12-01",true,null);

insert into Publicacao values (DEFAULT, "rooooonalDo",1,"Futebol","Camisa de time","simplesmente o melhor jogador de futebol do MUNDO the G.O.A.T","2022-12-01",true,to_base64(LOAD_FILE("C:/Users/User/Desktop/trabalho-forum/front/assets/Cristiano-Ronaldo-div.jpg")));
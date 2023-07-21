create table users(
	usuario numeric (5) primary key,
	nome varchar (40) not null,
	nome_usual varchar (40) ,
	data_nasc date not null,
	fone varchar (25),
	religiao varchar (20),
	batizado boolean,
	primeira_comunhao boolean,
	crismado boolean,
	grau_instrucao varchar (30)
)


create table profissao(
	profissao varchar (40),
	local_trabalho varchar (30),
	cargo varchar (40),
	endereco varchar (40),
	bairro varchar (30),
	fone varchar (25),
	conducao_propria boolean,
	usuario numeric (5),
	foreign key (usuario) references users(usuario)
)

create table dependentes (
	nome varchar (40) not null,
	data_nasc date not null,
	estado_civil varchar (15),
	pai numeric (5),
	mae numeric (5),
	foreign key (pai) references users(usuario),
	foreign key (mae) references users(usuario)
)

drop table dependentes

select * from profissao

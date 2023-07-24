create table users( usuario numeric (5) primary key, email varchar (40) unique, senha varchar (40), nome varchar (40) not null, nome_usual varchar (40) , data_nasc date not null, fone varchar (25), religiao varchar (20), batizado boolean default false, primeira_comunhao boolean default false, crismado boolean default false, grau_instrucao varchar (30) );

create table profissao( profissao varchar (40), local_trabalho varchar (30), cargo varchar (40), endereco varchar (40), bairro varchar (30), fone varchar (25), conducao_propria boolean, usuario numeric (5), foreign key (usuario) references users(usuario) );

create table dependentes ( nome varchar (40) not null, data_nasc date not null, estado_civil varchar (15), pai numeric (5), mae numeric (5), foreign key (pai) references users(usuario), foreign key (mae) references users(usuario) )

drop table dependentes


insert into users (usuario, email, senha, nome, data_nasc) values (5, 'ivanildo.felix@gmail.com', '1e8e3736b3463d31ecdfcde560a0b237', 'Ivanildo Felix',  '24-11-1999')

delete from users

select * from users

update users set batizado = true 
where usuario = 5



create table evento ( id_evento serial primary key, nome_evento varchar(30), descricao varchar (80), data_evento date )


create table encontro_casais ( id_evento serial , 
							  usuario numeric (5), nome_ele varchar (40), 
							  nome_ela varchar (40), nome_usual_ele varchar (40),
							  nome_usual_ela varchar (40), data_nasc_ele date not null, 
							  data_nasc_ela date not null, fone1 varchar (25), fone2 varchar (25),
							  religiao_ele varchar (20), religiao_ela varchar (20), 
							  batizado_ele boolean default false, batizado_ela boolean default false, 
							  primeira_comunhao_ele boolean default false, 
							  primeira_comunhao_ela boolean default false, 
							  crismado_ele boolean default false, crismado_ela boolean default false,
							  grau_instrucao_ele varchar (30), grau_instrucao_ela varchar (30),
							  paroquia_pertencem varchar (30), data_casamento date ,
							  estado_civil boolean default true, atuantes_igreja boolean default false,
							  pertencente_movimento boolean default false, desc_movimento varchar (30),
							  outras_religioes boolean default false, desc_outra_relig varchar (30), 
							  pertence_entidade varchar (30),
							  profissao_ele varchar (40), local_trabalho_ele varchar (30), cargo_ele varchar (40),
							  endereco_ele varchar (40), bairro_ele varchar (30), fone_ele varchar (25), conducao_propria_ele boolean,
							  profissao_ela varchar (40), local_trabalho_ela varchar (30), cargo_ela varchar (40),
							  endereco_ela varchar (40), bairro_ela varchar (30), fone_ela varchar (25), conducao_propria_ela boolean,
							  filhos_ficaram_com varchar (30), endereco_responsavel varchar (40), fone_responsavel varchar (25),
							  bairro_responsavel varchar (40), grau_parentesco varchar (25),
							  foreign key (id_evento) references evento (id_evento),
							  status_inscricao boolean default false
							  

)

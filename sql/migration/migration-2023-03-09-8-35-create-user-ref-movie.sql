SET SQL_SAFE_UPDATES = 0;

alter table users
  add mobile varchar(64);

update users
set mobile = '+yyy xxx xxxxxx'
where mobile is null;

insert into users (email, password, name, surname,mobile) values 
('userTemp@gmail.com', '$2b$05$XpAbe6hvlL9ObmADeO1Dd.089uztgQvUEy4kJMqobxJLnp61.9pPK', 'temp', 'temp', '+yyy xxx xxxxxx')

SET @temp_user_id = LAST_INSERT_ID();

alter table movies
add ownerId int4 unsigned,
add foreign key (ownerId) references users(id);

update movies 
set ownerId = @temp_user_id;

alter table movies modify ownerId int4 unsigned not null

alter table movies drop foreign key movies_ibfk_1;
drop index mainCharacterId on movies;
alter table movies add foreign key (mainCharacterId) references main_character(id);
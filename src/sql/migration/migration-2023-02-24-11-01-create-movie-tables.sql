create table main_character (
  id int4 unsigned primary key auto_increment,
  actor varchar(256) not null,
  role varchar(256) not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp
);

create table movies (
  id int4 unsigned primary key auto_increment,
  title varchar(256) not null,
  mainCharacterId int4 unsigned not null unique,
  year varchar(5) not null,
  rating float4 not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  FOREIGN KEY (mainCharacterId) REFERENCES main_character(id)
);

create table images (
  id int4 unsigned primary key auto_increment,
  src varchar(512) not null,
  movieId int4 unsigned not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  FOREIGN KEY (movieId) REFERENCES movies(id)
);

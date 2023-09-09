 create database mpdata;
 use mpdata;
 
 create table User(
 user_id int not null auto_increment,
 first_name varchar(128) not null,
 last_name varchar(128) not null,
 email varchar(128) not null,
 weight double(4,1) not null,
 height int not null,
 fitness_objective varchar(128) not null,
 primary key (user_id)
 );
 
create table Userlogin(
 login_id int not null auto_increment,
 user_id int not null,
 user_email varchar(128) not null,
 user_password varchar(128) not null,
 primary key(login_id),
 constraint fk_user_id foreign key (user_id) references User(user_id)
 );
 
 drop table UserLogin;
 drop table User;
 
 select * from user;
 select * from userlogin;
 
 insert into User (first_name, last_name, email, weight, height, fitness_objective) values('Jordan', 'Belfort', 'jordan@gmail.com', 73.5, 175, 'weight loss');
 insert into User (first_name, last_name, email, weight, height, fitness_objective) values(?,?,?,?,?,?);
 

 

 
use mpdata;

select * from roles;
select * from user_roles;
select * from users;

DELETE FROM user_roles where user_id= '17';
delete FROM users where username='arun123';

drop table users;
drop table user_roles;
drop table roles;

INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');

delete from roles;
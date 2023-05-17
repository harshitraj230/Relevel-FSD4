-- select * from students;

-- total records present in my table

-- select count(*) from students where marks >60;

-- select * from students order by marks ASC;

-- select * from students order by marks DESC;

-- UPDATE students SET MARKS=30 where ID=6;

-- select * from (select * from students order by marks DESC) where rownum<=2;

-- select * from students where marks >=60 and age<50;

-- select * from students where marks >=60 OR age<50;

-- select * from students where marks NOT BETWEEN 30 AND 55;

-- select * from students where id not in (1,5,6,10,13);

-- select * from students where name like '%s';

-- select * from students where name like '%a%';

-- select * from students where name like '_a%';

-- group

-- select avg(marks) from students;
-- select sum(age) from students;
-- select count(id) from students where address='RKA';
-- select min(marks) from students;
-- select max(age) from students;

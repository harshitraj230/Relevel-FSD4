-- create table employee (
--     Emp_id int,
--     emp_name varchar(15),
--     salary int,
--     manager_id int
-- );

-- insert into employee values (1,'Harshit',100000,1);

-- insert into employee values (2,'Rahul',50000,1);

-- insert into employee values (3,'Ankit',750000,1);

-- insert into employee values (4,'Himanshu',120000,1);

-- insert into employee values (5,'Priya',150000,2);

-- insert into employee values (6,'Khushi',60000,2);

-- insert into employee values (7,'Kajal',80000,2);

-- insert into employee values (8,'Rishabh',95000,3);

-- insert into employee values (9,'Niraj',135000,3);

-- insert into employee values (10,'Divya',180000,3);

-- select * from employee;

-- select * from employee where salary = (select max(salary) from employee);

-- select * from employee where salary=(select max(salary) from employee where salary < (select max(salary) from employee));

-- select * from employee where manager_id in (select emp_id from employee);

-- select * from employee where MANAGER_ID=EMP_ID;

-- Update employee SET SALARY=75000 where EMP_ID=3;
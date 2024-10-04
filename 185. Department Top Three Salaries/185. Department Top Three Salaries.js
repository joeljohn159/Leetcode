# Write your MySQL query statement below


with CTE as (select E.id as employeeId, E.name as Ename, E.salary as salary, D.id as id , D.name as Dname, dense_rank() over(partition by D.id order by salary desc) as DR from 
employee E 
join department D
on E.departmentId = D.id)

select Dname as Department, Ename as Employee, salary 
from CTE where DR<4 order by Dname;
# Write your MySQL query statement below

select (lead(T.salary) over (order by T.salary desc)) as SecondHighestSalary from (select distinct salary as salary from employee) T LIMIT 1
# Write your MySQL query statement below

select e1.name
from employee e1 
join employee e2 
on e1.id = e2.managerId
group by e1.id
having count(e1.id) >= 5;
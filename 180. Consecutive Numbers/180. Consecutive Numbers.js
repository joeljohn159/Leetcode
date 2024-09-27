# Write your MySQL query statement below

with CTE as (select num,
Lead(num,1) Over() as num1,
Lead(num,2) Over() as num2
from logs)

select distinct num as ConsecutiveNums from CTE where num = num1 and num1 = num2;

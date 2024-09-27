# Write your MySQL query statement below

-- with CTE as (select *,(case when income < 20000 then 'Low Salary' when income >= 20000 and income <= 50000 then 'Average Salary' else 'High Salary' end) as category
-- from accounts)
-- select category, count(account_id) as account_count
-- from CTE
-- group by category;


select 'Low Salary' as category, count(*) as accounts_count
from accounts
where income < 20000
UNION
select 'Average Salary' as category, count(*) as accounts_count
from accounts
where income >= 20000 and income <= 50000
UNION
select 'High Salary' as category, count(*) as accounts_count
from accounts
where income > 50000
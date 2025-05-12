# Write your MySQL query statement below

select P.product_name as product_name, sum(O.unit) as unit
from Orders O
join products P
on O.product_id = P.product_id
where O.order_date between '2020-02-01' and DATE_ADD('2020-02-01',INTeRVAL 28 DAY) 
group by P.product_name
having sum(O.unit) >= 100 
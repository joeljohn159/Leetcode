# Write your MySQL query statement below

select round(sum(case when DATEDIFF(customer_pref_delivery_date,order_date) < 1 then 1 else 0 end)/ count(customer_id) * 100, 2) as immediate_percentage
from Delivery 
where (customer_id, order_date) in (select customer_id, min(order_date) from delivery group by customer_id)
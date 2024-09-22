# Write your MySQL query statement below

select p.product_id, (case when round(sum(us.units * p.price)/sum(us.units),2) is null then 0 else round(sum(us.units * p.price)/sum(us.units),2) end) as average_price
from prices p
left join UnitsSold us
on p.product_id = us.product_id and us.purchase_date between p.start_date and p.end_date
group by p.product_id;
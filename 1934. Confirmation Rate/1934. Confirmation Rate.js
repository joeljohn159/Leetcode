# Write your MySQL query statement below


select s.user_id, round(sum(case when action like 'confirmed' then 1 else 0 end)/count(s.user_id),2)as confirmation_rate from signups s
left join 
confirmations c 
on s.user_id = c.user_id
group by s.user_id 
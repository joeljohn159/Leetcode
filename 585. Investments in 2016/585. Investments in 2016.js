# Write your MySQL query statement below



-- select pid 
-- from Insurance
-- where
-- group by tiv_2016
-- having tiv_2015


select round(sum(tiv_2016),2) as tiv_2016
from Insurance
where pid in 
(
(select distinct I1.pid as pid
from Insurance I1
Join Insurance I2
on I1.pid != I2.pid and I1.tiv_2015 = I2.tiv_2015)
INTERSECT
(select pid
from Insurance 
group by lat, lon
having count(lat) = 1 )) 


-- on I1.pid != I2.pid and ((I1.lat = I2.lat and I1.lon != I2.lat) or (I1.lat != I2.lat and I1.lon = I2.lat) or (I1.lat != I2.lat and I1.lon != I2.lat))
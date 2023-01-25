created at https://app.quickdatabasediagrams.com/

users
-
id int PK
username varchar
email varchar
password varchar
amount decimal
code int
type varchar
created_at timetamp
updated_at timestamp

products
-
id int PK
GlossId int FK >- typeGloss.id
SuperId int FK >- typeSuper.id
ProId int FK >- typePro.id
price decimal
image varchar
userId int FK >- users.id
brandId int FK >- brands.id
created_at timetamp
updated_at timestamp

typeGloss
-
id int PK #1
code int
collor_name varchar
stock int
created_at timetamp
updated_at timestamp

typeSuper
-
id int PK #2
code int
collor_name varchar
stock int
created_at timetamp
updated_at timestamp

typePro
-
id int PK #3
code int
collor_name varchar
stock int
created_at timetamp
updated_at timestamp

brands
-
id int PK
name varchar
total_employee int
address varchar
created_at timetamp
updated_at timestamp
# Express PG Sequelize

## Tahapan pembuatan api

A. Basic Express : Pembuatan api routing

    1.  Membuat initial npm terlebih dulu
    - npm init -y

    2. Install package yang diperlukan
    - npm install express pg sequelize dotenv ejs dll
        Opsional 
        A. bcrypt
        B. jsonwebtoken
        C. multer

    2. A. npm i --save-dev nodemon sequelize-cli

    3. Buat .gitignore, buat .env, Buat file utama app.js

    4. Buat folder routes dan controllers

B. Pg dan Sequelize : Pembuatan pg dengan sequelize

    1. Membuat sequelize init
    - npx sequelize-cli init
    (auto buat folder: config *isiautoterisi, migrations, models, seders)

    1. A. setting config "development"

    2. Membuat database
    - npx sequelize-cli db:create

    3. Membuat table
    - npx sequelize-cli model:generate --name Employee --attributes name:string,address:string,age:integer,role:string,salary:integer,image:string,EmployerId:integer
    - npx sequelize-cli model:generate --name Employer --attributes name:string,address:string,image:string

    3. A. jangan lupa cek associate di models untuk relational one-to-many / many-to-many

    4. Migrasi / migration table ke dalam database
    - npx sequelize-cli db:migrate

    5. Membuka dokumentasi Sequelize

######################################################################

## Belajar Git

1. Git init = untuk menginisialisasi repogit di PC kita
2. git add <file(s)>
3. git status
4. git commit
5. git config
6. git branch
7. git help

note:

1. keluar dari vim jika mau merge/commit mencetnya klik tombol "esc" ketik :wq!
2. klik "Q" untuk keluar dari git log

######################################################################

FRONT-END

npx create-react-app .
npm i bootstrap sweetalert2 axios
\*axios untuk ngambil/konsumsi API
npm i react-icons

API bohongan
bikin file cd interface,server
npm init -y

mv \* clien/

di folder interface
npx create-react-app .
npm i bootstrap sweetalert2 axios

folder server di npm init -yang
di folder server jalanin npm i json-server

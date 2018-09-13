# Server

knex and featherjs server
backended by pg but can modify to your fav DB
using dotenv for config
default user login schema ready to modify

install and config already implemented

pre-requisites
--------------
postgres install
create user api
grant privileges to api
create database api


    npm i --save knex
    npm i --save pg
    npm i --save @feathers/feathers
    npm i --save dotenv
    npm install eslint --save-dev
    npm install --save-dev babel-eslint@latest
    -- babel-eslint suggestion from Dan Abramov. Makes sense that even 
    -- though Node can handle ES6, that eslint may not and needs a little help
    -- with the ES6 and beyond.

knex migrations in root folder.
Shifting to sub folder of your choice requires change to knexfile.js

start server

npm start





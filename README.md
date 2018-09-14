# api-rest-server

Background
==========

The beginings of a 'good' api model that can be used as a starter.

Roadmap
=======
api-rest-server will be scoped ot the basics of setting up a rest server project. Additional projects will be spawned to add optional functionality.
As such the scope of this project could change wildly as future decisions are made to scale back the scope of this project in order to use it as a foundation for other projects that add the flavours.




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
    npm install nodemon --save-dev

    npm install babel-cli --save-dev
    npm install babel-preset-env babel-preset-stage-4npm install babel-preset-env babel-preset-stage-2 --save-dev --save-dev

babel added and config to enable export default / import

knex migrations in root folder.
Shifting to sub folder of your choice requires change to knexfile.js

start server

npm start

Disclaimer
----------

This work is personal experimentation, use at your own risk. The background is that I started as a developer in the late 90s and by 2005 I moved into Data ETL and BI but continued to do some development form time to time. The bulk of that development was in stand alone applications. My web expreience was limited to some early php web applications and some work with server side rendering in JSF and some java to javasript transpilation through GWT.

I have moved onto manage web projects and developed summary knowledge of the technologies. Doing basic tutorials to understand how the technologies work. This started with .Net MVC, then Angular and Vuejs. More recently working on a substantial React/Redux application has exposed me more to API development and associated tech such as Express and GraphQL.

My intent with any work published on github.com is to:
- store my personal work
- create tools and frameworks for resuse
- excercise my developer brain by creating scalable solutions
- version control my work in a persistent way





# clacdesdoigts_chicken
Technical test to apply to the Clac Des Doigts internship

# Description

For this project to work you will need a few packages:
-nodejs
-dotenv
-express framework
-sql2

Moreover, you will need a .env file which must be prototyped this way :
PORT=3000
MYSQL_HOST='localhost'
MYSQL_PORT=3306
MYSQL_USER='root'
MYSQL_PASSWORD='12345' #this needs to be changed to your own password
MYSQL_NAME='chicken'

# To start the program

You must send the .sql file to mysql by typing this command line :
cat chicken.sql| mysql -u root -p

This will create the database the we will use in the programm.

You will need to type, at the root of the repository:
node index.js

Then you will have to launch postman or use the Vscode extension called Thunder Client. The request should articulate as such (if you keep the same parameter in the .env file) "
localhost:3000/...[chicken for example]

Then, fill up the body of your request, according the the following examples:

[For deleting one chicken or displaying all the chicken's information, you will not need a body request]

[DEL]localhost:300/chicken/:id

[GET]localhost:300/chicken

[POST]localhost:300/chicken or [PUT]localhost:300/chicken/:id
{
  "name": "mike",
  "birthday": "2020-05-08", //optional
  "weight": 700,
  "steps": 90, //optional
  "isRunning": 0 //optional
}

For patch, you can choose the information the you want to update, this is an example of just updating the name of a certain chicken:

[PATCH]localhost:300/chicken/:id
{
  "name": "mike",
}
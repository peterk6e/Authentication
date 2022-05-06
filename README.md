# API Authentication with Node.js  
from: https://www.section.io/engineering-education/node-authentication-api/
 
Most applications have an authentication system or a way of verifying their users. Some make use of APIs while others use other services like OAuth2, etc. Here, I will show you how to make an authentication API that will be used to verify users in a database (MongoDB) and return a JSON web token.  

Prerequisites  
Express.js: We will be using this framework to make Node.js servers and produce APIs.  
Mongoose.js: This will help us create schemas and perform CRUD operations in the database.  
MongoDB: Our data will be saved using this database service.  

## Setting up
To set up our work environment, run the following commands in the terminal while in the project directory.  

    npm init 
to initialize node in the package. Follow all the steps to configure details about your app.  

    npm i express mongoose
to add express and mongoose to your project.  

    npm i bcrypt jsonwebtoken nodemon
we have three new npm packages here:  
**bcrypt** : This will be used to hash our passwords, as we cannot save them directly for security purposes.  

**jsonwebtoken** : It will create and decode our JSON web tokens.  

**nodemon** : This is a useful tool used to restart our server whenever we make any changes in the javascript files.  


# Express js
Express.js is a framework that's built on top of node and is used for creating backend projects.
Why express is used when we can build backends using node.js itself, because code is a lot more readable, only less code is required, ability to add a middleware.

Client side =>the user interface of the website or UI, where the user interacts and plays with the website, make http/http requests.

Server side  => is the backend which is a collection of server+application+database. These three components can be sometimes referred as backend server or server.

There are 6 steps involved in creating an express server. They are,
1. Create directory
2. Create an index.js file.
3. Initialise NPM
4. Install the express package.
5. Write the server side application logic in index.js
6. Start the server.

After using npm init ensure that the "main": "index.js", in package.json is correctly set.

localhost - when we dont have any server to hojst our appliaction and our own local machine is acting as a host

Port is an entry point through which a computer can be accessed. A compouter will have multiple port and each port is identified with a unique number, this is to run different services/applications/hardware can tap into that particular port and we can have multiple services running in the same computer on different ports without any interference between the services.

netstat -ano|findstr "LISTENING" - command to fin out the ports which are being used 

HyperTextTransferProtocol => HTTP is a language/set of rule which allows computers to talk to each other across the internet.

HTTP Request vocabulary
GET - used when we request for a resource(maybe a html page, text, some data from the db) from the server.
POST - used wen we're sending a resoure(eg: a sign up form) to the server.
PUT - update method, used to replace the existing resource with the resource which we send to the server.
PATCH - update method, used to patch the existing resource with the resource which we send to the server.
DELETE - used to delete a resource from the server or the db.

Install package nodemon globally in the system using npm i -g nodemon and after successful installation start the application using "nodemon index.js". This will automatically restart the server when there is any change in the file.

The destination where the request is originated is called endpoint.

HTTP standard status codes are grouped into five categories and they are
1. Informational responses(100-199)
2. Successful response(200-299)
3. Redirection response(300-399)
4. Client side error responses(400-499)
5. Server side error responses(500-599)

The commonly used status codes are 200 ok, 201 created, 404 not found, 301 moved permanently(redirection)

HTTP post request is usually sent via HTML signup forms, when the user enters details and clicks the submit button all the data from the client is sent to the server side and the server will do something with the request and returns the response back to the client side.


# MiddleWare
Express middleware is something that sits between the server and the request/route handlers. When a request comes to the server and before it gets processed by all route handlers(get,post,put etc.,) middleware works with these requests before they are processed and reach their final destintion.

What are all the things that the middleware can do?

1. pre-process the requests =>Eg: When a request is going to go through multiple handlers GET, PUT and POST, these middlewares can change various aspects of that requests and perform various functions on that request before it goes to its final routing.

2. logging the requests => how long did the request take?, what's the type of the request etc.,

3. authentication => before letting the request through we can check and authenticate the client which has sent the request.

4. error handling => check the requests for errors and handle them

body-parser is some commonly used middleware to process the requests. It parses the request body before sending it to the handlers. This will give the request a new property called body(req.body) and it is used very commonly to handle form data.

morgan aother common middleware which is used to log the requests coming into the server.

Custom middlewares can also be created. For example `app.use((req,res,next)=>{
    console.log("Request method"+ req.method);
    next();
});`

almost all middleware has req,res,next as the parameters and the logic of the middleware is given inside the callback and the next function determines when the middleware can be exited and request handlers can be executed.

Ordering of middleware is important and middlewares are executed in the order as they're in the code.

If a request is to br authenticated first before getting the request body then that middleware should be at the top.

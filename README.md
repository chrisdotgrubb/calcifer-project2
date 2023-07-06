# Car service records app

This project is to showcase my ability to perform CRUD operations using Mongo, Express, Node, and EJS. It is for a hypothetical auto repair shop that needs to keep track of customer records, their cars, and the services performed on those cars. This is done through nested embedded models. There is also a seperate model to keep track of all of the services being done in the shop.

[Deployed with fly.io](https://calcifer-project2.fly.dev/)

Node and Express were used for the functionality of this app. HTML was used to create the pages, with EJS allowing for the display of dynamic content. Mongo was used as a database to store all of that content, with Mongoose allowing for easier access and communication between the server and database.

A fictitional auto repair shop was chosen for this project as an example of a consumer that needs to store, access, and alter complex data. The shop needs to keep track of customers, their cars, and services. Each customer can have many cars, and each car can have many services. This led to the creation of nested models, done with Mongoose through embedding. In addition to these records, there was a need to track all cars that are currently in the shop for service. Checking each service of each car of each customer on every page load would have been excessive, so a seperate model was created to keep track of only the services currently being performed. This _Shop_ model takes the id of the customer, car, and service being performed, and stores them in a much more easily accessible way. This seperate model makes querying and manipulating service records much more simple and efficient.

<br />

# Customers

The _Customer_ model is used to store information about _customers_. It stores name, phone number, email, and the communicaton preferences of a customer, but can easily be expanded to include more information if necessary. It also stores the _customer_'s _cars_ as an embedded model.

## Routes

Method | Path  | Purpose | Note
-----------|------------------|------------------|:---:
GET     | /customers | View all _customers_ | No payload
GET     | /customers/:customerId | View one _customer_ | No payload
GET     | /search | Search _customers_ by first or last name | Needs search term<br>(req.query.search)
GET     | /customers/new | View page for adding new _customer_ | No payload
GET     | /customers/:customerId/edit | View page for editing one _customer_ | No payload
POST    | /customers | Create a new _customer_ | Needs new _customer_ fields<br>(req.body)
PUT     | /customers/customerId | Update a _customer_ | Needs updated _customer_ fields<br>(req.body)
DELETE  | /customers/customerId | Delete a _customer_ | No Payload **

<br />

# Car

The _Car_ model is embedded into the _Customer_ model and stores all _cars_ of that customer. It stores information about the car that is relevant to the shop. It also stores the _car_'s _services_ as an embedded model.

## Routes

> \*All car routes are related to a specific customer, and therefore start with _/customers/:customerId_

Method | Path  | Purpose | Note
-----------|------------------|------------------|:---:
GET     | /cars | View all _cars_ | No payload
GET     | /cars/:carId | View one _car_ | No payload
GET     | /cars/new | View page for adding new _car_ | No payload
GET     | /cars/:carId/edit | View page for editing one _car_ | No payload
POST    | /cars | Create a new _car_ | Needs new _car_ fields<br>(req.body)
PUT     | /cars/:carId | Update a _car_ | Needs updated _car_ fields<br>(req.body)
DELETE  | /cars/:carId | Delete a _car_ | No Payload **

<br />

# Service

The _Service_ model is embedded into the _Car_ model and stores all _services_ of that car. It stores the date, price, and a description of the service performed, and can also be used to schedule future services.

## Routes

> \*All service routes are related to a specific car of a specific customer, and therefore start with _/customers/:customerId/cars/:carId_

Method | Path  | Purpose | Note
-----------|------------------|------------------|:---:
GET     | /services | View all _services_ | No payload
GET     | /services/:serviceId | View one _service_ | No payload
GET     | /services/new | View page for adding new _service_ | No payload
GET     | /services/:serviceId/edit | View page for editing one _service_ | No payload
POST    | /services | Create a new _service_ | Needs new _service_ fields **<br>(req.body)
PUT     | /services/:serviceId | Update a _service_ | Needs updated _service_ fields **<br>(req.body)
DELETE  | /services/:serviceId | Delete a _service_ | No Payload **

> \*\*These routes will also add or remove a Shop item associated with the Service (based on the value of isInShop) to keep track of all services currently being performed.

<br />

# Shop

The _Shop_ model is used to store references to services that are currently being performed in the shop. This is done to make these _services_ more accessible. There are no specifc routes associated with adding or deleting from the _shop_. This is mainly done through the service routes, or in the rare case that a _car_ or _customer_ is deleted while that _service_ is in the _shop_. The only specific route for _service_ is the home route which displays all _services_ in the _shop_. These _services_ can also be accessed on any page through the dropdown in the navbar.

## Route

Method | Path  | Purpose | Note
-----------|------------------|------------------|:---:
GET     | / | View all _services_ in the _shop_ | No payload

<br />
<br />

## Next steps

Before this app can be used it needs a few things added. First is an addition of a time field to the _Service_ model. This will allow a service to be scheduled for a specific time, but will also require the addition of another _Appointment_ model that will contain a list of available times that can be assigned to the _service_ then removed from the available list. This will require setting an amount of time into the future that a service can be scheduled, so blocks of times can be created.

The next thing to add is a user model with different permissions. A _receptionist_ user will be able to schedule and alter appointments. A _technician_ user will be able to add a service to the shop and remove it when finished. A _manager_ user is the only one who will have the permission to delete items.

This project can also benefit from some styling improvements. This was not an exercise in visual design, but in managing complex data. That said, it would certainly look nicer with some more time devoted to styling.

Finally, data is currently just being entered as strings. This means that consitency and accuracy is not being enforced. "1901 Dodge F-150" is a valid entry into the database. The addition of an API like [CarQuery](https://www.carqueryapi.com/) would allow for proper selection of car makes, models, engine size, and trim levels.

# Go-bikefy 
>Bikes & Stuff


## Getting Started
### [Demo here!](https://go-bikefy2.herokuapp.com/login)

Clone the repo
   ```sh
   git clone https://github.com/gmontana77/go-bikefy.git
   ```


### Execution requirements 

Please referred to the .env file to run locally, also visit the `db.js` and `server.js` in the root folder. Also for the porpuse of the Heroku deployment `package.json` was modified as well.

* `Node Express` & `Mongo DB` 
* In the upper folder run nodemon server
* Localhost should be running on port 5000 `http://localhost:5000/api/bikes/getallbikes`
* cd in to the `client` folder and run yarn start


### Technologies Used
The application as being built with `React, Redux, Redux-Thunk, Node Express, Mongo DB & Ant Design`.

### Features
* Stripe Payment Gateway Integration
* State Management Redux (actions, reducers, store)
* User Dashboard, Admin dashboard, Manage Users, Bicycles, Bookings from the Admin panel
* Single Page Applications & Responsive Design

### User Actions
* User should be able to register/login
* See bikes available, book & pay
* See bookings
* As admin user can see admin area, see catalogue, edit/update bike, delete & see catalogue.

### UML Diagram 
<img src="https://i.ibb.co/4mnkS4c/screenshot.png" width="350" title="Click here">

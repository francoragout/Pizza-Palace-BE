Final Project: Restaurant Menu by Franco Ragout

Before starting the journey through the page there are two facts that you should know for a better experience:

Admin email: pizzapalace@gmail.com

Admin password: Pizza1234

Now we can continue with the rest...

Objective

Develop an application for customers to choose from different restaurant menus and place their orders.

Sections

Login
Login screen where the user can authenticate or register through a link to the registration form.

Registration
It can be a page or a modal where new users can register. The essential data required for entry should be an email and password, with the option to add additional information.

Home
Main screen with information about the restaurant and the available menus for users to select from.

Orders
A page that displays the menus selected by the user and their total cost. It should have an order button. Upon clicking, the order will be saved in the database as pending.

Admin Page (CRUD)
The admin user should be able to access a page that shows the lists of users, menus, and orders and perform the following operations:

• Users
Add users
Deactivate users

• Menus (products)
Add menus
Modify menus
Delete menus

• Orders
Modify orders from pending to completed

Technical Requirements
The displayed data should be persisted in a MongoDB database.
The frontend should be developed using React.js.
Protected routes using React Router.
Authentication using JWT.
The project should be uploaded to a repository and deployed.

Evaluation Criteria
● The design should be responsive, using either pure CSS or Bootstrap.
● Good GIT and Github practices.
● Use of Trello and SCRUM methodology.
● Good coding practices in terms of structure.
● Separate repositories for frontend and backend, both deployed.

Basic Database Structure

• Users
name
email
password
status
role

• Menus
name
status
price
details
category

• Order
user
date
menu
status

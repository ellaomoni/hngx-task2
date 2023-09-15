CRUD Operation API Documentation
This documentation provides an overview of CRUD (Create, Read, Update, Delete) operations using a Person as an example.

Table of Contents
Getting Started
Prerequisites
Installation
API Endpoints
Create
Read
Update
Delete
Usage Examples
Getting  Started
In software development, CRUD operations are fundamental actions used to manipulate data. CRUD stands for Create, Read, Update, and Delete. In this guide, we'll walk you through implementing these operations for a "Person" entity.

Prerequisites
Before you begin, make sure you have the following requirements:

Node.js
MongoDB
Installation
Clone the repository:
git clone https://github.com/danielopara/hngx-project2.git
cd hngx-task2
In the project directory run these commands to install the dependencies and run the API:
npm install
npm start
API Endpoints
Create
Endpoint : https://hngx-task2.onrender.com/api
Method: POST
Description: Create a new person in the database
Request Body: JSON data containing a value "name" and the name of the person.
Response: Contains a message "Person saved successfully" and the person object that contains id and name.
Read
Endpoint: https://hngx-task2.onrender.com/api
Method: GET
Description: This endpoint is for reading all the persons in the database.
Response: JSON response with the resource data.
Endpoint https://hngx-task2.onrender.com/api/:_id
Method: GET
Description: Retrieve details of a specific person by their id.
Response: JSON response with the resource data.
Update
Endpoint: https://hngx-task2.onrender.com/api/:_id
Method: PUT
Description: Update an existing person by its ID.
Request Body: JSON data containing the updated name of the person.
Response: JSON response containing the updated person.
Delete
Endpoint: https://hngx-task2.onrender.com/api/:_id
Method: DELETE
Description: Delete a person from the database by id.
Response: JSON response indicating the person with the id has been deleted.
Usage Example
Create a new person
HTTP Method: POST Endpoint: https://hngx-task2.onrender.com/api/:_id
Request Body:

{
    "name": "Ella"
    }
    Response:

    {
        "_id": "64fe1c7732278ab8bb0c04a2",
            "name": "Ella"
            }
            Retrieve a List of Persons
            HTTP Method: GET Endpoint: https://hngxproject2.onrender.com/api Response:

            [
                {
                        "_id": "64fe1c7732278ab8bb0c04a2",
                                "name": "Ella"
                                    }
                                    ]
                                    Retrieve a Person by id
                                    HTTP Method: GET Endpoint: https://hngx-task2.onrender.com/api/ 65048af28f2d57c13097a51b
                                    Response:

                                        {
                                                "_id": " 65048af28f2d57c13097a51b",
                                                        "name": "Ella"
                                                            }
                                                            Update a Person by id
                                                            HTTP Method: PUT Endpoint: https://hngx-task2.onrender.com/api/ 65048af28f2d57c13097a51b Request Body:

                                                            {
                                                                "name": "Mary"
                                                                }
                                                                Response:

                                                                {
                                                                  "message": " Updated Successfully",
                                                                    "updated Person": {
                                                                        "id": " 65048af28f2d57c13097a51b",
                                                                            "name": "Mary"
                                                                              }
                                                                              }
                                                                              HTTP Method: DELETE Endpoint: https://hngx-task2.onrender.com/api/64fe1c7732278ab8bb0c04a2 Response:

                                                                                {
                                                                                              "_id": " 65048af28f2d57c13097a51b",
                                                                                                            "message": "This Id has been deleted”,
                                                                                                                }


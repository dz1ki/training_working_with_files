## Description

This project implements authorization by JWT token. Emphasis is placed on working with files  
and different storage options. The data_link table stores links to files that are stored in the cloud.  
The data_binary table stores the binary code of the file.  
All work with files on the server is done using Buffer and Streams.  
Stack: Node.js, Express, Postgresql, Sequelize, Cloudinary, Streamifier, Swagger, Typescript.

Functional:

1. User registration.
2. User authorization.
3. Get the user.
4. Delete the user.
5. The User has the option to upload an image.
6. View a list of your images.
7. Generate a PDF for any user based on that user's image.
8. List of all PDF documents for the user.
9. Get PDF document by its name.

## Running the app

```bash
# In the config folder, add local.json

# In the console, run the database image with the command:
$ docker-compose up

# Create tables in the database using the "migrations" command:
$ npm run migrate:run

# To compile the project to JavaScript:
$ npm run build

# To start a project:
$ npm run start

```

## Test

Documentation (Swagger UI) is available at: [link] http://localhost:3000/api/

node v16.14.2

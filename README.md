# spontom_full_stack

## Demo Credentials

email = test@gmail.com
password = 12345678


## Getting Started

To get started with this backend, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Configure the environment variables as per the provided `.env.sample`.
4. Start the server using `npm start`.

## backend deployed link
 [backend deployed link](https://spontom-full-stack.onrender.com)

## frontend deployed link 
 [frontend deployed link](https://ehrecord.netlify.app)



## API Documentation

### Authentication

### User Registration

#### `users/register` (POST)

- **Description:** Register a new user.
- **Method:** POST
- **Request Body:**
  - `username`: String (required) - The username of the user.
  - `email`: String (required) - The email address of the user.
  - `password`: String (required) - The password for the user account.
 
- **Request Headers:**
  - `Content-Type: application/json`
- **Response:**
  - `status`: String (Success/Error) - Status of the registration process.
  - `msg`: String - Additional message indicating the result of the registration process.
  - `data`: Object - Data returned upon successful registration, containing:
- **Success Response Example:**
  ```json
   {
    "status": "success",
    "msg": "User has been created successfully",
  } ```


  ### User Login

#### `users/login` (POST)

- **Description:** Login an existing user.
- **Method:** POST
- **Request Body:**
  - `email`: String (required) - The email address of the user.
  - `password`: String (required) - The password for the user account.
- **Request Headers:**
  - `Content-Type: application/json`
- **Response:**
  - `status`: String (Success/Error) - Status of the login process.
  - `msg`: String - Additional message indicating the result of the login process.
- **Success Response Example:**
  ```json
  {
    "status": "success",
    "msg": "User login successfully"
  }


### User Logout

#### `users/logout` (POST)

- **Description:** Logout an existing user.
- **Method:** POST
- **Request Headers:**
  - `Authorization: Bearer <access_token>` (required) - Access token obtained during login.
- **Response:**
  - `status`: String (Success/Error) - Status of the logout process.
  - `msg`: String - Additional message indicating the result of the logout process.
- **Success Response Example:**
  ```json
  {
    "status": "success",
    "msg": "User logged out successfully"
  }



## patients end point


GET /patients ->  This endpoint retrieves details of all patients stored in the database.

POST /patients/add ->
This endpoint allows the addition of a new patient to the database.

## request body 

 - `first_name`: First name of the patient
 - `last_name`: Last name of the patient
 - `gender`: Gender of the patient
 - `blood_type`: Blood type of the patient
 - `phone_number`: Phone number of the patient
 - `email`: Email address of the patient
 - `emergency_contact`: Emergency contact details of the patient
 - `health`: Health information of the patient


PATCH /patients/update/:id
This endpoint updates the details of an existing patient.

- `id`: The unique identifier of the patient to be updated

DELETE /patients/delete/:id
This endpoint deletes the record of a specific patient from the database.

 - `id`: The unique identifier of the patient to be deleted


## And for tokens I am using Json web token library ,  for storing hashed password in db I am using bcrypt library



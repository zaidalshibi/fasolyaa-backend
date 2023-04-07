# fasolyaa-backend

## This is the backend for the Fasolyaa project

### How to run

1. Clone the repo
2. Run `npm install`
3. I have used `postgres` as the database.
4. I have added a `.env` file to the repo. You can use that or create your own. If you create your own, make sure to add the following variables to it:

    ``` text
    PORT=3001
    DATABASE_URL = postgres://postgres:postgres@localhost:5432/fasolyaa
    JWT_SECRET = 4715aed3c946f7b0a38e6b534a9583628d84e96d10fbc04700770d572af3dce43625dd
    ```

5. Run `npm start` to start the server

## API

### POST /users/signup

Creates a new user

``` json
{
    "name" : "Zaid Alshibi",
    "username" : "zaidalshibi",
    "password" : "admin123",
    "email" : "zaidealshibi@gmail.com",
    "phone" : "0799092056",
    "dob" : "1998-11-13",
    "gender" : "male"
}
```

### POST /users/login

Logs in a user

``` js
base64.encode(username + ":" + password)
axios.post("your_server_link/users/login", {}, {
    headers: {
        Authorization: "Basic " + base64.encode(username + ":" + password)
    }
})
```

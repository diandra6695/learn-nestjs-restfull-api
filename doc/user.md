# User API spec

## Register User

Endpoint : POST /api/users

requsest body:

```json
{
  "username" : "diandra",
  "password" : "sama konco satu",
  "name" : "Diandra Aditya"
}
```

Response body (Succes):

```json
{
  "data" : {
    "username" : "diandra",
    "name" : "Diandra Aditya"
  }
}
```

Response body (Failed):

```json
{
  "errors" : "Username alredy registered"
}
```

## Login User

Endpoint : POST /api/users/login

requsest body:

```json
{
  "username" : "diandra",
  "password" : "sama konco satu"
}
```

Response body (Succes):

```json
{
  "data" : {
    "username" : "diandra",
    "name" : "Diandra Aditya"
    "token" : "session_id_generaeted"
  }
}
```

Response body (Failed):

```json
{
  "errors" : "Username or password is wrong"
}
```

## Get User

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response body (Succes):

```json
{
  "data" : {
    "username" : "diandra",
    "name" : "Diandra Aditya"
  }
}
```

Response body (Failed):

```json
{
  "errors" : "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

requsest body:

```json
{
  "password" : "sama konco satu", //optional, if want to change password
  "name" : "Diandra Aditya" //optional, if want to change name
}
```

Response body (Succes):

```json
{
  "data":{
    "username" : "diandra",
    "name" : "Diandra Aditya"
  }
}
```


## logout User

Endpoint : DELETE /api/users/current

Headers :
- Authorization : token

Response body (Succes):

```json
{
  "data" : true
}
```

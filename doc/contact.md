# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Header :

- Authorization : token

Request Body

```json
{
  "first_name": "diandra",
  "last_name": "aditya",
  "email": "diandra@gmail.com",
  "phone": "083214567332"
}
```

Response Body

```json
{
  "data": {
    "id": 1,
    "first_name": "diandra",
    "last_name": "aditya",
    "email": "diandra@gmail.com",
    "phone": "083214567332"
  }
}
```

## Get Contact

Endpoint : GET /api/contacts/:contactId

Header :

- Authorization : token

Response Body

```json
{
  "data": {
    "id": 1,
    "first_name": "diandra",
    "last_name": "aditya",
    "email": "diandra@gmail.com",
    "phone": "083214567332"
  }
}
```

## Update Contact

Endpoint : PUT /api/contacts/:contactId

Header :

- Authorization : token

Request Body

```json
{
  "first_name": "diandra",
  "last_name": "aditya",
  "email": "diandra@gmail.com",
  "phone": "083214567332"
}
```

Response Body

```json
{
  "data": {
    "id": 1,
    "first_name": "diandra",
    "last_name": "aditya",
    "email": "diandra@gmail.com",
    "phone": "083214567332"
  }
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:contactId

Header :

- Authorization : token

Response Body

```json
{
  "data": true
}
```

## Search Contact

Endpoint : GET /api/contacts

Header :

- Authorization : token

Query Params :

- name : string, contact first name or contact last name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size : number, default 10

Response Body

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "diandra",
      "last_name": "aditya",
      "email": "diandra@gmail.com",
      "phone": "083214567332"
    },
    {
      "id": 1,
      "first_name": "diandra",
      "last_name": "aditya",
      "email": "diandra@gmail.com",
      "phone": "083214567332"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

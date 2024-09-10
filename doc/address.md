# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Request Body :

```json
{
  "street" : "Jalan Mulyoharjo, optional",
  "city" : "Dermolo, optional",
  "province" : "province, optional",
  "country" : "country",
  "postal_code" : "5643"
}
```

Response Body

```json
{
  "data":{
    "id" : 1,
    "street" : "Jalan Mulyoharjo, optional",
    "city" : "Dermolo, optional",
    "province" : "province, optional",
    "country" : "country",
    "postal_code" : "5643"
  }
}
```

## Get Address

Endpoint :  GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Response Body

```json
{
  "data":{
    "id" : 1,
    "street" : "Jalan Mulyoharjo, optional",
    "city" : "Dermolo, optional",
    "province" : "province, optional",
    "country" : "country",
    "postal_code" : "5643"
  }
}
```

## Update Address

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body :

```json
{
  "street" : "Jalan Mulyoharjo, optional",
  "city" : "Dermolo, optional",
  "province" : "province, optional",
  "country" : "country",
  "postal_code" : "5643"
}
```

Response Body

```json
{
  "data":{
    "id" : 1,
    "street" : "Jalan Mulyoharjo, optional",
    "city" : "Dermolo, optional",
    "province" : "province, optional",
    "country" : "country",
    "postal_code" : "5643"
  }
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Response Body

```json
{
  "data" : true
}
```

## List Addresses

Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Response Body

```json
{
  "data": [
    {
      "id" : 1,
      "street" : "Jalan Mulyoharjo, optional",
      "city" : "Dermolo, optional",
      "province" : "province, optional",
      "country" : "country",
      "postal_code" : "5643"
    },
    {
      "id" : 2,
      "street" : "Jalan Mulyoharjo, optional",
      "city" : "Dermolo, optional",
      "province" : "province, optional",
      "country" : "country",
      "postal_code" : "5643"
    }
  ]
}
```

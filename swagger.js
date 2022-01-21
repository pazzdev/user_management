module.exports = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "User Management",
    "description": "User Management API"
  },
  "host": process.env.DEVELOPMENT,
  "basePath": "/",
  "tags": [
    {
      "name": "User"
    }
  ],
  "schemes": [
    "http",
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/users": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Add user details",
        "description": "Add user details",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "payload",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "User has been added successfully."
          }
        }
      },
      "get": {
        "tags": [
          "User"
        ],
        "summary": "get users data.",
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "type": "number"
          },
          {
            "name": "phoneNumber",
            "in": "query",
            "type": "number"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        }
      },
      "patch": {
        "tags": [
          "User"
        ],
        "summary": "Edit user details",
        "description": "Edit user details",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "type": "number"
          },
          {
            "name": "firstName",
            "in": "query",
            "type": "string"
          },
          {
            "name": "lastName",
            "in": "query",
            "type": "string"
          },
          {
            "name": "email",
            "in": "query",
            "type": "string"
          },
          {
            "name": "phoneNumber",
            "in": "query",
            "type": "number"
          }
        ],
        "responses": {
          "200": {
            "description": "User has been updated successfully."
          }
        }
      },
      "delete": {
        "tags": [
          "User"
        ],
        "summary": "Delete user details",
        "description": "Delete user details",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "type": "number"
          },
          {
            "name": "phoneNumber",
            "in": "query",
            "type": "number"
          }
        ],
        "responses": {
          "200": {
            "description": "User has been deleted successfully."
          }
        }
      },
    }
  },
  "definitions": {
    "User": {
      "required": [
        "firstName",
        "lastName",
        "email",
        "phoneNumber"
      ],
      "properties": {
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "phoneNumber": {
          "type": "number"
        }
      }
    }
  }
}
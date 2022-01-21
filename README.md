# User management

## Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Any changes made in the project make sure to run `npm run build` before you run `npm start`
3. Run `npm start` command

## Sequelize Commands for DB Manipulation.

## Running Migrations:
ts-node ./node_modules/typeorm/cli.js migration:run

## Undoing Migrations:
typeorm migration:create -n myMigration

## Test Using Jest:
Single file test `npm test filename`
multiple files at once `npm test`

## Run Swagger
URL : http://localhost:8000/api-docs/

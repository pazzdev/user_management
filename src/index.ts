import "reflect-metadata";
import { Application } from "express";
import * as express from 'express';
import * as morgan from "morgan";
const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('../swagger');
import Router from "./routes";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(Router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const App = app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});

export default App
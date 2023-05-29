import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import Routes from "./routes";

const app = express()
createConnection()

app.use(bodyParser.json())
app.use(Routes)

app.listen(3333)
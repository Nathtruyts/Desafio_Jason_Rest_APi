import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Place } from "./entity/places"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "db_desafio",
    synchronize: true,
    logging: false,
    entities: [User, Place],
    migrations: [],
    subscribers: [],
})

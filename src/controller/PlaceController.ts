import { getRepository } from "typeorm";
import { Place } from "../entity/places";
import { Request, Response } from 'express'

export const getPlace = async (request: Request, response: Response) => {
    const place = await getRepository(Place).find()
    return response.json(place)
};
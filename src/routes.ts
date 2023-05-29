import { Router, Request, Response } from 'express'


const Routes = Router()

Routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Bem vindo a Api *Insira um nome de APi aqui* '})

})

export default Routes
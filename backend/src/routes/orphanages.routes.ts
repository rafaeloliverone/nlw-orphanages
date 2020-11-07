import { Router } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

import CreateOrphanageService from '../services/CreateOrphanageService';

const routes = Router()

const orphanagesRouter = Router()

orphanagesRouter.post('/', async (request, response) => {
  
  const { 
    name, 
    latitude, 
    longitude, 
    about, 
    instructions, 
    opening_hours, 
    open_on_weekends 
  } = request.body

  const createOrphanage = new CreateOrphanageService();


  const orphanage =  await createOrphanage.execute({
    name, 
    latitude, 
    longitude, 
    about, 
    instructions, 
    opening_hours, 
    open_on_weekends 
  })
  
  response.status(201).json(orphanage);

})


export default orphanagesRouter;
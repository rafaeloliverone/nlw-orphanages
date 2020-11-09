import { Request, Response, Router } from 'express';
import multer from 'multer';
import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Orphanage from '../models/Orphanage';
import uploadConfig from '../config/upload'
import orphanageView from '../views/orphanages_view';

import CreateOrphanageService from '../services/CreateOrphanageService';

const orphanagesRouter = Router();
const upload = multer(uploadConfig)

orphanagesRouter.get('/', async (request: Request, response: Response) => {
  const orphanagesRepository = await getRepository(Orphanage);

  const orphanages = await orphanagesRepository.find({
    relations: ['images']
  });

  return response.status(200).json(orphanageView.renderMany(orphanages));
})

orphanagesRouter.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const orphanagesRepository = await getRepository(Orphanage);

  const orphanage = await orphanagesRepository.findOne(id, {
    relations: ['images']
  });

  if (!orphanage) {
    throw new AppError('No orphanages found with this id.', 404);
  }

  return response.status(200).json(orphanageView.render(orphanage));
})

orphanagesRouter.post('/', upload.array('images') ,async (request: Request, response: Response) => {

  const requestImages = request.files as Express.Multer.File[];

  const { 
    name, 
    latitude, 
    longitude, 
    about, 
    instructions, 
    opening_hours, 
    open_on_weekends 
  } = request.body;

  const createOrphanage = new CreateOrphanageService();

  const orphanage =  await createOrphanage.execute({
    name, 
    latitude, 
    longitude, 
    about, 
    instructions, 
    opening_hours, 
    open_on_weekends,
    requestImages
  });
  
  response.status(201).json(orphanage);

})


export default orphanagesRouter;
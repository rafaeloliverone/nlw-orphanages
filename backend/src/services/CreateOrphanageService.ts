import { getRepository } from "typeorm";
import * as Yup from 'yup';

import Orphanage from "../models/Orphanage";
import AppError from '../errors/AppError';
import schemaOrphanage from '../utils/validateOrphanage';

interface Request {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  requestImages: Express.Multer.File[];
}

class CreateOrphanageService {
  public async execute({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, requestImages}: Request): Promise<Orphanage> {
    const orphanagesRepository = await getRepository(Orphanage);

    const checkOrphanageExists = await orphanagesRepository.findOne({
      where: { name }
    })

    if (checkOrphanageExists) {
      throw new AppError('Orphanage already exists.', 400);
    }

    const images = requestImages.map(image => {
      return { path: image.filename };
    })
    
    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    }

    await schemaOrphanage.validate(data, {
      abortEarly: false,
    });

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    })

    
    await schemaOrphanage.validate(orphanage, {
      abortEarly: false, 
    });

    await orphanagesRepository.save(orphanage);

    return orphanage;
  }
}

export default CreateOrphanageService;

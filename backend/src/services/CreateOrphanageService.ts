import { getRepository } from "typeorm";
import Orphanage from "../models/Orphanage";


interface Request {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
}

class CreateOrphanageService {
  public async execute({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends}: Request): Promise<Orphanage> {
    const orphanagesRepository = await getRepository(Orphanage);

    const checkOrphanageExists = await orphanagesRepository.findOne({
      where: { name }
    })

    if (checkOrphanageExists) {
      throw new Error('Orphanage already exists.');
    }

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    })

    await orphanagesRepository.save(orphanage);

    return orphanage;
  }
}

export default CreateOrphanageService;

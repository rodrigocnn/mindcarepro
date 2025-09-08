import { hash } from "bcrypt";

import { CreatePsychologistDTO } from "../dtos/create-psychologist.dto";
import { IPsychologistRepository } from "../repositories/psychologist.repository";

export class PsychologistService {
  constructor(private psychologistRepository: IPsychologistRepository) {}

  async create(data: CreatePsychologistDTO) {
    const saltRounds = parseInt(process.env.SALT_ROUNDS || "10", 10);
    const hashedPassword = await hash(data.password, saltRounds);

    const psychologistToCreate = {
      ...data,
      password: hashedPassword,
    };

    const user = await this.psychologistRepository.create(psychologistToCreate);
    return user;
  }
}

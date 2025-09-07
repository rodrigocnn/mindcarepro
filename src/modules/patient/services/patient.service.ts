import { CreatePatientDTO } from "../dtos/create-patient.dto";
import { ResponsePatientDTO } from "../dtos/response-patient.dto";
import { IPatientRepository } from "../repositories/patient.repository";

export class PatientService {
  constructor(private patientRepository: IPatientRepository) {}

  async create(data: CreatePatientDTO): Promise<ResponsePatientDTO> {
    // Aqui você pode adicionar validações de negócio, por exemplo: email único
    return this.patientRepository.create(data);
  }

  async read(): Promise<ResponsePatientDTO[]> {
    return this.patientRepository.read();
  }

  async show(id: string): Promise<ResponsePatientDTO | null> {
    return this.patientRepository.show(id);
  }

  async update(
    id: string,
    data: CreatePatientDTO
  ): Promise<ResponsePatientDTO | null> {
    return this.patientRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.patientRepository.delete(id);
  }

  async exists(id: string): Promise<boolean> {
    if (!this.patientRepository.exists) {
      throw new Error("Method not implemented.");
    }
    return this.patientRepository.exists(id)!;
  }
}

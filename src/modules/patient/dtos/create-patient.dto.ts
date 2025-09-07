export interface CreatePatientDTO {
  psychologistId: string; // necessário para multitenancy
  name: string;
  email: string;
  phone: string;
  cpf: string;
  rg?: string;
  birthDate: string;
  notes?: string;
}

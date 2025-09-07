import { CreateLoginDTO } from "../dtos/create-login.dto";

export interface IAuthRepository {
  findByEmail(email: string): Promise<CreateLoginDTO>;
}

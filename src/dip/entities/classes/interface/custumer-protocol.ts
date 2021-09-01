export interface IndidualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EntrerpriseCustomerProtocol {
  company: string;
  cnpj: string;
}

export interface CustumerOrder {
  getName(): string;
  getIDN(): string;
}

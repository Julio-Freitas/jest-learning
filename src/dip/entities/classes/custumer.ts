import {
  EntrerpriseCustomerProtocol,
  CustumerOrder,
  IndidualCustomerProtocol,
} from './interface/custumer-protocol';

export class IndidualCustomer
  implements IndidualCustomerProtocol, CustumerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EntrerpriseCustomer
  implements EntrerpriseCustomerProtocol, CustumerOrder
{
  company: string;
  cnpj: string;

  constructor(company: string, cnpj: string) {
    this.company = company;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.company;
  }
  getIDN(): string {
    return this.cnpj;
  }
}

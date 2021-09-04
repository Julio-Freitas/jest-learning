import { EntrerpriseCustomer, IndidualCustomer } from './custumer';

describe('EntrerpriseCustomer', () => {
  it('Should be EntrerpriseCustomer', () => {
    const entrepsie = new EntrerpriseCustomer('Companys', '39.221.387/0001-41');

    expect(entrepsie).toHaveProperty('company', 'Companys');
    expect(entrepsie).toHaveProperty('cnpj', '39.221.387/0001-41');
  });
});

describe('IndidualCustomer', () => {
  const entrepsie = new IndidualCustomer(
    'Julio',
    'Cesar',
    '39.221.387/0001-41'
  );
  it('Should be IndidualCustomer', () => {
    expect(entrepsie).toHaveProperty('firstName', 'Julio');
    expect(entrepsie).toHaveProperty('lastName', 'Cesar');
    expect(entrepsie).toHaveProperty('cpf', '39.221.387/0001-41');

    expect(entrepsie.getIDN()).toEqual(entrepsie.cpf);
  });

  it('Shoul have methods getName', () => {
    expect(entrepsie.getName()).toEqual(
      `${entrepsie.firstName} ${entrepsie.lastName}`
    );
  });

  it('Shoul have methods CPF', () => {
    expect(entrepsie.getIDN()).toEqual(entrepsie.cpf);
  });
});

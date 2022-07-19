const supertest = require('supertest');

const url = 'localhost:4010';
const request = supertest(url);

const mainUser = { name: 'Emanuel Andrade', email: 'email@emai.com', password: '123123' };
describe('CRUD Usuarios', () => {
  test('Deve cadastrar corretamente um usuário', async () => {
    const user = await request.post('/users').send(mainUser);
    expect(user.body.errors).toEqual(null);
    expect(user.statusCode).toEqual(200);
  });
});

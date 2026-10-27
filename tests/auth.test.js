const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../app');

test('POST /auth/login con datos incompletos devuelve 400', async () => {
  const res = await request(app)
    .post('/auth/login')
    .send({ email: '', password: '' });

  assert.equal(res.status, 400);
});

test('POST /auth/login con email inválido devuelve 400', async () => {
  const res = await request(app)
    .post('/auth/login')
    .send({ email: 'email-sin-arroba', password: 'Password123!' });

  assert.equal(res.status, 400);
});

test('POST /auth/register sin password devuelve 400', async () => {
  const res = await request(app)
    .post('/auth/register')
    .send({
      email: 'nuevo@example.com',
      rol_id: 1
    });

  assert.equal(res.status, 401);
});

test('GET /usuarios sin token devuelve 401', async () => {
  const res = await request(app).get('/usuarios');

  assert.equal(res.status, 401);
});

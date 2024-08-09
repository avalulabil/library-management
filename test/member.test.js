const request = require('supertest');
const app = require('../src/app');

describe('Member API', () => {
  it('should get all members', async () => {
    const res = await request(app).get('/members');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should borrow a book', async () => {
    const res = await request(app).post('/members/borrow').send({
      memberCode: 'M001',
      bookCode: 'JK-45',
    });
    expect(res.statusCode).toEqual(200);
  });

  it('should return a book', async () => {
    const res = await request(app).post('/members/return').send({
      memberCode: 'M001',
      bookCode: 'JK-45',
    });
    expect(res.statusCode).toEqual(200);
  });
});
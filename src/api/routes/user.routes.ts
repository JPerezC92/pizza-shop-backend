import { Router } from 'express';

const user = Router();

user.get('/', (req, res) => res.send({ user: 'yes' }));
user.post('/', (req, res) => {
  console.log('dasdasdsa', req.body);
  res.json({ user: 'philip' });
});

export default user;

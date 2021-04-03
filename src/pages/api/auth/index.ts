import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Alan' },
    { id: 2, name: 'Pedro' },
    { id: 3, name: 'Eduardo' }
  ];

  return response.json(users);
}
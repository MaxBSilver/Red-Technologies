import React from 'react';
import { axios_base } from './app/service';
const NODE_ENV = process.env.NODE_ENV
console.log(process.env)

const App = () => {
  axios_base.get('/Orders').then((response: any) => console.log(response));
  return (
    <div>{NODE_ENV}</div>
  );
}

export default App;

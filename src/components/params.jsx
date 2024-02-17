import React from 'react';
import { useParams } from 'react-router-dom';

function Params() {
  const params = useParams();
  return (
    <div className='text-white'>The params are {params.params}</div>
  )
}

export default Params
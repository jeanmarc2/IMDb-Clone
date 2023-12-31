'use client';
import {use, useEffect} from 'react'

export default function Error({ error, reste }) {
    useEffect(() => {
        console.log(error);
    },[error])
  return (
      <div className='text-center mt-10'>
          <h1>something went wrong</h1>
          <button className='hover:text-amber-600' onClick={()=> reste()}>Try again</button>
    </div>
  )
}

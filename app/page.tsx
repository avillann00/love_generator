'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home(){
  const [date, setDate] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    const cleanedDate = date.trim()

    if(cleanedDate === process.env.NEXT_PUBLIC_BRIANNAS_BIRTHDAY){
      router.push('/dashboard')
    }
    else{
      alert('Incorrect date')
    }
  }

  return(
    <div className='bg-white w-screen h-screen flex items-center justify-center'>
      <div className='bg-pink-200 text-black w-1/2 h-1/2 rounded-lg shadow-lg flex flex-col items-center justify-center gap-5'>
        <h1>Enter your birthday!</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <input
            type='text'
            placeholder='eg. 01/01/2000'
            className='text-center focus:outline-none focus:bg-pink-400 p-2 rounded-lg'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button className='hover:text-pink-400'>Login!</button>
        </form>
      </div>
    </div>
  )
}

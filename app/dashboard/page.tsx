'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard(){
  const messages = [
    'because of your smile',
    'because of your hair', 
    'because youre so nice',
    'because youre so pretty'
  ]

  const [message, setMessage] = useState('')
  const router = useRouter()

  const getRandomNumber = () => {
    return Math.floor(Math.random() * messages.length)
  }

  const generateMessage = () => {
    let index = getRandomNumber()
    while(messages[index] === message && messages.length > 1){
      index = getRandomNumber()
    }

    setMessage(messages[index])
  }

  const handleLogout = async () => {
    router.push('/')
  }

  return(
    <div className='bg-white w-screen h-screen flex items-center justify-center text-black'>
      <div className='bg-pink-200 text-black w-1/2 h-1/2 rounded-lg shadow-lg flex flex-col items-center justify-center gap-5'>
        <h1 className='text-xl'>HAPPY BIRTHDAY!!</h1>
        {message && (
          <div className='min-h-1/4 min-w-1/2 text-center overflow-y-auto overflow-x-auto font-bold'>
            {message}
          </div>
        )}
        <button onClick={() => generateMessage()} className='mt-5 border-2 border-black rounded-lg p-2 bg-pink-300 hover:bg-pink-400'>I love you...</button>
        <button className='hover:text-pink-400' onClick={() => handleLogout()}>Logout</button>
      </div>
    </div>
  )
}

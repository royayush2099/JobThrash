import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>

      <div className='grid-background'></div>
      <main className='min-h-screen container'>
        <Header/>
      <Outlet />{/*learn this after this any code will come but this will remain constant on the screen*/}
      </main>
      <div className='="p-10 text-center bg-gray-800 mt-10'>Hey this is ayush roy</div>
     
    </div>
  )
}

export default AppLayout

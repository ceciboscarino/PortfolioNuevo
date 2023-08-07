
import { Portfolio } from './pages/Portfolio'
import './App.css'
import {  Suspense } from 'react'

function App() {


  return (

    <>
      <Suspense fallback={<div>Loading</div>} >

        <Portfolio />
        
      </Suspense>
    </>
  )
}

export default App

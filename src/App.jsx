
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Products from './components/Products'


const productFetch = async () => {
  const res = await fetch("/productCard.json")
  return res.json()
}

function App() {
const fetchPromise = productFetch()

  return (
    <>
     <Navbar></Navbar>
     {/* <Banner></Banner> */}
     
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}><Products fetchPromise={fetchPromise}></Products></Suspense>
     
    </>
  )
}

export default App

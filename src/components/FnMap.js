import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import {FaNewspaper, FaShoppingCart, FaPalette} from 'react-icons/fa'

const FnMap = () => {
  const url = 'https://fortnite-api.com/v1/map'
  const [fnMap, setMap] = useState()
  const [loading, setLoading] = useState(true)

  const fetchMap = async () => {
    const {data} = await axios.get(url)
    setLoading(false)
    setMap(data.data.images)
  }

  useEffect(() => {
    fetchMap()
  }, [])

  if (loading === true) {
    return(
      <Loading />
    )
  }
  const {blank} = fnMap
  const bg = blank
  
  return (
    <div className='relative mx-auto'>
        <img src={bg} alt="Fortnite Map"  className='object-center brightness-50 blur-sm w-screen sticky'/>
        <div className="absolute top-20 left-0 p-10 text-3xl text-white flex flex-auto justify-center flex-wrap">
          <div className="w-11/12 mx-auto m-10 p-10 mt-0 mb-40 pt-0 justify-center">
            <h1 className='font-bold text-7xl m-4 p-4 mb-0 text-center tracking-wider'>Fortnite Challenges</h1>
            <h1 className='text-3xl m-4 p-4 mb-0 text-center tracking-wider'>Fortnite Item Shop, News & New Cosmetics</h1>
          </div>
          <div className="flex flex-auto justify-center flex-wrap ">
            <div className="w-1/4 bg-blue-500 p-6 rounded-xl m-4">
              <h1 className='justify-center p-2 text-6xl'><FaShoppingCart /></h1>
              <h1 className='font-bold text-4xl p-1'>Item Shop</h1>
              <p className='text-2xl p-1'>Data of the current battle royale shop</p>
            </div>
            <div className="w-1/4 bg-blue-500 p-6 rounded-xl m-4">
              <h1 className='justify-center p-2 text-6xl'><FaNewspaper /></h1>
              <h1 className='font-bold text-4xl p-1'>News</h1>
              <p className='text-2xl p-1'>Data of the current battle royale & save the world</p>
            </div>
            <div className="w-1/4 bg-blue-500 p-6 rounded-xl m-4">
              <h1 className='justify-center p-2 text-6xl'><FaPalette /></h1>
              <h1 className='font-bold text-4xl p-1'>New Cosmetics</h1>
              <p className='text-2xl p-1'>Data of the latest added battle royale cosmetics</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FnMap
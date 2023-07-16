import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'

const HomePage = () => {
    const {data}=useGetCryptosQuery(10)
    console.log(data)
  return (
    <div>HomePage</div>
  )
}

export default HomePage
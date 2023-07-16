import React, { useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const HomePage = () => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const {data}=useGetCryptosQuery(10)
    const {data:news} = useGetCryptoNewsQuery({newsCategory,count:5})
    
    console.log(data)
    console.log(news)
  return (
    <div>HomePage</div>
  )
}

export default HomePage
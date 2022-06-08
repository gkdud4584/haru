import React from 'react'
import '../App.css';
import MarketCard from '../components/card/MarketCard';
import DataInsert from './DataInsert';
import Noticeboard from './Noticeboard';
const Market = () => {
  return (
    <>
        <DataInsert/>
        <Noticeboard />
        <MarketCard />
      
    </>
  )
}

export default Market
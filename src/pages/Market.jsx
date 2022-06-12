import React from 'react'
import '../App.css';
import MarketCard from '../components/card/MarketCard';
import Noticeboard from './Noticeboard';

const Market = () => {
  return (
    <>
        <MarketCard />

        <Noticeboard />
    </>
  )
}

export default Market
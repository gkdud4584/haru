import React from 'react'
import '../App.css';
import MarketCard from '../components/card/MarketCard';
import Noticeboard from './Noticeboard';
import NoticeSub from './NoticeSub';
const Market = () => {
  return (
    <>
        <MarketCard />
        <NoticeSub />
        <Noticeboard />
    </>
  )
}

export default Market
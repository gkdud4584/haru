import React from 'react'
import CardItem from './Carditem';
import  './Card.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>사업 좋은점</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                         src = "https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_960_720.jpg"
                         text = "Expore the hidden waterfall deep inside the Amazon Jungle"
                         label = 'Adventure'
                         path='/services'
                         alt="page1"
                        />    
                        <CardItem 
                         src = "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_960_720.jpg"
                         text = "Travel through the Islands of Bali in a Private Cruise"
                         label = 'Luxury'
                         path='/services'
                         alt="page2"

                        />    
                    </ul>    
                    <ul className='cards__items'>
                        <CardItem
                        src='https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg'
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                        alt="page3"

                        />
                        <CardItem
                        src='https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg'
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        path='/products'
                        alt="page4"

                        />
                        <CardItem
                        src='https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_960_720.jpg'
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        path='/sign-up'
                        alt="page5"

                        />   
                    </ul>    
                </div>
            </div>            
        </div>
    );
}

export default Cards;
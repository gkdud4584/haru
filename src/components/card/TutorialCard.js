import React from 'react'
import CardItem from './TutorialCardItem';
import  './Card.css';

function TutorialCards() {
    return (
        <div className='cards'>                           
          <h1>DAMITO 튜토리얼 페이지</h1>
            <ul className='cards__items'>
                        <CardItem
                        src='https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg'
                        text='Images'
                        label='Mystery'
                        alt="page1"

                        />
                        <CardItem
                        src='https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg'
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        alt="page2"

                        />
                        <CardItem
                        src='https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_960_720.jpg'
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        alt="page3"
                        />   
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg'
                        text='Images'
                        label='Mystery'
                        alt="page4"

                        />
                        <CardItem
                        src='https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg'
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        alt="page5"

                        />
                        <CardItem
                        src='https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_960_720.jpg'
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        alt="page6"
                        />   
                    </ul>                                    
            </div>
    );
}

export default TutorialCards;
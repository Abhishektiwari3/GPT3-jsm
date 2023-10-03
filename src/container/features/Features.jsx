import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end disturbs instantly',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ea dolor pariatur quos nam modi voluptates distinctio labore, placeat ducimus, accusamus adipisci voluptas?'
  },

  {
    title: 'Become the Tended active',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ea dolor pariatur quos nam modi voluptates distinctio labore, placeat ducimus, accusamus adipisci voluptas?'
  },

  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ea dolor pariatur quos nam modi voluptates distinctio labore, placeat ducimus, accusamus adipisci voluptas?'
  },

  {
    title: 'Really boylaw country',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ea dolor pariatur quos nam modi voluptates distinctio labore, placeat ducimus, accusamus adipisci voluptas?'
  }

]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index } />
        ))}
      </div>
    </div>
  )
}

export default Features

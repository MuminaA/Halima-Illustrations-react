import React from 'react';
import Card from '../Card/Card';
import Frame1 from '../../assets/Frame1.png';
import Frame3 from '../../assets/Frame3.png';
import Frame4 from '../../assets/Frame4.png';

const List = () => {

    // fake data
    const data = [
    {
        id:1,
        img: Frame1,
        title: 'Women in a white dress',
        isNew: true,
        price: 12,
    },
    {
        id:2,
        img: Frame3,
        title: 'Hijabi burgendy',
        isNew: false,
        price: 8,
    },
    {
        id:3,
        img: Frame4,
        title: 'Abstract flower',
        isNew: false,
        price: 12,
    },
    {
        id:4,
        img: Frame4,
        title: 'Abstract flower',
        isNew: false,
        price: 12,
    },
    {
        id:5,
        img: Frame4,
        title: 'Abstract flower',
        isNew: false,
        price: 12,
    },
    {
        id:6,
        img: Frame4,
        title: 'Abstract flower',
        isNew: false,
        price: 12,
    },
  ]

  return (
    <div className='list flex md:justify-between flex-wrap gap-6'>
      {data.map(item => (
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List

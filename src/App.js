import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  // console.log(favorite);
  return (
    <div>
      <h3>{name}</h3>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// Javascript 점 연산자

const foodILike = [
  {
    id: 1,
    name: 'banana',
    number: 1,
    image: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-970-80.jpg.webp',
    rating: 5
  },
  {
    id: 2,
    name: 'apple',
    number: 2,
    image: 'https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg',
    rating: 3,
  },
  {
    id: 3,
    name: 'orange',
    number: 3,
    image: 'https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg',
    rating: 4.3
  }
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

// const renderFood = (dish) => {
//   return <Food name={dish.name} picture={dish.image}  />;
// }

class App extends Component {
  render() {
    // console.log(foodILike.map(renderFood));
    return(
      <>
        {foodILike.map((dish) => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}  />
        ))}
      </>
    );
  }
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,   // 필수 일 때만 isRequired
  rating: PropTypes.number,
};

export default App;


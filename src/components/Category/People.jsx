import React from 'react';
import Age from '../../assets/age.png';
import Gender from '../../assets/gender.png';
import Hair from '../../assets/hair.png';
import View from '../../assets/view.png';

const People = ({ People }) => {
  return (
    <div>
      <div className="container__class">
        {People.map((product) => {
          return (
            <article className="box__class" key={product.id}>
              <h2>{product.name}</h2>
              <div className="class__species">
                <img src={Age} />
                {product.age}
              </div>
              <div className="class__species">
                <img src={View} />
                {product.eye_color}
              </div>
              <div className="class__species">
                <img src={Gender} />
                {product.gender}
              </div>
              <div className="class__species">
                <img src={Hair} />
                {product.hair_color}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default People;

import React from 'react';
import './species.css';
import Class from '../../assets/data-classification.png';
import View from '../../assets/view.png';
import Hair from '../../assets/hair.png';

const Species = ({ Species }) => {
  return (
    <div>
      <div className="container__class">
        {Species.map((product) => {
          return (
            <article className="box__class" key={product.id}>
              <h2>{product.name}</h2>
              <div className="class__species">
                <img src={Class} />
                {product.classification}
              </div>
              <div className="class__species">
                <img src={View} />
                {product.eye_colors}
              </div>
              <div className="class__species">
                <img src={Hair} />
                {product.hair_colors}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Species;

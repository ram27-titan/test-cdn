import React from 'react';
import './vehicles.css';

const Vehicles = ({ Vehicles }) => {
  return (
    <div className="container__film">
      <section className="article__film">
        {Vehicles.map((product) => {
          return (
            <article className="article__box" key={product.id}>
              <h2 className='name__box'>{product.name}</h2>

              <p>{product.description}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Vehicles;

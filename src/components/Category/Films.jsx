import React from 'react';
import './films.css';

const Films = ({ Films }) => {
  return (
    <div className="container__film">
      <section className="article__film">
        {Films.map((product) => {
          return (
            <article className="article__box" key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image} />
              <p>{product.description}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Films;

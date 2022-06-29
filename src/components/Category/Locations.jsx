import React from 'react';
import './locations.css';
import Climate from '../../assets/climate.png';
import Terrain from '../../assets/terrain.png';
import Surface_Water from '../../assets/surface.png';

const Locations = ({ Locations }) => {
  return (
    <div>
      <div className="container__class">
        {Locations.map((product) => {
          return (
            <article className="box__class" key={product.id}>
              <h2>{product.name}</h2>
              <div className="class__species">
                <img src={Climate} />
                {product.climate}
              </div>
              <div className="class__species">
                <img src={Terrain} />
                {product.terrain}
              </div>
              <div className="class__species">
                <img src={Surface_Water} />
                {product.surface_water}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Locations;

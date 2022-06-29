import React, { useEffect, useState } from 'react';
import './main.css';
import Films from './Category/Films';
import People from './Category/People';
import Locations from './Category/Locations';
import Species from './Category/Species';
import Vehicles from './Category/Vehicles';
import IMG from '../assets/img2.png';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';

const Main = () => {
  const categories = ['films', 'people', 'locations', 'species', 'vehicles'];

  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyword.length) {
      getEndpointKeyword();
    } else if (category.length) {
      getEndPoints();
    }
  }, [keyword, category]);

  const getEndPoints = async () => {
    setLoading(true);
    const res = await axios.get(`https://ghibliapi.herokuapp.com/${category}`);
    setProducts(res.data);
    setLoading(false);
    console.log(res);
  };

  const getEndpointKeyword = async () => {
    setLoading(true);
    const res = await axios.get(`https://ghibliapi.herokuapp.com/${category}?q=${keyword}`);
    setProducts(res.data);
    setLoading(false);
  };

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div>
      <header>
        <div className="header__image">
          <img src={IMG} />
        </div>
        <div className="mobile__class">
          <div className="header__category">
            <ul className="category__box">
              {categories.map((category) => (
                <li className="category__link" key={category} onClick={() => setCategory(category)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="header__search">
            <input type="text" placeholder="Search a Keyword" onChange={(e) => setKeyword(e.target.value)} />
          </div>
        </div>
      </header>
      <section>
        {loading ? (
          <div style={style}>
            <Circles color="#b5c1ed" />
          </div>
        ) : (
          <div>
            {(category === 'films' && <Films Films={products} />) ||
              (category === 'locations' && <Locations Locations={products} />) ||
              (category === 'people' && <People People={products} />) ||
              (category === 'species' && <Species Species={products} />) ||
              (category === 'vehicles' && <Vehicles Vehicles={products} />)}
          </div>
        )}
      </section>
    </div>
  );
};

export default Main;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '@store/index';
import { addItemsToCartRequest } from '@store/modules/cart/actions';
import { IProduct } from '@store/modules/cart/types';

// import api from '@services/api';

import Cart from '@components/Cart';
import CatalogItem from '@components/CatalogItem';

import { Container } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const catalog = useSelector<IState, IProduct[]>(state => state.cart.all);

  useEffect(() => {
    fetch('http://localhost:3333/products')
      .then(response => response.json())
      .then(data => {
        dispatch(addItemsToCartRequest(data));
      })
      .catch(err => console.log(err));
    // api.get('products').then(response => setCatalog(response.data));
  }, [dispatch]);

  return (
    <Container>
      <h1>Catalogo</h1>

      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}

      <Cart />
    </Container>
  );
};

export default Home;

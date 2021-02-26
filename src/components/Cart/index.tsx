import React from 'react';
import { useSelector } from 'react-redux';

import { IState } from '@store/index';
import { ICartItem } from '@store/modules/cart/types';

import { Container } from './styles';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  return (
    <Container>
      <h4>Carrinho de compras</h4>
      <table width="600px">
        <thead>
          <tr>
            <th align="left">Produto</th>
            <th align="left">Preço</th>
            <th align="left">Quantidade</th>
            <th align="left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 && (
            <tr>
              <td colSpan={4} align="center">
                Seu carrinho está vazio!
              </td>
            </tr>
          )}
          {cart.map(({ product: { id, title, price }, quantity }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>{(price * quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Cart;

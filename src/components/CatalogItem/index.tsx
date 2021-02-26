import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '@store/index';
import { addProductToCartRequest } from '@store/modules/cart/actions';
import { IProduct } from '@store/modules/cart/types';

import { Container, MessageError } from './styles';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { title, price } = product;
  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <Container>
      <strong>{title}</strong>
      <span>{price}</span>

      {hasFailedStockCheck ? (
        <MessageError>Sem estoque!</MessageError>
      ) : (
        <button type="button" onClick={handleAddProductToCart}>
          Comprar
        </button>
      )}
    </Container>
  );
};

export default CatalogItem;

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ActionTypes, IProduct } from '@store/modules/cart/types';

// interface IAction {
//   type: string;
//   payload: object;
// }

export function addItemsToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addItemsToCartRequest,
    payload: {
      product
    }
  };
}

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product
    }
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSucess,
    payload: {
      product
    }
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId
    }
  };
}

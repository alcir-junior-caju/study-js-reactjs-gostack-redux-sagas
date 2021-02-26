import produce from 'immer';
import { Reducer } from 'redux';

import { ActionTypes, ICartState } from '@store/modules/cart/types';

const INITIAL_STATE: ICartState = {
  all: [],
  items: [],
  failedStockCheck: []
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addItemsToCartRequest: {
        const { product } = action.payload;
        // eslint-disable-next-line no-param-reassign
        draft.all = [...product];
        break;
      }
      case ActionTypes.addProductToCartSucess: {
        const { product } = action.payload;
        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          // eslint-disable-next-line no-param-reassign
          draft.items[productInCartIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1
          });
        }
        break;
      }
      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);
        break;
      }
      default:
        return draft;
    }
  });
};

export default cart;

export enum ActionTypes {
  addItemsToCartRequest = 'ADD_ITEMS_TO_CART_REQUEST',
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSucess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE'
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  all: IProduct[];
  items: ICartItem[];
  failedStockCheck: number[];
}

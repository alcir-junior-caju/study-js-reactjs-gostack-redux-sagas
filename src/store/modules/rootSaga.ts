import { all } from 'redux-saga/effects';

import cart from '@store/modules/cart/sagas';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  return yield all([cart]);
}

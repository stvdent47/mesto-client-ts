import * as CardActionCreators from './card/card';
import * as UserActionCreators from './user/user';

export const ActionCreators = {
  ...CardActionCreators,
  ...UserActionCreators,
};

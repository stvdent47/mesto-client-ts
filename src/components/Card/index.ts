// redux
import { connect } from 'react-redux';
import { AppDispatch } from '../../redux';
import { RootState } from '../../redux/reducers';
// components
import { Card as CardView } from './Card';
// types
import { CardActionTypes } from '../../types/CardTypes';

const mapStateToProps = (state: RootState) => ({
  currentUser: state.userReducer.user,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  likeCard: (id: string, isLiked: boolean) => dispatch({ type: CardActionTypes.LIKE_CARD, payload: { id, isLiked } }),
  deleteCard: (id: string) => dispatch({ type: CardActionTypes.DELETE_CARD, payload: id }),
});

export const Card = connect(mapStateToProps, mapDispatchToProps)(CardView);

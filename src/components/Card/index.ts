import { connect } from 'react-redux';
import { AppDispatch } from '../../redux';
// import { CardActionCreators } from '../../redux/actionCreators/CardActionCreators';
// import { RootState } from '../../redux/reducers';
import { CardActionTypes } from '../../types/CardTypes';
import { CardComponent as CardView } from './Card';

// const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  // deleteCard: (id: string) => dispatch(CardActionCreators.deleteCard(id)),
  likeCard: (id: string, isLiked: boolean) => dispatch({ type: CardActionTypes.LIKE_CARD, payload: { id, isLiked } }),
  deleteCard: (id: string) => dispatch({ type: CardActionTypes.DELETE_CARD, payload: id }),
});

export const Card = connect(
  null,
  // mapStateToProps,
  mapDispatchToProps
)(CardView);

import { connect } from 'react-redux';
import { AppDispatch } from '../../redux';
import { RootState } from '../../redux/reducers';
import { CardActionTypes } from '../../types/CardTypes';
import { Main as MainView } from './Main';

const mapStateToProps = (state: RootState) => ({
  cards: state.cardReducer.cards,
  isLoading: state.cardReducer.isLoading,
  error: state.cardReducer.error,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchCards: () => dispatch({ type: CardActionTypes.FETCH_CARDS }),
});

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainView);

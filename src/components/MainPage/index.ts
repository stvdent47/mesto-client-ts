// redux
import { connect } from 'react-redux';
import { AppDispatch } from '../../redux';
import { RootState } from '../../redux/reducers';
// components
import { MainPage as MainPageView } from './MainPage';
// types
import { CardActionTypes } from '../../types/CardTypes';

const mapStateToProps = (state: RootState) => ({
  cards: state.cardReducer.cards,
  isLoading: state.cardReducer.isLoading,
  error: state.cardReducer.error,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchCards: () => dispatch({ type: CardActionTypes.FETCH_CARDS }),
});

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageView);

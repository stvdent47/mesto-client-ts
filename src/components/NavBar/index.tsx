// redux
import { connect } from 'react-redux';
import { AppDispatch } from '../../redux';
import { RootState } from '../../redux/reducers';
// components
import { NavBar as NavBarView } from './NavBar';
// types
import { UserActionTypes } from '../../types/UserTypes';

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  currentUser: state.userReducer.user,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  handleSignOut: () => dispatch({ type: UserActionTypes.SET_LOGGED_IN, payload: false }),
});

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarView);

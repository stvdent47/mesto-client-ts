// redux
import { connect } from 'react-redux';
import { AppDispatch } from '../../redux';
import { RootState } from '../../redux/reducers';
// components
import { ModalEdit as ModalEditView } from './ModalEdit';
// types
import { UserActionTypes } from '../../types/UserTypes';

const mapStateToProps = (state: RootState) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateUser: (profileName: string, profileAbout: string) =>
    dispatch({ type: UserActionTypes.UPDATE_USER_INFO, payload: { profileName, profileAbout } }),
});

export const ModalEdit = connect(mapStateToProps, mapDispatchToProps)(ModalEditView);

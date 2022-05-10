// redux
import { connect } from 'react-redux';
import { AppDispatch } from '../../redux';
// components
import { ModalAvatarUpdate as ModalAvatarUpdateView } from './ModalAvatarUpdate';
// types
import { UserActionTypes } from '../../types/UserTypes';

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateAvatar: (avatarUrl: string) => dispatch({ type: UserActionTypes.UPDATE_USER_AVATAR, payload: { avatarUrl } }),
});

export const ModalAvatarUpdate = connect(null, mapDispatchToProps)(ModalAvatarUpdateView);

// redux
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers';
// components
import { Profile as ProfileView } from './Profile';

const mapStateToProps = (state: RootState) => ({
  user: state.userReducer.user,
});

export const Profile = connect(mapStateToProps, null)(ProfileView);

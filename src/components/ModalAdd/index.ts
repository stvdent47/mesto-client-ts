import { connect } from 'react-redux';
import { AppDispatch } from '../../redux';
import { CardActionTypes } from '../../types/CardTypes';
import { ModalAdd as ModalAddView } from './ModalAdd';

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  createCard: (name: string, link: string) => dispatch({ type: CardActionTypes.CREATE_CARD, payload: { name, link } }),
});

export const ModalAdd = connect(null, mapDispatchToProps)(ModalAddView);

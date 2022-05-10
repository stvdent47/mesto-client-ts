// types
import { ModalNameTypes } from '../../types/ModalTypes';
import { User } from '../../types/UserTypes';

import defaultAvatar from '../../images/profile-photo.jpg';

type ProfileProps = {
  user?: User;
  handleOpenModal: (modalName: ModalNameTypes) => void;
};

export const Profile = ({ user, handleOpenModal }: ProfileProps) => (
  <section className='profile'>
    <div className='profile__photo-container' onClick={() => handleOpenModal('avatar')}>
      <img src={user?.avatar || defaultAvatar} alt='фото профиля' className='profile__photo' />
    </div>

    <div className='profile__info'>
      <div className='profile__title'>
        <h1 className='profile__name'>{user?.name || '...'}</h1>
        <button
          className='profile__edit-button'
          type='button'
          aria-label='Редактировать'
          onClick={() => handleOpenModal('edit')}
        />
      </div>

      <p className='profile__description'>{user?.about || '...'}</p>
    </div>

    <button
      className='profile__add-button'
      type='button'
      aria-label='Добавить'
      onClick={() => handleOpenModal('add')}
    />
  </section>
);

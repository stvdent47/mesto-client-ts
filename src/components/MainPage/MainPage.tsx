import { useEffect, useState } from 'react';
// components
import { Card as CardComponent } from '../Card';
import { ModalAdd } from '../ModalAdd';
import { ModalAvatarUpdate } from '../ModalAvatarUpdate';
import { ModalEdit } from '../ModalEdit';
import { ModalWithImage } from '../ModalWithImage/ModalWithImage';
import { Profile } from '../Profile';
import { Footer } from '../Footer/Footer';
// types
import { Card, CardDto } from '../../types/CardTypes';
import { ModalNameTypes } from '../../types/ModalTypes';
// constants
import { initialCard, initialOpenedModals } from '../../constants/default';
// styles
import { useStyles } from './mainPageStyles';
import './MainPage.css';

type MainPageProps = {
  isLoggedIn: boolean;
  cards: Card[];
  fetchCards: () => void;
};

export const MainPage = ({ isLoggedIn, cards, fetchCards }: MainPageProps): JSX.Element => {
  const classes = useStyles();

  const [openedModals, setOpenedModals] = useState<Record<ModalNameTypes, boolean>>({ ...initialOpenedModals });
  const [selectedCard, setSelectedCard] = useState<CardDto>(initialCard);

  const handleOpenModal = (modalName: ModalNameTypes) => {
    setOpenedModals((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };
  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
    handleOpenModal('image');
  };
  const closeAllModals = () => {
    setOpenedModals({ ...initialOpenedModals });
    setSelectedCard(initialCard);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchCards();
    }
  }, [isLoggedIn]);

  const closeModalByEscape = (evt: KeyboardEvent): void => {
    evt.key === 'Escape' && closeAllModals();
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModalByEscape);
    return () => {
      document.removeEventListener('keydown', closeModalByEscape);
    };
  }, []);

  return (
    <>
      <main className='main'>
        <Profile handleOpenModal={handleOpenModal} />

        <section className='photo-elements'>
          <ul className={classes.photoElements__list}>
            {cards.map((card) => (
              <CardComponent card={card} key={card._id} onCardClick={handleCardClick} />
            ))}
          </ul>
        </section>
      </main>

      <Footer />

      <ModalEdit isOpen={openedModals.edit} onClose={closeAllModals} />
      <ModalAvatarUpdate isOpen={openedModals.avatar} onClose={closeAllModals} />
      <ModalAdd isOpen={openedModals.add} onClose={closeAllModals} />
      <ModalWithImage isOpen={openedModals.image} card={selectedCard} onClose={closeAllModals} />
    </>
  );
};

import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false),
    [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false),
    [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false),
    [selectedCard, setSelectedCard] = useState({ name: "", link: "" }),
    [currentUser, setCurrentUser] = useState({}),
    [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => setCurrentUser(userData))
      .catch((err) => console.log(err));
  }, []);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card.id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card.id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(cardId) {
    api
      .deleteCard(cardId)
      .then(() => setCards(cards.filter((c) => c._id !== cardId)))
      .catch((err) => console.log(err));
  }

  function handleUpdateUser(userInfo) {
    api
      .setUserInfo(userInfo)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={setIsEditAvatarPopupOpen}
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            name="link"
            className="popup__input popup__input_type_avatar-link"
            placeholder="Ссылка на картинку"
            id="avatar-link-input"
            required
          />
          <span className="avatar-link-input-error popup__input-error"></span>
        </PopupWithForm>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          name="add-card"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            className="popup__input popup__input_type_card-name"
            placeholder="Название"
            id="card-name-input"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="card-name-input-error popup__input-error"></span>
          <input
            type="url"
            name="link"
            className="popup__input popup__input_type_card-link"
            placeholder="Ссылка на картинку"
            id="card-link-input"
            required
          />
          <span className="card-link-input-error popup__input-error"></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

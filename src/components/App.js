import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false),
    [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false),
    [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false),
    [selectedCard, setSelectedCard] = useState({ name: "", link: "" });

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={setIsEditAvatarPopupOpen}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onCardClick={handleCardClick}
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
      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="userName"
          className="popup__input popup__input_type_name"
          id="username-input"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="username-input-error popup__input-error"></span>
        <input
          type="text"
          name="job"
          className="popup__input popup__input_type_description"
          id="user-description-input"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="user-description-input-error popup__input-error"></span>
      </PopupWithForm>
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
  );
}

export default App;

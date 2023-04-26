import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={setIsEditAvatarPopupOpen}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
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
          class="popup__input popup__input_type_avatar-link"
          placeholder="Ссылка на картинку"
          id="avatar-link-input"
          required
        />
        <span class="avatar-link-input-error popup__input-error"></span>
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
          class="popup__input popup__input_type_name"
          id="username-input"
          placeholder="Имя"
          minlength="2"
          maxlength="40"
          required
        />
        <span class="username-input-error popup__input-error"></span>
        <input
          type="text"
          name="job"
          class="popup__input popup__input_type_description"
          id="user-description-input"
          placeholder="О себе"
          minlength="2"
          maxlength="200"
          required
        />
        <span class="user-description-input-error popup__input-error"></span>
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
          class="popup__input popup__input_type_card-name"
          placeholder="Название"
          id="card-name-input"
          minlength="2"
          maxlength="40"
          required
        />
        <span class="card-name-input-error popup__input-error"></span>
        <input
          type="url"
          name="link"
          class="popup__input popup__input_type_card-link"
          placeholder="Ссылка на картинку"
          id="card-link-input"
          required
        />
        <span class="card-link-input-error popup__input-error"></span>
      </PopupWithForm>
      <ImagePopup />
      <template id="card-template">
        <li className="card">
          <img alt="Описание изображения" className="card__image" />
          <button type="button" className="card__delete-button"></button>
          <div className="card__info">
            <h2 className="card__name"></h2>
            <div className="card__like-container">
              <button type="button" className="card__like"></button>
              <span className="card__like-counter">0</span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;

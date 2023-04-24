import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_type_show-image">
        <div className="popup__image-wrapper">
          <button
            type="button"
            className="popup__close-button popup__close-button_type_show-image"
          ></button>
          <figure className="popup__figure-wrapper">
            <img
              src="#"
              alt="Фотография из карточки"
              className="popup__image"
            />
            <figcaption className="popup__figure-caption"></figcaption>
          </figure>
        </div>
      </div>
      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form
            action="#"
            name="input-form"
            className="popup__input-form popup__input-form_type_card"
            noValidate
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
            <input type="submit" value="Создать" className="popup__submit" />
          </form>
          <button
            type="button"
            className="popup__close-button popup__close-button_type_add-card"
            aria-label="close"
          ></button>
        </div>
      </div>
      <div className="popup popup_type_profile-edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            action="#"
            name="input-form"
            className="popup__input-form popup__input-form_type_profile"
            noValidate
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
            <input type="submit" value="Сохранить" className="popup__submit" />
          </form>
          <button
            type="button"
            className="popup__close-button popup__close-button_type_profile"
            aria-label="close"
          ></button>
        </div>
      </div>
      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button popup__close-button_type_profile"
            aria-label="close"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <input type="submit" value="Да" className="popup__submit" />
        </div>
      </div>
      <div className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            action="#"
            name="input-form"
            className="popup__input-form popup__input-form_type_edit-avatar"
            noValidate
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
            <input type="submit" value="Сохранить" className="popup__submit" />
          </form>
          <button
            type="button"
            className="popup__close-button popup__close-button_type_add-card"
            aria-label="close"
          ></button>
        </div>
      </div>
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

function ImagePopup() {
  return (
    <div className="popup popup_type_show-image">
      <div className="popup__image-wrapper">
        <button
          type="button"
          className="popup__close-button popup__close-button_type_show-image"
        ></button>
        <figure className="popup__figure-wrapper">
          <img src="#" alt="Фотография из карточки" className="popup__image" />
          <figcaption className="popup__figure-caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;

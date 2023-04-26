function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        !props.isOpen ? "" : "popup popup_opened"
      }`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          name="input-form"
          className={`popup__input-form popup__input-form_type_${props.name}`}
          noValidate
        >
          {props.children}
          <input type="submit" value={props.buttonText} class="popup__submit" />
        </form>
        <button
          type="button"
          class="popup__close-button popup__close-button_type_add-card"
          aria-label="close"
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;

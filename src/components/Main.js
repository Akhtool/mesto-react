function Main() {
  function handleEditAvatarClick() {
    document
      .querySelector(".popup_type_edit-avatar")
      .classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document
      .querySelector(".popup_type_profile-edit")
      .classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document
      .querySelector(".popup_type_add-card")
      .classList.add("popup_opened");
  }
  return (
    <main className="container">
      <section className="profile">
        <button
          className="profile__image-edit-button"
          onClick={handleEditAvatarClick}
        >
          <img src="#" alt="#" className="profile__image" />
        </button>
        <div className="profile__info">
          <div className="profile__name-edit">
            <h1 className="profile__name"></h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="edit"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__description"></p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="add"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;

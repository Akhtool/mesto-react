function Main() {
  return (
    <main className="container">
      <section className="profile">
        <button className="profile__image-edit-button">
          <img src="#" alt="#" className="profile__image" />
        </button>
        <div className="profile__info">
          <div className="profile__name-edit">
            <h1 className="profile__name"></h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="edit"
            ></button>
          </div>
          <p className="profile__description"></p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="add"
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;

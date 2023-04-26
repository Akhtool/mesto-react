import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userAvatar, setUserAvatar] = useState(null),
    [userName, setUserName] = useState(null),
    [userDescription, setUserDescription] = useState(null),
    [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
      })
      .catch((err) => console.log(err));
  });

  return (
    <main className="container">
      <section className="profile">
        <button
          className="profile__image-edit-button"
          onClick={() => {
            props.onEditAvatar(true);
          }}
        >
          <img src={userAvatar} alt="#" className="profile__image" />
        </button>
        <div className="profile__info">
          <div className="profile__name-edit">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="edit"
              onClick={() => {
                props.onEditProfile(true);
              }}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="add"
          onClick={() => {
            props.onAddPlace(true);
          }}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              name={card.name}
              likes={card.likes.length}
              link={card.link}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

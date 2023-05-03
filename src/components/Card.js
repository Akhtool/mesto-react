import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(card) {
  const currentUser = useContext(CurrentUserContext),
    isOwn = currentUser._id === card.ownerId,
    isLiked = card.likes.some((i) => i._id === currentUser._id),
    cardLikeButtonClassName = !isLiked
      ? "card__like"
      : "card__like card__like_active";

  function handleClick() {
    card.onCardClick(card);
  }

  function handleLikeClick() {
    card.onCardLike(card);
  }

  function handleDeleteClick() {
    card.onCardDelete(card.id);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      {isOwn && (
        <button
          type="button"
          className="card__delete-button"
          onClick={handleDeleteClick}
        ></button>
      )}
      <div className="card__info">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__like-container">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;

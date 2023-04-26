function Card(card) {
  return (
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} />
      <button type="button" className="card__delete-button"></button>
      <div className="card__info">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like"></button>
          <span className="card__like-counter">{card.likes}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;

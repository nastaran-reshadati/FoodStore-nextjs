import React from "react";

const CardInner = ({ cardData }) => {
  return (
    <>
      {cardData.map((item) => (
        <div className="col-xs-12 col-s-12 col-md-3 col-lg-3 col-xl-3">
          <div className="card card__custom">
            <div className="card__icon">
              <item.icon />
            </div>
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardInner;

import CardInner from "./CardInner";
import { cardData } from ".";
import { useContext } from "react";
import { Context } from "../../context";

const Card = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="card__wrapper col-xs-12 col-s-12 col-md-12">
            <div className="row">
              <CardInner cardData={cardData} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Card;

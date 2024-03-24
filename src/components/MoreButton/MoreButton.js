import React from "react";
import './MoreButton.css';

function MoreButton() {
    return (
        <section className="more">
            <div className="more__container">
              <button className="more__button" type="button" name="more">Ещё</button>
            </div>
        </section>
    )
}

export default MoreButton;
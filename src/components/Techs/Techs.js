import React from "react";
import './Techs.css';

function Technologies() {
    return (
        <section className="technologies">
            <h2 className="technologies__header-title">Технологии</h2>
            <div className="technologies__wrapper">
                <h3 className="technologies__title">7 технологий</h3>
                <p className="technologies__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className="technologies__items">
                <li className="technologies__item">HTML</li>
                <li className="technologies__item">CSS</li>
                <li className="technologies__item">JS</li>
                <li className="technologies__item">React</li>
                <li className="technologies__item">Git</li>
                <li className="technologies__item technologies__item_type_padding">Express.js</li>
                <li className="technologies__item technologies__item_type_padding">mongoDB</li>
            </ul>
        </section>
    );
};

export default Technologies;
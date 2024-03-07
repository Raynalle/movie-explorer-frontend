import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className='about-project' id='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__wrapper'>
                <div className='about-project__info'>
                    <h3 className='about-project__info-title'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__info'>
                    <h3 className='about-project__info-title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className='about-project__wrapper'>
                <div className='about-project__timelead'>
                    <h4 className='about-project__timelead-title'>1 неделя</h4>
                    <p className='about-project__timelead-subtitle'>Back-end</p>
                </div>
                <div className='about-project__timelead'>
                    <h4 className='about-project__timelead-title about-project__timelead-title_next-stages'>4 недели</h4>
                    <p className='about-project__timelead-subtitle'>Front-end</p>
                </div>
            </div>
        </section>
    );
};

export default AboutProject;
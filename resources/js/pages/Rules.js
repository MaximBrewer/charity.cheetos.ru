import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import DogImg from "../../images/dgo.png";
import PartnerImg from "../../images/partner.png";
import StepsImg from "../../images/steps.png";
import Slider from "react-slick";
import { ArrowNextIcon, ArrowPrevIcon } from "../Icons";

function Rules({ toggleOpened, opened }) {
  return (
    <section id="rules">
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <h2 className="text-2xl text-center uppercase font-bold mb-6 mt-12">
          ПРАВИЛА АЦИИ
        </h2>
        <div className="mb-10 text-justify">
          <p className="text-xl mb-4">
            Наш чудесный Рыжик ищет дом и любящего друга!
          </p>
          <p className="text-xl mb-4">
            Рыжик — скромный и застенчивый взрослый пес (9 лет), добрый и
            немного пугливый — одно время жил в стае, сейчас обитает в Приюте
            для собак "Дубовая Роща". Не реагирует на кошек, велосипедистов и
            машины, зато реагирует на вкусняшки и почесушки — расплывается в
            счастливой улыбке, подставляет животик и смешно дрыгает лапой от
            удовольствия.
          </p>
          <p className="text-xl mb-4">
            Рыжик активно худеет и станет отличным компаньоном во время прогулок
            🙂 Он медленно бегает и любит просто посидеть и посмотреть по
            сторонам.
          </p>
          <p className="text-xl mb-4">
            Мы ищем хорошую любящую семью для верного друга. Пишите, приезжайте
            знакомиться и забирайте сокровище. Этот парень вас давно заждался!
          </p>
          <p className="text-xl mb-4">
            Наш чудесный Рыжик ищет дом и любящего друга!
          </p>
          <p className="text-xl mb-4">
            Рыжик — скромный и застенчивый взрослый пес (9 лет), добрый и
            немного пугливый — одно время жил в стае, сейчас обитает в Приюте
            для собак "Дубовая Роща". Не реагирует на кошек, велосипедистов и
            машины, зато реагирует на вкусняшки и почесушки — расплывается в
            счастливой улыбке, подставляет животик и смешно дрыгает лапой от
            удовольствия.
          </p>
          <p className="text-xl mb-4">
            Рыжик активно худеет и станет отличным компаньоном во время прогулок
            🙂 Он медленно бегает и любит просто посидеть и посмотреть по
            сторонам.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Rules;

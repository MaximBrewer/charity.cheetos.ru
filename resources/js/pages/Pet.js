import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Parser from "html-react-parser";
import Slider from "react-slick";

import PartnersSlider from "../components/PartnersSlider";
import { buttonClass } from "../Classes";
import GetPetModal from "../modals/GetPet";
import { useModal } from "../context/modal";

import {
  GalleryNextIcon as ArrowNextIcon,
  GalleryPrevIcon as ArrowPrevIcon,
} from "../Icons";

function Pet() {
  const { id } = useParams();
  let { setModalBody, setShowModal } = useModal();

  const ref = useRef(null);

  const [pet, setPet] = useState(null);

  useEffect(() => {
    setPet(() => {
      for (let item of window.App.data.pets) if (item.id == id) return item;
      return null;
    });
  }, [id]);

  const settings = {
    arrows: false,
    infinite: true,
    dots: false,
    speed: 300,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // beforeChange: (index) => {
    //   setTitleShow(false);
    // },
    // afterChange: (index) => {
    //   setTitle(pets[index].name);
    //   setTitleShow(true);
    //   setLink("/pet/" + pets[index].id);
    // },
  };

  return (
    <section id="pet" className="bg-white mt-80">
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <div className="w-full h-px"></div>
        <div className="-mt-80">
          <h2 className="text-white pt-6 pb-4 text-3xl font-bold text-center">
            Протяни лапу дружбы
          </h2>
          {!pet || (
            <>
              <h3 className="text-white mb-4 text-xl text-center">
                {pet.name}
              </h3>
              <div className="mb-4 border-7 border-yellow-900 rounded-3xl relative overflow-hidden">
                <Slider {...settings} ref={ref}>
                  {pet.images.map((item, index) => (
                    <div key={index}>
                      <div
                        className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
                        style={{ backgroundImage: `url(${item})` }}
                      ></div>
                    </div>
                  ))}
                </Slider>
                {pet.images.length > 1 ? (
                  <>
                    <a
                      className="flex text-white cursor-pointer items-center justify-center absolute top-1/2 left-0 -mt-12"
                      onClick={() => {
                        ref.current.slickPrev();
                      }}
                    >
                      <ArrowPrevIcon className="w-20 h-24 stroke-current" />
                    </a>
                    <a
                      className="flex text-white cursor-pointer items-center justify-center absolute top-1/2 right-0 -mt-12"
                      onClick={() => {
                        ref.current.slickNext();
                      }}
                    >
                      <ArrowNextIcon className="w-20 h-24 stroke-current" />
                    </a>
                  </>
                ) : (
                  ``
                )}
              </div>
              <h4 className="mb-4 text-xl text-center font-bold">
                {pet.excerpt}
              </h4>
              <div className="mb-4 text-lg text-justify">
                {Parser(pet.body)}
              </div>
              <div className="my-6 flex items-center justify-center">
                <a
                  onClick={() => {
                    setModalBody(<GetPetModal pet_id={id}/>);
                    setShowModal(true);
                    document.documentElement.scrollTop = 0;
                  }}
                  className={buttonClass() + " w-64 text-xl"}
                >
                  Стать хозяином
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-0 max-w-sm mb-16">
        <h2 className="text-2xl text-center font-bold mt-8 mb-8">
          Партнеры проекта:
        </h2>
        <PartnersSlider />
        <div className="mb-6 flex items-center justify-center">
          <Link to="/partners" className={buttonClass() + " w-48 text-xl"}>
            Подробнее
          </Link>
        </div>
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default Pet;
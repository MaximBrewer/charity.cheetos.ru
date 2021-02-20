import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Parser from "html-react-parser";
import Slider from "react-slick";

import PartnersSlider from "../components/PartnersSlider";
import PartnersSliderXL from "../components/PartnersSliderXL";
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
    <section id="pet">
      <div className="bg-white mt-80 xl:mb-0 xl:mt-0">
        <div className="w-full h-px "></div>
        <div className="-mt-80 max-w-sm xl:max-w-full xl:mb-16 mx-auto xl:mt-0">
          <div className="container mx-auto px-4">
            <h2 className="text-white xl:text-black pt-6 xl:pt-10 pb-4 xl:pb-10 text-3xl xl:text-5xl font-bold text-center">
              Протяни лапу дружбы
            </h2>
            {!pet || (
              <>
                <div className="xl:flex justify-between items-start">
                  <div className={`xl:mt-0 xl:w-1/3 xl:order-1`}>
                    <h3 className="text-white mb-4 text-xl text-center xl:hidden">
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
                  </div>
                  <div className={`xl:w-2/3 xl:pl-24 xl:order-2`}>
                    <h4 className="mb-4 xl:mb-6 text-xl text-center font-bold xl:text-2xl xl:text-left">
                      {pet.excerpt}
                    </h4>
                    <div className="mb-4 xl:mb-16 text-lg text-justify xl:text-xl xl:text-left">
                      {Parser(pet.body)}
                    </div>
                    <div className="my-6 flex items-center justify-center xl:justify-start">
                      <a
                        onClick={() => {
                          setModalBody(<GetPetModal pet_id={id} />);
                          setShowModal(true);
                          document.documentElement.scrollTop = 0;
                        }}
                        className={buttonClass() + " w-64 text-xl"}
                      >
                        Стать хозяином
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-full h-px "></div>
      </div>

      <div className="xl:text-black bg-white">
        <div className="w-full h-px "></div>
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl xl:text-3xl text-center font-bold mt-16 xl:mt-0 mb-6">
              Партнеры проекта:
            </h2>
            <div className="hidden xl:block">
              <PartnersSliderXL />
            </div>
            <div className="xl:hidden">
              <PartnersSlider />
              <div className="mb-6 flex items-center justify-center">
                <Link
                  to="/partners"
                  className="w-48 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px "></div>
      </div>
    </section>
  );
}

export default Pet;

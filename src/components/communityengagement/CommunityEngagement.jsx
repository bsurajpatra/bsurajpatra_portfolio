import React, { useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import engagementData from './engagementData';
import './CommunityEngagement.css';
import { IoCloseOutline, IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const CommunityEngagement = () => {
    const [modalData, setModalData] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (event) => {
        setModalData(event);
        setCurrentImageIndex(0);
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setModalData(null);
        document.body.classList.remove('modal-open');
    };

    const nextImage = useCallback(() => {
        if (modalData) {
            setCurrentImageIndex((prev) => (prev + 1) % modalData.images.length);
        }
    }, [modalData]);

    const prevImage = useCallback(() => {
        if (modalData) {
            setCurrentImageIndex((prev) => (prev - 1 + modalData.images.length) % modalData.images.length);
        }
    }, [modalData]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        if (modalData) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modalData, nextImage, prevImage]);

    return (
        <section className="community section container" id="engagements">
            <h2 className="section__title">Community Engagement & Activities</h2>


            <div className="community__container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="engagements__gallery"
                >
                    {engagementData.map((event) => (
                        <SwiperSlide key={event.id}>
                            <div className="engagement__card" onClick={() => openModal(event)}>
                                <img src={event.cover} alt={event.title} className="engagement__img" />
                                <div className="engagement__overlay">
                                    <h3 className="engagement__title">{event.title}</h3>
                                    <button className="view-more__btn">View More</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {modalData && (
                <div className="engagement__modal" onClick={closeModal}>
                    <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal__close" onClick={closeModal}>
                            <IoCloseOutline />
                        </button>

                        <div className="modal__gallery">
                            <img
                                src={modalData.images[currentImageIndex]}
                                alt={modalData.title}
                                className="modal__img"
                            />

                            {modalData.images.length > 1 && (
                                <>
                                    <button className="modal__nav modal__nav-prev" onClick={prevImage}>
                                        <IoChevronBackOutline />
                                    </button>
                                    <button className="modal__nav modal__nav-next" onClick={nextImage}>
                                        <IoChevronForwardOutline />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="modal__info">
                            <h3 className="modal__title">{modalData.title}</h3>
                            <p className="modal__description">{modalData.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CommunityEngagement;

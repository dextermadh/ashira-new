import { FC, useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import './Cards/style.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import PortfolioDescription from './PDescription/portfolioDesciption'; // Fixed typo

const images = [
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-01.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-02.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-03.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-04.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-05.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-06.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-07.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-08.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-09.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-10.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-11.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-12.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-13.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-14.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-15.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-16.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-17.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-18.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-19.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-20.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-21.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-22.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-23.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-24.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-25.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-26.jpg',
    '/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-27.jpg',
    // Add other images manually
];

const Carousel: FC<{ name: string }> = ({ name }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [galleryContainer, setGalleryContainer] = useState<string | null>(null);

    const onInit = useCallback((detail: { instance: any }) => {
        if (detail && detail.instance) {
            detail.instance.openGallery();
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            setGalleryContainer('aaa'); // Set to a string or null as needed
        }
    }, []);

    const dynamicEl = images.map((src, index) => ({
        src,
        thumb: src,
        subHtml: `<div class="lightGallery-captions">
                    <h4>Portfolio Page ${index + 1}</h4>
                  </div>`,
    }));

    return (
        <div className="carousel-container">
            <HeaderComponent />
            <div
                style={{ height: '800px' }}
                ref={containerRef}
            >
                <LightGallery
                    container={containerRef.current as HTMLElement}
                    onInit={onInit}
                    plugins={[lgZoom, lgThumbnail]}
                    closable={false}
                    showMaximizeIcon={true}
                    slideDelay={400}
                    thumbWidth={130}
                    thumbMargin={6}
                    appendSubHtmlTo={'.lg-item'}
                    dynamic={true}
                    dynamicEl={dynamicEl}
                    hash={true}
                    elementClassNames={'inline-gallery-container'}
                />
            </div>
        </div>
    );
};

const HeaderComponent: FC = () => (
    <div className="header">
        <PortfolioDescription
            text={
                "This collection is inspired by human emotions and Kintsugi art theories, which I came up with and refined for my final collection during the final year of my studies for (BA) Hons, Fashion Design Degree at Falmouth University, UK."
            }
        />
    </div>
);

export default Carousel;

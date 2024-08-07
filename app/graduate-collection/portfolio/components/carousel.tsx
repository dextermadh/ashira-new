import { FC, useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import './Cards/style.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';
import image1 from "../../../../public/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-01.jpg";
import image2 from "../../../../public/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-02.jpg";

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

export const Carousel: FC<{ name: string }> = ({ name }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [galleryContainer, setGalleryContainer] = useState<HTMLElement | null>(null);

    const onInit = useCallback((detail: { instance: ILightGallery }) => {
        if (detail && detail.instance) {
            detail.instance.openGallery();
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            setGalleryContainer(containerRef.current);
        }
    }, []);

    const dynamicEl = images.map((src, index) => ({
        src,
        thumb: src, // Assuming thumb is the same as src
        subHtml: `<div class="lightGallery-captions">
                    <h4>Portfolio Page ${index + 1}</h4>
                  </div>`,
    }));

    return (
        <div className="App">
            <div
                style={{
                    height: '800px',
                }}
                ref={containerRef}
            ></div>
            <div>
                {galleryContainer && (
                    <LightGallery
                        container={galleryContainer}
                        onInit={onInit}
                        plugins={[lgZoom, lgThumbnail]}
                        closable={false}
                        showMaximizeIcon={true}
                        slideDelay={400}
                        thumbWidth={130}
                        thumbHeight={'100px'}
                        thumbMargin={6}
                        appendSubHtmlTo={'.lg-item'}
                        dynamic={true}
                        dynamicEl={dynamicEl}
                        hash={false}
                        elementClassNames={'inline-gallery-container'}
                    />
                )}
            </div>
        </div>
    );
};

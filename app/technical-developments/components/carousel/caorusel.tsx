"use client";
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import './style.scss';
import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';

const images = [
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/1st folder/1.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/1st folder/2.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/1st folder/3.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/1st folder/4.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/2nd folder CASUAL WEAR/Corset Top/1.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/2nd folder CASUAL WEAR/Corset Top/2.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/2nd folder CASUAL WEAR/Corset Top/3.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/2nd folder CASUAL WEAR/Corset Top/5.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/2nd folder CASUAL WEAR/Corset Top/6.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/2nd folder CASUAL WEAR/T- shirt/1.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/2nd folder CASUAL WEAR/T- shirt/2.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/2nd folder CASUAL WEAR/T- shirt/3.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/2nd folder CASUAL WEAR/T- shirt/4.jpg',
    '/assets/Website Required Content/PROJECTS/CADS for portfolio/2nd folder CASUAL WEAR/T- shirt/5.jpg',
    // Add other images manually
];

export const Carousel3: FC<{ name: string }> = ({ name }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [galleryContainer, setGalleryContainer] = useState<ILightGallery | null>(null);

    const onInit = useCallback((detail: { instance: ILightGallery }) => {
        if (detail) {
            detail.instance.openGallery();
        }
    }, []);

    // Generate dynamicEl data from images array
    const dynamicEl = images.map((src, index) => ({
        src,
        thumb: src,
        subHtml: `<div class="lightGallery-captions">
                    <h4>Portfolio Page ${index + 1}</h4>
                  </div>`,
    }));

    useEffect(() => {
        if (containerRef.current) {
          setGalleryContainer('aaa' as unknown as ILightGallery);
        }
      }, []);
      console.log(containerRef.current);

    return (
        <div className="App">
            <div
                style={{ height: '800px' }}
                ref={containerRef}
            ></div>
            <div>
                <LightGallery
                    container={containerRef.current as HTMLElement}
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
                    hash={true}
                    elementClassNames={'inline-gallery-container'}
                ></LightGallery>
            </div>
        </div>
    );
};

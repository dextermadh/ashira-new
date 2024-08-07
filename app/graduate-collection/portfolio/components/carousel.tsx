import { FC, useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import './Cards/style.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
 // Make sure to import your HeaderComponent
 import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';

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


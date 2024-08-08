import { FC, useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import './style.scss';
import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';
import image1 from "../../../../public/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-01.jpg";
import image2 from "../../../../public/assets/Website Required Content/PROJECTS/Graduate Collection/PORTFOLIO/Portfolio Pages JPEG/Graduate Portfolio Digital Submission-02.jpg";
import "lightgallery/css/lightgallery-bundle.css";
import PortfolioDescription from '@/app/graduate-collection/portfolio/components/PDescription/portfolioDesciption';

// Array of images
const images = [
  '/assets/Neuromagination/1.jpg',
  '/assets/Neuromagination/2.jpg',
  '/assets/Neuromagination/3.jpg',
  '/assets/Neuromagination/4.jpg',
  '/assets/Neuromagination/5.jpg',
  '/assets/Neuromagination/6.jpg',
  '/assets/Neuromagination/7.jpg',
  '/assets/Neuromagination/8.jpg',
  '/assets/Neuromagination/9.jpg',
  '/assets/Neuromagination/10.jpg',
  '/assets/Neuromagination/11.jpg',
  '/assets/Neuromagination/12.jpg',
  '/assets/Neuromagination/13.jpg',
  '/assets/Neuromagination/14.jpg',
  // Add other images manually
];

const Carousel2: FC<{ name: string }> = ({ name }) => {
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
            <PortfolioDescription text={"This Conceptual Development was created and implemented during the second year of study, drawing inspiration from the inexhaustible human power to imagine."}/>

  </div>
);

export default Carousel2;
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import '@/app/private-label/brand.css'
import brandImg from '../../../public/assets/Brand1.png'
import brandImg2 from '../../../public/assets/Brand.png'
import brandMockup1 from '../../../public/assets/mockup1 (1).png'
import brandMockup2 from '../../../public/assets/mockup1 (2).png'
import img1 from '../../../public/assets/FASHION_SHOOT_3/p (33).jpg'
import img2 from '../../../public/assets/FASHION_SHOOT_3/p (5).jpg'
import img3 from '../../../public/assets/FASHION_SHOOT_3/p (50).jpg'
import img4 from '../../../public/assets/FASHION_SHOOT_3/p (41).jpg'
import img5 from '../../../public/assets/FASHION_SHOOT_3/p (51).jpg'
import img6 from '../../../public/assets/FASHION_SHOOT_3/p (21).jpg'


export function TimelineBrand() {
  const data = [
    {
      title: "Brand",
      content: (
        <div >
          <p className="text-black dark:text-black-200 text-lg md:text-2xl font-normal mb-8 p">
          High-end Avant Garde and pret-a-porter Sri Lankan fashion label “EESAMO” is authentic for its original concepts and distinctive methods with a variety of product categories
          </p>
          <div className="grid grid-cols-2 gap-4">

            <Image
              src={brandImg}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
                        <Image
              src={brandMockup1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
                                    <Image
              src={brandMockup2}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
                        <Image
              src={brandImg}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
          <p className="text-black dark:text-black-200 text-lg md:text-2xl font-normal mb-8 mt-8 p">
          The Sri Lankan fashion brand is launched in 2023.
The luxury label features styles with elegance, timelessness and glamour with a modem twist and it focuses on encouraging internationally recognized styles.

          </p>
        </div>
      ),
    },
    {
      title: "Product Categories",
      content: (
        <div>
          <p className="text-black dark:text-black-200 text-lg md:text-2xl font-normal mb-8 p">
          Including formal, eveningwear, casual clothing and fashionable avant-garde collections. The company sells innovative, chic and creative clothing that combines contemporary
global trends with local crafts and innovative ideas.

          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={img1}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={img2}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>

          <p className="text-black dark:text-black-200 text-lg md:text-2xl font-normal mb-8 mt-8 p">
          The luxury label features styles with elegance, timelessness and glamour with a modem twist and it focuses on encouraging internationally recognized styles.


          </p>
        </div>
      ),
    },
    {
      title: "Techniques",
      content: (
        <div>
          <p className="text-black dark:text-black-200 text-lg md:text-2xl font-normal mb-8 mt-8 p">
          Different techniques, crafts and mediums are used in the production of silhouettes. The designs are inspired by art, architecture, environment and intangible objects.
Each “EESAMO” piece is one-of-a-kind and exclusive, with timely wardrobe updates and functional designs to keep up
with trends.


          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={img3}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={img4}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={img5}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={img6}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-white ">
      <Timeline data={data} />
    </div>
  );
}

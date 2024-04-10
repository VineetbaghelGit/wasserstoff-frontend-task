import Image from 'next/image';
import React from 'react';

import {
  CollectionImageSlider1,
  CollectionImageSlider2,
  CollectionImageSlider3,
  CollectionImageSlider4,
  Toggle,
} from '@/config/Images';

function CollectionLeftAside(): React.JSX.Element {
  return (
    <div className="">
      <div className="left-side flex gap-1">
        <div className="text w-[361px]">
          <h1 className="font-bold text-[128px] leading-[118px] text-[#444649]">
            ASTRIX
          </h1>
          <h1 className="font-bold text-[128px] leading-[118px] mt-[110px] text-[#444649]">
            COLLECTIBLE
          </h1>
        </div>
        <div className="section-slider relative -left-36">
          <div>
            <div className="slider-text leading-[30px]">
              <h1 className="font-bold text-[24px]  text-[#FFFFFF]">
                Lunar Palace:{' '}
              </h1>
              <h1 className="font-bold text-[24px]  text-[#FFFFFF]">
                (ft. Kanye west)
              </h1>
            </div>
            <div className="images-slider flex gap-5 w-[460px]">
              <div className="w-[412] h-[630px]">
                <Image
                  src={CollectionImageSlider1}
                  alt="CollectionImageSlider1"
                />
              </div>
              <div className="w-[412] h-[630px]">
                <Image
                  src={CollectionImageSlider2}
                  alt="CollectionImageSlider1"
                />
              </div>
              <div className="w-[412] h-[630px]">
                <Image
                  src={CollectionImageSlider3}
                  alt="CollectionImageSlider1"
                />
              </div>
              <div className="w-[412] h-[630px]">
                <Image
                  src={CollectionImageSlider4}
                  alt="CollectionImageSlider1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Image src={Toggle} alt="Toggle" />
      </div>
    </div>
  );
}

export default CollectionLeftAside;

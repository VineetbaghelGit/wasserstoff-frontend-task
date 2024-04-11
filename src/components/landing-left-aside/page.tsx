import Image from 'next/image';
import React from 'react';

import {
  CollectionImageSlider1,
  CollectionImageSlider2,
  CollectionImageSlider3,
  CollectionImageSlider4,
  EventsImageSlider1,
  EventsImageSlider3,
} from '@/config/Images';
import {COLLECTION_LANDING, EVENTS_LANDING} from '@/utils/constant';
interface CollectionLeftAsideProps {
  landing: string;
  setLanding: React.Dispatch<React.SetStateAction<string>>;
}
/**
 * Represents the props for the CollectionLeftAside component.
 */
interface CollectionLeftAsideProps {
  /**
   * The type of landing page (collection or event).
   */
  landing: string;
  /**
   * A function to update the landing page type.
   */
  setLanding: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Functional component representing the left aside section of the collection landing page.
 * @param {CollectionLeftAsideProps} props - Props for the CollectionLeftAside component.
 * @returns {React.JSX.Element} - The JSX element representing the left aside section.
 */
function CollectionLeftAside({
  landing,
  setLanding,
}: CollectionLeftAsideProps): React.JSX.Element {
  return (
    <div>
      {/* Main container for left aside section */}
      <div className="left-side flex gap-1">
        <div className="text w-[361px]">
          {/* Header titles */}
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
              {/* Slider text */}
              <h1 className="font-bold text-[24px]  text-[#FFFFFF]">
                Lunar Palace:{' '}
              </h1>
              <h1 className="font-bold text-[24px]  text-[#FFFFFF]">
                (ft. Kanye west)
              </h1>
            </div>
            <div className="images-slider flex gap-5 w-[460px]">
              {/* Image sliders */}
              <div className="w-[412] h-[630px]">
                <Image
                  src={
                    landing === COLLECTION_LANDING
                      ? CollectionImageSlider1
                      : EventsImageSlider1
                  }
                  alt="CollectionImageSlider1"
                />
              </div>
              <div className="w-[412] h-[630px]">
                <Image
                  src={CollectionImageSlider2}
                  alt="CollectionImageSlider2"
                />
              </div>
              <div className="w-[412] h-[630px]">
                <Image
                  src={
                    landing === COLLECTION_LANDING
                      ? CollectionImageSlider3
                      : EventsImageSlider3
                  }
                  alt="CollectionImageSlider3"
                />
              </div>
              <div className="w-[412] h-[630px]">
                <Image
                  src={CollectionImageSlider4}
                  alt="CollectionImageSlider4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons to switch between events and collections */}
      <div className="mt-20 flex">
        <button
          onClick={() => {
            setLanding(EVENTS_LANDING);
          }}
          className={`w-[163] h-[52] rounded-[40px] font-semibold py-[17px] px-[85px] leading-[18px] text-[18px] text-[#fff] ${landing === EVENTS_LANDING ? 'bg-[#282C31]' : 'bg-[#484E56]'}`}>
          Events
        </button>
        <button
          onClick={() => {
            setLanding(COLLECTION_LANDING);
          }}
          className={`w-[163] h-[52] -ml-[45px] rounded-[40px] font-semibold py-[17px] px-[65px] leading-[18px] text-[18px] text-[#fff] ${landing === COLLECTION_LANDING ? 'bg-[#282C31]' : 'bg-[#484E56]'}`}>
          Collections
        </button>
      </div>
    </div>
  );
}

export default CollectionLeftAside;

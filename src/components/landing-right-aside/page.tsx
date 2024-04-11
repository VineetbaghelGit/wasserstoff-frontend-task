import Image from 'next/image';
import React from 'react';

import {Collectible, PeopleFrame, Star} from '@/config/Images';

/**
 * Functional component representing the right side of the collection page.
 * @returns {React.JSX.Element} - The JSX element representing the right side of the collection page.
 */
function CollectionRightAside(): React.JSX.Element {
  return (
    <div className="bg-[#15181B] z-[9999] w-[2/6] h-auto">
      {/* Collection details */}
      <div className="w-[40%]">
        <div className="p-10 pb-0 pl-24">
          {/* Collection titles */}
          <h1 className="font-bold text-[26px] leading-[32.5px] text-[#fff]">
            Explore Your First Collectible
          </h1>
          <h1 className="font-bold text-[57px] leading-[68px] mt-[50px] text-[#fff]">
            Meta Lives
          </h1>
          <p className="text-[24px] text-[#fff] leading-[70px]">
            Live in Astrix
          </p>
          {/* Collection description */}
          <p className="text-[16px] text-[#fff] leading-[28px]">
            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
            sed ipsum. Pellentesque mattis condimentum ut nulla.{' '}
          </p>
          {/* People interested */}
          <div className="flex items-center">
            <Image
              src={PeopleFrame}
              alt="PeopleFrame"
              className="my-4"
              width={150}
              height={40}
            />
            <p className="text-[16px] text-[#fff] leading-[44px]">
              22k people interested
            </p>
          </div>
        </div>
        {/* Collection marquee */}
        <div className="marquee rotate-90 h-full w-full">
          <div>
            <span className="font-semibold">
              Event : Oasis Bus tour , JLN Stadium , Delhi{' '}
              <div>
                <Image src={Star} alt="star" width={50} height={20} />
              </div>{' '}
              Collection Live : Meta Lives , live on astrix
            </span>
          </div>
        </div>
      </div>
      {/* Collectibles */}
      <div className="pl-24 collectibles">
        <p className="text-[14px] text-[#fff]">Collectibles</p>
        {/* Collection images */}
        <div className="flex gap-2 my-8">
          <Image src={Collectible} alt="Collectible" />
          <Image src={Collectible} alt="Collectible" />
          <Image src={Collectible} alt="Collectible" />
        </div>
        {/* Join waitlist button */}
        <button className="mt-16 bg-[#FFCA5F] font-bold py-[10px] px-[20px] rounded-[40px] leading-[32px] text-[24px] text-[#1A1D21]">
          Join Waitlist
        </button>
      </div>
    </div>
  );
}

export default CollectionRightAside;

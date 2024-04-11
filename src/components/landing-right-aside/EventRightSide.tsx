import Image from 'next/image';
import React from 'react';

import {
  AlarmIcon,
  EventsFrame1,
  EventsFrame2,
  EventsFrame3,
  ImageQr,
  LocationIcon,
  Star,
} from '@/config/Images';

/**
 * Functional component representing the right side of the event page.
 * @returns {React.JSX.Element} - The JSX element representing the right side of the event page.
 */
function EventRightSide(): React.JSX.Element {
  return (
    <div className="bg-[#15181B] z-[9999] w-[2/6] h-auto">
      {/* Event details */}
      <div className="w-[40%]">
        <div className="p-10 pb-0 pl-20">
          {/* Event titles */}
          <h1 className="font-bold text-[26px] leading-[32.5px] text-[#fff]">
            Explore Your First Event
          </h1>
          <h1 className="font-bold text-[57px] leading-[68px] mt-[50px] text-[#fff]">
            Event Name
          </h1>
          {/* Event details */}
          <div className="flex gap-4 my-8">
            <div className="flex gap-2">
              <Image
                src={LocationIcon}
                width={27}
                height={27}
                alt="LocationIcon"
              />
              <span className="text-[19px] font-semibold text-[#fff] leading-[28px]">
                Venue
              </span>
            </div>
            <div className="flex gap-2">
              <Image
                src={AlarmIcon}
                width={27}
                height={27}
                alt="LocationIcon"
              />
              <span className="text-[19px] font-semibold text-[#fff] leading-[28px]">
                04/3/2024 @19:00
              </span>
            </div>
          </div>
          {/* Event description */}
          <p className="text-[16px] text-[#fff] leading-[28px]">
            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
            sed ipsum. Pellentesque mattis condimentum ut nulla.{' '}
          </p>
        </div>
        {/* Event marquee */}
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
      <div className="pl-20 collectibles">
        <p className="text-[26px] text-[#fff] leading-[32px]">Artist Lineup</p>
        {/* Artist lineup */}
        <div className="flex my-20">
          <Image
            src={EventsFrame1}
            width={145}
            height={150}
            alt="EventsFrame1"
          />
          <Image
            src={EventsFrame2}
            width={192}
            height={198}
            alt="EventsFrame2"
            className="scale-125"
          />
          <Image
            src={EventsFrame3}
            width={145}
            height={150}
            alt="EventsFrame3"
          />
        </div>
        {/* QR code and join waitlist button */}
        <div className="flex items-center gap-10 mt-24">
          <Image src={ImageQr} width={105} height={105} alt="ImageQr" />
          <button className="bg-[#FFCA5F] font-bold py-[10px] px-[20px] rounded-[40px] leading-[32px] text-[24px] text-[#1A1D21]">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventRightSide;

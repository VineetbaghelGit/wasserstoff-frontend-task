'use client';
import Image from 'next/image';
import React, {useState} from 'react';

import {
  SplashImage1,
  SplashImage2,
  SplashImage3,
  SplashImage4,
  SplashImage5,
  SplashImage6,
  SplashImage7,
  SplashImage8,
} from '@/config/Images';

import CollectionLanding from '../collection-landing/page';
import Header from '../header/page';

function Splash(): React.JSX.Element {
  const [animationDirection, setAnimationDirection] = useState('');
  let coolTime = true;

  const handleButtonClick = (isUp: boolean): void => {
    if (!coolTime) return;
    coolTime = false;
    setTimeout(() => {
      coolTime = true;
    }, 1000);
    setAnimationDirection(isUp ? 'up' : 'down');
  };
  return (
    <>
      <div
        className="splash-screen cursor-default"
        onClick={() => {
          handleButtonClick(true);
        }}>
        <Header isSplashScreen={true} />
        <div className="h-[calc(100vh_-_14rem)] flex items-center justify-center title-box flex-col gap-5">
          <div className="flex gap-3 items-center">
            <h1 className="font-medium text-[64px] leading-[44px] text-black">
              WE
            </h1>
            <Image
              src={SplashImage1}
              width={371}
              height={61}
              alt="astrix-logo"
            />
            <h1 className="font-medium text-[64px] leading-[44px] text-black animate-para-first">
              ORGANIZE THE
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="font-medium text-[64px] leading-[44px] text-black ">
              CONNECTION
            </h1>
            <div className="image-animation">
              <Image
                src={SplashImage2}
                alt="astrix-logo"
                width={539}
                height={61}
              />
            </div>
          </div>
          <div className="flex items-center">
            <Image src={SplashImage3} alt="astrix-logo" objectFit="cover" />
            <div className="flex gap-3 items-center animate-para-third">
              <h1 className="font-medium text-[64px] leading-[44px] text-black ">
                BETWEEN
              </h1>
              <Image src={SplashImage4} alt="astrix-logo" objectFit="cover" />
              <h1 className="font-medium text-[64px] leading-[44px] text-black ">
                MUSIC
              </h1>
            </div>
          </div>
          <div className="flex items-center">
            <h1 className="font-medium text-[64px] leading-[44px] text-black">
              ARTIST
            </h1>
            <Image
              src={SplashImage5}
              width={299}
              height={41}
              alt="astrix-logo"
              objectFit="cover"
              className="pl-4"
            />
            <h1 className="font-medium text-[64px] leading-[44px] text-black animate-para-fourth">
              CULTURE
            </h1>
            <Image
              src={SplashImage6}
              width={137}
              height={74}
              alt="astrix-logo"
              objectFit="cover"
            />
          </div>
          <div className="flex items-center">
            <Image src={SplashImage7} alt="astrix-logo" objectFit="cover" />
            <div className="flex gap-3 items-center animate-para-third">
              <h1 className="font-medium text-[64px] leading-[44px] text-black ">
                ART
              </h1>
              <Image src={SplashImage8} alt="astrix-logo" objectFit="cover" />
              <h1 className="font-medium text-[64px] leading-[44px] text-black ">
                & COLLECTIONS
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section
        className={animationDirection === 'up' ? animationDirection : ''}>
        <CollectionLanding />
      </section>
    </>
  );
}

export default Splash;

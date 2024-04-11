import Image from 'next/image';
import React from 'react';

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
import {COLLECTION_LANDING} from '@/utils/constant';

import Header from '../header/page';
import NavigateButton from '../navigate-button/page';

/**
 * Represents the props for the Splash component.
 */
interface SplashScreenProps {
  /**
   * A function to set the animation direction.
   */
  setAnimationDirection: React.Dispatch<React.SetStateAction<string>>;
  /**
   * A function to update the landing page type.
   */
  setLanding: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Functional component representing the splash screen of the application.
 * @param {SplashScreenProps} props - Props for the Splash component.
 * @returns {React.JSX.Element} - The JSX element representing the splash screen.
 */
function Splash({
  setAnimationDirection,
  setLanding,
}: SplashScreenProps): React.JSX.Element {
  let coolTime = true;

  /**
   * Handles the button click event.
   * @param {boolean} isUp - Indicates whether the animation direction is up.
   */
  const handleButtonClick = (isUp: boolean): void => {
    if (!coolTime) return;
    coolTime = false;
    setTimeout(() => {
      coolTime = true;
    }, 1000);
    setAnimationDirection(isUp ? 'up' : '');
    setLanding(COLLECTION_LANDING);
  };

  return (
    <>
      <div
        className="splash-screen cursor-default"
        onClick={() => {
          handleButtonClick(true);
        }}>
        {/* Header */}
        <Header isSplashScreen={true} />
        {/* Title box */}
        <div className="h-[calc(100vh_-_14rem)] flex items-center justify-center title-box flex-col gap-5">
          {/* Title sections */}
          <div className="flex gap-3 items-center">
            <h1 className="font-medium md:text-[64px] sm:text-[32px] text-[14px] leading-[44px] text-black">
              WE
            </h1>
            <Image
              src={SplashImage1}
              width={371}
              height={61}
              alt="astrix-logo"
            />
            <h1 className="font-medium md:text-[64px] sm:text-[32px] text-[14px] leading-[44px] text-black animate-para-first">
              ORGANIZE THE
            </h1>
          </div>
          {/* More title sections */}
          <div className="flex gap-3 items-center">
            <h1 className="font-medium md:text-[64px] sm:text-[32px] text-[14px] leading-[44px] text-black ">
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
          {/* Even more title sections */}
          <div className="flex items-center">
            <Image src={SplashImage3} alt="astrix-logo" />
            <div className="flex gap-3 items-center animate-para-third">
              <h1 className="font-medium md:text-[64px] sm:text-[32px] text-[14px] leading-[44px] text-black ">
                BETWEEN
              </h1>
              <Image src={SplashImage4} alt="astrix-logo" />
              <h1 className="font-medium md:text-[64px] sm:text-[32px] text-[14px] leading-[44px] text-black ">
                MUSIC
              </h1>
            </div>
          </div>
          {/* More and more title sections */}
          <div className="flex items-center">
            <h1 className="font-medium md:text-[64px] sm:text-[32px] text-[14px] leading-[44px] text-black">
              ARTIST
            </h1>
            <Image
              src={SplashImage5}
              width={299}
              height={41}
              alt="astrix-logo"
              className="pl-4"
            />
            <h1 className="font-medium md:text-[64px] sm:text-[32px] text-[14px] leading-[44px] text-black animate-para-fourth">
              CULTURE
            </h1>
            <Image
              src={SplashImage6}
              width={137}
              height={74}
              alt="astrix-logo"
            />
          </div>
          {/* Final title sections */}
          <div className="flex items-center">
            <Image src={SplashImage7} alt="astrix-logo" />
            <div className="flex gap-3 items-center animate-para-third">
              <h1 className="font-medium md:text-[64px] sm:text-[32px] text-[14px] leading-[44px] text-black ">
                ART
              </h1>
              <Image src={SplashImage8} alt="astrix-logo" />
              <h1 className="font-medium md:text-[64px] sm:text-[32px] text-[14px] leading-[44px] text-black ">
                & COLLECTIONS
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation button */}
      <NavigateButton
        setAnimationDirection={setAnimationDirection}
        setLanding={setLanding}
      />
    </>
  );
}

export default Splash;

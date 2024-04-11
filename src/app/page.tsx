'use client';
import {useEffect, useState} from 'react';

import CollectionLanding from '@/components/landing/page';

import Splash from '../components/splash-screen/page';

/**
 * Home component for the landing page.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home(): JSX.Element {
  /**
   * State to manage the animation direction.
   *
   * @type {string}
   */
  const [animationDirection, setAnimationDirection] = useState<string>('');

  /**
   * State to manage the landing page type.
   *
   * @type {string}
   */
  const [landing, setLanding] = useState<string>('');

  /**
   * Effect hook to scroll to the top of the page when the landing type changes.
   */
  useEffect(() => {
    if (landing) {
      window.scrollTo(0, 0);
    }
  }, [landing]);

  return (
    <>
      {/* Splash screen component */}
      <Splash
        setAnimationDirection={setAnimationDirection}
        setLanding={setLanding}
      />

      {/* Collection landing page section */}
      <section
        className={animationDirection === 'up' ? animationDirection : ''}>
        <CollectionLanding
          landing={landing}
          setLanding={setLanding}
          setAnimationDirection={setAnimationDirection}
        />
      </section>
    </>
  );
}

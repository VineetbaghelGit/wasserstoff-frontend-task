'use client';
import {useEffect, useState} from 'react';

import CollectionLanding from '@/components/collection-landing/page';

import Splash from '../components/splash-screen/page';

export default function Home(): JSX.Element {
  const [animationDirection, setAnimationDirection] = useState('');
  const [landing, setLanding] = useState('');
  useEffect(() => {
    if (landing) {
      window.scrollTo(0, 0);
    }
  }, [landing]);
  return (
    <div className="relative">
      <Splash
        setAnimationDirection={setAnimationDirection}
        setLanding={setLanding}
      />
      <section
        className={animationDirection === 'up' ? animationDirection : ''}>
        <CollectionLanding landing={landing} setLanding={setLanding} />
      </section>
    </div>
  );
}

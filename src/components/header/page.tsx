import Image from 'next/image';
import React from 'react';

import {AstrixBranding, AstrixLogo, CollectionLogo} from '@/config/Images';

interface HeaderProps {
  isSplashScreen: boolean;
}
function Header({isSplashScreen}: HeaderProps): React.JSX.Element {
  return (
    <div className={isSplashScreen ? 'main-logo p-8 mb-8' : ''}>
      <div className="flex">
        {!isSplashScreen && (
          <Image
            src={AstrixBranding}
            width={60}
            height={60}
            alt="astrix-logo"
          />
        )}
        <Image
          src={isSplashScreen ? AstrixLogo : CollectionLogo}
          alt="astrix-logo"
        />
      </div>
    </div>
  );
}

export default Header;

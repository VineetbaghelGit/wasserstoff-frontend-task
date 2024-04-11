import Image from 'next/image';
import React from 'react';

import {AstrixBranding, AstrixLogo, CollectionLogo} from '@/config/Images';

/**
 * Represents the props for the Header component.
 */
interface HeaderProps {
  /**
   * Indicates whether the header is being displayed on a splash screen.
   */
  isSplashScreen: boolean;
}

/**
 * Functional component representing the header of the application.
 * @param {HeaderProps} props - Props for the Header component.
 * @returns {React.JSX.Element} - The JSX element representing the header.
 */
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

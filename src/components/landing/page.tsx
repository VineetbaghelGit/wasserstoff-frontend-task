import React from 'react';

import {COLLECTION_LANDING} from '@/utils/constant';

import Header from '../header/page';
import CollectionLeftAside from '../landing-left-aside/page';
import EventRightSide from '../landing-right-aside/EventRightSide';
import CollectionRightAside from '../landing-right-aside/page';
import NavigateButton from '../navigate-button/page';
interface CollectionLandingProps {
  landing: string;
  setLanding: React.Dispatch<React.SetStateAction<string>>;
  setAnimationDirection: React.Dispatch<React.SetStateAction<string>>;
}
/**
 * Represents the landing page for a collection or event.
 * @param {Object} props - The props passed to the CollectionLanding component.
 * @param {string} props.landing - The type of landing page (collection or event).
 * @param {Function} props.setLanding - A function to update the landing page type.
 * @param {Function} props.setAnimationDirection - A function to set the animation direction.
 * @returns {JSX.Element} The JSX representation of the CollectionLanding component.
 */
function CollectionLanding({
  landing,
  setLanding,
  setAnimationDirection,
}: Readonly<CollectionLandingProps>): React.JSX.Element {
  return (
    <>
      {/* Main container with background color and padding */}
      <div className="bg-[#15181B] p-[20px] overflow-x-hidden">
        {/* Flex container for layout */}
        <div className="flex md:flex-nowrap flex-wrap">
          <div>
            {/* Header component */}
            <Header isSplashScreen={false} />
            {/* Container for collection content */}
            <div className="collection-content mt-16">
              {/* Left aside component */}
              <CollectionLeftAside landing={landing} setLanding={setLanding} />
            </div>
          </div>
          {/* Conditionally render right aside component based on landing type */}
          {landing === COLLECTION_LANDING ? (
            <CollectionRightAside />
          ) : (
            <EventRightSide />
          )}
        </div>
      </div>
      {/* NavigateButton component */}
      <NavigateButton
        setAnimationDirection={setAnimationDirection}
        setLanding={setLanding}
      />
    </>
  );
}

export default CollectionLanding;

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
function CollectionLanding({
  landing,
  setLanding,
  setAnimationDirection,
}: CollectionLandingProps): React.JSX.Element {
  return (
    <>
      <div className="bg-[#15181B] p-[20px] overflow-x-hidden">
        <div className="flex">
          <div>
            <Header isSplashScreen={false} />
            <div className="collection-content flex mt-16">
              <CollectionLeftAside landing={landing} setLanding={setLanding} />
            </div>
          </div>
          {landing === COLLECTION_LANDING ? (
            <CollectionRightAside />
          ) : (
            <EventRightSide />
          )}
        </div>
      </div>
      <NavigateButton
        setAnimationDirection={setAnimationDirection}
        setLanding={setLanding}
      />
    </>
  );
}

export default CollectionLanding;

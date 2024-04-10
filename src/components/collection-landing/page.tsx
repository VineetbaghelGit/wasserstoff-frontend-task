import React from 'react';

import {COLLECTION_LANDING} from '@/utils/constant';

import CollectionLeftAside from '../collection-left-aside/page';
import EventRightSide from '../collection-right-aside/EventRightSide';
import CollectionRightAside from '../collection-right-aside/page';
import Header from '../header/page';
interface CollectionLandingProps {
  landing: string;
  setLanding: React.Dispatch<React.SetStateAction<string>>;
}
function CollectionLanding({
  landing,
  setLanding,
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
    </>
  );
}

export default CollectionLanding;

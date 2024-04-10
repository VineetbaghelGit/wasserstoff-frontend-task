import React from 'react';

import CollectionLeftAside from '../collection-left-aside/page';
import CollectionRightAside from '../collection-right-aside/page';
import Header from '../header/page';

function CollectionLanding(): React.JSX.Element {
  return (
    <div className="bg-[#15181B] p-[20px] overflow-x-hidden">
      <div className="flex">
        <div>
          <Header isSplashScreen={false} />
          <div className="collection-content flex mt-16">
            <CollectionLeftAside />
          </div>
        </div>
        <CollectionRightAside />
      </div>
    </div>
  );
}

export default CollectionLanding;

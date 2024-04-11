import React from 'react';

interface NavigateButtonProps {
  setAnimationDirection: React.Dispatch<React.SetStateAction<string>>;
  setLanding: React.Dispatch<React.SetStateAction<string>>;
}
function NavigateButton({
  setAnimationDirection,
  setLanding,
}: NavigateButtonProps): React.JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="flex">
        <button
          onClick={() => {
            setLanding('');
            setAnimationDirection('');
          }}
          className="mt-80 z-[1000] fixed right-6 bottom-3 bg-[#020203] py-[1px] px-[15px] rounded-[40px] leading-[32px] text-[12px] text-[#fff] border-r-slate-500">
          Restart
        </button>
      </div>
    </div>
  );
}

export default NavigateButton;

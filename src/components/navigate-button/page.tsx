import React from 'react';

/**
 * Represents the props for the NavigateButton component.
 */
interface NavigateButtonProps {
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
 * Functional component representing the navigation button to restart the application.
 * @param {NavigateButtonProps} props - Props for the NavigateButton component.
 * @returns {React.JSX.Element} - The JSX element representing the navigation button.
 */
function NavigateButton({
  setAnimationDirection,
  setLanding,
}: Readonly<NavigateButtonProps>): React.JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="flex">
        {/* Restart button */}
        <button
          onClick={() => {
            // Reset the landing page and animation direction
            setLanding('');
            setAnimationDirection('');
          }}
          className="mt-80 z-[10000] fixed right-6 bottom-3 bg-[#020203] py-[1px] px-[15px] rounded-[40px] leading-[32px] text-[12px] text-[#fff] border-r-slate-500">
          Restart
        </button>
      </div>
    </div>
  );
}

export default NavigateButton;

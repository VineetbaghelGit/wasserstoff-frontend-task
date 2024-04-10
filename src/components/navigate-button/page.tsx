import React from 'react';

function NavigateButton(): React.JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="flex">
        <button className="mt-80 z-[100] fixed bottom-2 ml-8 bg-[#020203] py-[4px] px-[12px] rounded-[40px] rounded-l leading-[32px] text-[20px] text-[#fff] border-r-slate-500">
          &gt;
        </button>
        <button className="mt-80 z-[100] fixed bottom-2 bg-[#020203] py-[4px] px-[12px] rounded-[40px] rounded-r leading-[32px] text-[20px] text-[#fff]">
          &lt;
        </button>
      </div>
    </div>
  );
}

export default NavigateButton;

import React from "react";

const TestimoniCards = ({ caption, name, image }) => {
  return (
    <div className="relative w-fit  min-h-[246px]">
      <div className="h-full pt-[17px] pb-[45px] px-[25px] max-w-[426px] mx-auto text-start bg-[#C6E0F3] text-[#447195] rounded-[10px]">
        <div className="text-[22px] mb-2   pb-1 border-b-2 border-[#447195]">
          {caption}
        </div>
        <div className="text-[20px]">
          <b>{name}</b> - pembeli
        </div>
      </div>
      <div className="absolute -bottom-20 right-8">
        <img src={image} alt="..." />
      </div>
    </div>
  );
};

export default TestimoniCards;

import React from 'react';
import IphoneImg1 from '../../../assets/Iphone1-image.png';
import IphoneImg2 from '../../../assets/Iphone2-image.png';

export default function DownloadSection() {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#A79F8F] via-[#9FA199] to-[#9FA199] min-h-screen py-12">
        <div className="text-center flex flex-col items-center justify-start h-full mx-auto gap-4 text-white pt-1">
          <h1 className="text-[42px] font-[700]" style={{color: '#F2F2F2', marginTop:'5px'}}>Download Bluharvest sekarang dan nikmati:</h1>
          <p className="text-[22px] font-[600] mb-5" style={{color: '#D9D9D9' , marginTop:'-10px'}}>Fitur-fitur unggulan dengan kualitas terbaik yang dirancang untuk membantu Anda menemukan produk akuakultur!</p>
          <div className="flex gap-8">
            <div className='relative'>
              <img 
                className="relative"
                src={IphoneImg1} 
                alt="image" 
                style={{ 
                  width: '252px', 
                  height: '530px', 
                  transform: 'rotate(2.924deg)',
                  left: '-30px'
                }} 
              />
            </div>
            <div className='relative'>
              <img 
                className="relative"
                src={IphoneImg2} 
                alt="image" 
                style={{ 
                  width: '252px', 
                  height: '530px', 
                  transform: 'rotate(-9.38deg)',
                  right: '-60px'
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

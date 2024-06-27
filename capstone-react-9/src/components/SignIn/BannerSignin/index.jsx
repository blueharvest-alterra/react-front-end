import React from 'react';
import signinBg from '../../../assets/signin-bg.jpeg';


export default function BannerSignin({ children }) {
  return ( 
    <div className="relative h-screen bg-cover bg-center flex-shrink-0"
      style={{
        background: `
          linear-gradient(180deg, rgba(0, 0, 0, 0.20) 99.99%, rgba(0, 0, 0, 0.00) 100%),
          url(${signinBg}) lightgray 50% / cover no-repeat 
        `
      }}
    >
      <div
        className="relative"
        style={{
          bottom: `78px`,
          left: `160px`,
          position: 'absolute',
          zIndex: 1000,
          padding: '20px', 
          color: '#F2F2F2', 
          fontFamily: 'Poppins', 
          fontSize: '22px', 
          fontStyle: 'normal', 
          fontWeight: 600, 
          lineHeight: '28px', 
        }}
      >
        <h1>
          Pengalaman Belanja<br />
          Produk Tambak yang Berbeda
        </h1>
      </div>
      <div
        className="relative"
        style={{
          bottom: `16px`,
          left: `160px`,
          position: 'absolute',
          zIndex: 1000,
          padding: '20px', 
          color: '#D9D9D9', 
          fontFamily: 'Poppins', 
          fontSize: '14px', 
          fontStyle: 'normal', 
          fontWeight: 500, 
          lineHeight: '16px', 
        }}
      >
        <p>
        Masuk ke akun Anda dan nikmati beragam produk tambak <br />
        dengan kualitas terbaik. Selamat datang dan selamat<br />
        berbelanja!
        </p>
      </div>
      {children}
    </div>
    
  );
}

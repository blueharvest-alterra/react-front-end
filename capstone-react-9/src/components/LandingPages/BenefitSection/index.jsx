import React from 'react'
import CardsBenefit from './CardsBenefit'

export default function BenefitSection() {
  return (
    <div>
        <div className="bg-gradient-to-b from-[#58A3DC] to-[#58A3DC] min-h-screen py-12">
          <div className="text-center flex flex-col items-center justify-start h-full mx-auto gap-4 text-white pt-5">
            <h1 className="text-[42px] font-[700]">Manfaat</h1>
            <p className="text-[34px] font-[600] mb-5" style={{color: '#D9D9D9'}}>Menghubungkan Produk, Ekonomi, dan Lingkungan</p>
            <div className='flex justify-between'>
            
            </div>
            <CardsBenefit/>
          </div>
          
        </div>
        
    </div>
  )
}

import React from 'react'
import imageFeature1 from '../../../../assets/imageFeature1.png'
import imageFeature2 from '../../../../assets/imageFeature2.png'
import imageFeature3 from '../../../../assets/imageFeature3.png'
import imageFeature4 from '../../../../assets/imageFeature4.png'

export default function cardBenefit() {
  return (
    <div className='flex justify-center gap-8 py-8'>
      <div style={{ backgroundImage: `url(${imageFeature1})`, height: `569px`, width: `320px` }} className='flex flex-col justify-center items-center gap-1 pt-64'>
          <div className=''>
              <h1 className='text-2xl font-bold text-white'>Tambak</h1>
          </div>
          <div>
              <h1 className="text-xl font-semibold">Tambak Aquaculture</h1>
          </div>
          <div>
              <p className='text-center p-5'>Menjual berbagai jenis tambak akuakultur yang dapat dipantau realtime</p>
          </div>
      </div>
      <div style={{ backgroundImage: `url(${imageFeature2})`, height: `569px`, width: `320px` }} className='flex flex-col justify-center items-center gap-1 pt-64'>
          <div className=''>
              <h1 className='text-2xl font-bold text-white'>Produk</h1>
          </div>
          <div>
              <h1 className="text-xl font-semibold">Produk Akuakultur</h1>
          </div>
          <div>
              <p className='text-center p-5'>Menjual berbagai pilihan produk akuakultur</p>
          </div>
      </div>
      <div style={{ backgroundImage: `url(${imageFeature3})`, height: `569px`, width: `320px` }} className='flex flex-col justify-center items-center gap-1 pt-64'>
          <div className=''>
              <h1 className='text-2xl font-bold text-white'>Monitoring Tambak</h1>
          </div>
          <div>
              <h1 className="text-xl font-semibold">Memantau Hasil Tambak</h1>
          </div>
          <div>
              <p className='text-center p-5'>Mendapat kesempatan mempunyai tambak dan menikmati hasil dari tambak</p>
          </div>
      </div>
      <div style={{ backgroundImage: `url(${imageFeature4})`, height: `569px`, width: `320px` }} className='flex flex-col justify-center items-center gap-1 pt-64'>
          <div className=''>
              <h1 className='text-2xl font-bold text-white'>Artikel</h1>
          </div>
          <div>
              <h1 className="text-xl font-semibold">Artikel Aquaculture</h1>
          </div>
          <div>
              <p className='text-center p-5'>Memberikan berbagai pengetahuan menarik terkait akuakultur</p>
          </div>
      </div>
    </div>
  )
}

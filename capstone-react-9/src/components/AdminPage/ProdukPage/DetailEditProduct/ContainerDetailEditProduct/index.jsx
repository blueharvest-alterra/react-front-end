const ContainerDetailEditProduct = () => {
    return (
        <div className="bg-white p-9 mr-8 flex flex-col gap-[38px] mb-6">
            <h1 className="text-[30px] font-semibold">Produk</h1>
            <form action="" className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <label htmlFor="">Gambar Produk</label>
                    <div className="max-w-[1042px] max-h-[329px]">
                        <img className=" object-cover " src="/produk/produk.png" alt="" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col gap-4 w-1/2">
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="">Nama</label>
                            <input type="text" className="px-5 py-3 rounded-md border-[#D9D9D9]" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="">Harga</label>
                            <input type="number" className="px-5 py-3 rounded-md border-[#D9D9D9]" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="">Stok</label>
                            <input type="number" className="px-5 py-3 rounded-md border-[#D9D9D9]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-1/2">
                        <label htmlFor="">Keterangan</label>
                        <textarea className="w-full max-h-[240px] border-[#D9D9D9] rounded-md py-3 px-5" name="" id="" rows={10}></textarea>
                    </div>
                </div>
                <div className="flex gap-6 justify-end">
                    <button className="px-12 py-3 bg-primary-90 text-white font-medium rounded-lg ">Simpan</button>
                    <button className="px-16 py-3 border border-primary-90  font-medium rounded-lg">Batal</button>
                </div>
                <hr className="border border-[#D1D5DB]" />
            </form>
        </div>
    )
}

export default ContainerDetailEditProduct
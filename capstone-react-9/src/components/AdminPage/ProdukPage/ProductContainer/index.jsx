import React, { useState, useRef } from "react";
import ProductTable from "./ProductTable";
import ModalAddProduct from "./ModalAddProduct";
import { getToken } from "../../../../service/accessCookie";

const url = "https://blueharvest.irvansn.com/v1/products";

const ContainerProduct = () => {
  const [isModalAddProductOpen, setIsModalAddProductOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const refImage = useRef();

  const resetValue = () => {
    setProductName("");
    setStatus("");
    setPrice("");
    setDesc("");
    setImage(null);
    setImagePreview(null);
  };

  const openModalAddProduct = () => {
    setIsModalAddProductOpen(true);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const token = getToken();

      // menyesuaikan dengan field BE
      const productData = new FormData();
      productData.append("name", productName);
      productData.append("price", price);
      productData.append("status", status);
      productData.append("description", desc);
      productData.append("thumbnail", image);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: productData,
      });

      const data = await response.json();
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to post product: ${errorData.message}`);
      }

      console.log("Product posted successfully");
      resetValue();
      closeModalAddProduct();
    } catch (error) {
      console.error("Error posting product:", error);
    }
  };

  const closeModalAddProduct = () => {
    resetValue();
    setIsModalAddProductOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white w-full p-9 flex flex-col gap-[38px] mb-8">
      <div className="flex justify-between">
        <h1 className="text-[28px] font-semibold">Produk</h1>
        <div
          className="flex items-center rounded-lg py-3 px-6 gap-[10px] bg-primary-90 cursor-pointer"
          onClick={openModalAddProduct}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_496_6689)">
              <path
                d="M13.1875 9.28125H10.6875V6.8125C10.6875 6.4375 10.375 6.125 9.96875 6.125C9.59375 6.125 9.28125 6.4375 9.28125 6.84375V9.3125H6.8125C6.4375 9.3125 6.125 9.625 6.125 10.0312C6.125 10.4062 6.4375 10.7187 6.84375 10.7187H9.3125V13.1875C9.3125 13.5625 9.625 13.875 10.0312 13.875C10.4062 13.875 10.7187 13.5625 10.7187 13.1562V10.6875H13.1875C13.5625 10.6875 13.875 10.375 13.875 9.96875C13.875 9.59375 13.5625 9.28125 13.1875 9.28125Z"
                fill="white"
              />
              <path
                d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.8125 19.4688 10.0312 19.4688C15.25 19.4688 19.5 15.2188 19.5 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.5625 18.0625 10C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_496_6689">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <button className="text-white">Tambah Produk</button>
        </div>
      </div>
      <ProductTable />

      {isModalAddProductOpen && (
        <div className="fixed p-6 inset-0 z-50 bg-[#8C8C8C] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-5xl w-full my-10 max-h-screen overflow-y-auto">
            <h2 className="text-[22px] font-semibold mb-6">
              Tambah Produk Baru
            </h2>
            <form>
              <div className="mb-5">
                <label className="block text-sm mb-[10px]">Nama</label>
                <input
                  type="text"
                  placeholder="Nama Produk"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-5 py-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm mb-[10px]">Stok</label>
                <div className="flex items-center gap-40 text-sm">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="status"
                      value="avaliable"
                      checked = {status == "available"}
                      onChange={() => setStatus("available")}
                      className="rounded"
                    />
                    <label htmlFor="">Available</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="status"
                      value="unavailable"
                      checked = {status == "unavailable"}
                      onChange={() => setStatus("unavailable")}
                      className="rounded"
                    />
                    <label htmlFor="">Unavailable</label>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm mb-[10px]">Harga</label>
                <div className="flex items-center gap-3">
                  <p>Rp</p>
                  <input
                    type="number"
                    placeholder="Jumlah Stok Produk"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-4 py-3 max-w-[474px] border border-gray-300 rounded-md"
                  />
                  <p className="text-4xl mx-4">/</p>
                  <p>Pcs (Per satu Kg)</p>
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm mb-[10px]">Keterangan</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full px-5 py-3 border border-gray-300 rounded-md"
                  placeholder="Ikan bandeng adalah ikan, memiliki banyakk nutrisi yg baik bagi tubuh"
                  rows="5"
                ></textarea>
              </div>
              <div className="mb-5">
                <label className="block text-sm mb-4">Layanan Pengiriman</label>
                <div className="w-full rounded-2xl flex justify-between max-w-[260px] p-4 border border-gray-300">
                  <p>Standar</p>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2.375C8.39303 2.375 6.82215 2.85152 5.486 3.74431C4.14985 4.6371 3.10844 5.90605 2.49348 7.3907C1.87852 8.87535 1.71762 10.509 2.03112 12.0851C2.34463 13.6612 3.11846 15.1089 4.25476 16.2452C5.39106 17.3815 6.8388 18.1554 8.4149 18.4689C9.99099 18.7824 11.6247 18.6215 13.1093 18.0065C14.594 17.3916 15.8629 16.3502 16.7557 15.014C17.6485 13.6779 18.125 12.107 18.125 10.5C18.1227 8.34581 17.266 6.28051 15.7427 4.75727C14.2195 3.23403 12.1542 2.37727 10 2.375ZM10 17.375C8.64026 17.375 7.31105 16.9718 6.18046 16.2164C5.04987 15.4609 4.16868 14.3872 3.64833 13.1309C3.12798 11.8747 2.99183 10.4924 3.2571 9.15875C3.52238 7.82514 4.17716 6.60013 5.13864 5.63864C6.10013 4.67716 7.32514 4.02237 8.65876 3.7571C9.99238 3.49183 11.3747 3.62798 12.631 4.14833C13.8872 4.66868 14.9609 5.54987 15.7164 6.68045C16.4718 7.81104 16.875 9.14025 16.875 10.5C16.8729 12.3227 16.1479 14.0702 14.8591 15.3591C13.5702 16.6479 11.8227 17.3729 10 17.375ZM11.25 14.25C11.25 14.4158 11.1842 14.5747 11.0669 14.6919C10.9497 14.8092 10.7908 14.875 10.625 14.875C10.2935 14.875 9.97554 14.7433 9.74112 14.5089C9.5067 14.2745 9.375 13.9565 9.375 13.625V10.5C9.20924 10.5 9.05027 10.4342 8.93306 10.3169C8.81585 10.1997 8.75 10.0408 8.75 9.875C8.75 9.70924 8.81585 9.55027 8.93306 9.43306C9.05027 9.31585 9.20924 9.25 9.375 9.25C9.70652 9.25 10.0245 9.3817 10.2589 9.61612C10.4933 9.85054 10.625 10.1685 10.625 10.5V13.625C10.7908 13.625 10.9497 13.6908 11.0669 13.8081C11.1842 13.9253 11.25 14.0842 11.25 14.25ZM8.75 7.0625C8.75 6.87708 8.80499 6.69582 8.908 6.54165C9.01101 6.38748 9.15743 6.26732 9.32874 6.19636C9.50004 6.12541 9.68854 6.10684 9.8704 6.14301C10.0523 6.17919 10.2193 6.26848 10.3504 6.39959C10.4815 6.5307 10.5708 6.69775 10.607 6.8796C10.6432 7.06146 10.6246 7.24996 10.5536 7.42127C10.4827 7.59257 10.3625 7.73899 10.2084 7.842C10.0542 7.94502 9.87292 8 9.6875 8C9.43886 8 9.20041 7.90123 9.02459 7.72541C8.84878 7.5496 8.75 7.31114 8.75 7.0625Z"
                      fill="#0075EB"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-[42px]">
                <label className="block text-sm mb-4">Gambar Produk</label>
                {imagePreview ? (
                  <div>
                    <div className="max-w-full max-h-[416px] overflow-hidden">
                      <img
                        src={imagePreview}
                        alt="Product Preview"
                        className="mb-4 w-full h-auto"
                      />
                    </div>
                    <button
                      onClick={() => setImagePreview(null)}
                      className="text-red-500"
                    >
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <label className="w-full flex flex-col items-center px-3 py-8 border border-dashed border-gray-300 rounded-md cursor-pointer">
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0373 4.1623H12.3748L11.5873 2.6623C11.1748 1.9123 10.4248 1.4248 9.56231 1.4248H2.9623C1.6873 1.4248 0.674805 2.4373 0.674805 3.7123V20.2873C0.674805 21.5623 1.6873 22.5748 2.9623 22.5748H21.0748C22.3498 22.5748 23.3623 21.5623 23.3623 20.2873V6.44981C23.3623 5.17481 22.3123 4.1623 21.0373 4.1623ZM21.6748 20.2873C21.6748 20.6248 21.4123 20.8873 21.0748 20.8873H2.9623C2.6248 20.8873 2.3623 20.6248 2.3623 20.2873V3.7123C2.3623 3.3748 2.6248 3.1123 2.9623 3.1123H9.56231C9.7873 3.1123 9.9748 3.2248 10.0873 3.4498L11.1373 5.3998C11.2873 5.6623 11.5873 5.8498 11.8873 5.8498H21.0748C21.4123 5.8498 21.6748 6.11231 21.6748 6.44981V20.2873Z"
                          fill="#9CA3AF"
                        />
                        <path
                          d="M12.5999 9.14961C12.2624 8.81211 11.7374 8.81211 11.3999 9.14961L8.1374 12.3746C7.7999 12.7121 7.7999 13.2371 8.1374 13.5746C8.4749 13.9121 8.9999 13.9121 9.3374 13.5746L11.1749 11.7746V17.2496C11.1749 17.6996 11.5499 18.1121 12.0374 18.1121C12.5249 18.1121 12.8624 17.7371 12.8624 17.2496V11.7371L14.7374 13.5746C14.8874 13.7246 15.1124 13.7996 15.3374 13.7996C15.5624 13.7996 15.7874 13.7246 15.9374 13.5371C16.2749 13.1996 16.2749 12.6746 15.9374 12.3371L12.5999 9.14961Z"
                          fill="#9CA3AF"
                        />
                      </svg>
                      <span className="text-gray-500 text-sm">
                        Masukkan Cover Gambar
                      </span>
                    </div>
                    <input
                      onChange={handleImageChange}
                      type="file"
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="submit"
                  onClick={(e) => addProduct(e)}
                  className="bg-primary-90 text-white px-20 py-3 rounded-md"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  className="border border-primary-90 text-secondary px-20 py-3 rounded-md"
                  onClick={closeModalAddProduct}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContainerProduct;

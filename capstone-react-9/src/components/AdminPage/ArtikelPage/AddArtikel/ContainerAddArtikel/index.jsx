import React, { useState, useEffect, useRef } from "react";
import { getToken } from "../../../../../service/accessCookie";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 

const url = "https://blueharvest.irvansn.com/v1/articles";

const ContainerAddArtikel = () => {
  const token = getToken();
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) {
      console.log(myRef.current); 
    }
  }, []);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("picture_file", image);
    formData.append("content", content);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`
        },
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      console.log("success posted article");
    } catch (error) {
      console.log("error post article", error);
    }
  };

  console.log(content)
  
  const modules = {
    toolbar: false
  };

  return (
    <div className="bg-white w-full p-9 flex flex-col gap-[38px] mb-8">
      <h1 className="text-[22px] font-semibold">Tambah Artikel Baru</h1>
      <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Judul Artikel</label>
          <input
            id="title"
            className="border-[#D9D9D9] rounded-md py-3 px-5"
            placeholder="Judul Artikel"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-[42px]">
          <label className="block text-sm mb-4">Gambar Produk</label>
          <label className="w-full flex flex-col items-center px-3 py-8 border border-dashed max-h-[107px] border-gray-300 rounded-md cursor-pointer">
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
              <span className="text-gray-500 text-sm">Masukkan Cover Gambar</span>
            </div>
            <input
              onChange={handleImageChange}
              type="file"
              className="hidden"
            />
          </label>
          {image && <p className="mt-2 text-sm text-gray-500">{image.name}</p>}
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="desc">Isi Artikel</label>
          <ReactQuill
            id="desc"
            value={content}
            onChange={setContent}
            style={{ height: "379px" }}
            className="w-full max-h-[379px] border-[#D9D9D9] rounded-md"
            placeholder="Ikan bandeng adalah ikan, memiliki banyak nutrisi yg baik bagi tubuh..."
            modules={modules}
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="submit"
            className="bg-primary-90 text-white px-20 py-3 rounded-md"
          >
            Simpan
          </button>
          <button
            type="button"
            className="border border-primary-90 text-secondary px-20 py-3 rounded-md"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContainerAddArtikel;

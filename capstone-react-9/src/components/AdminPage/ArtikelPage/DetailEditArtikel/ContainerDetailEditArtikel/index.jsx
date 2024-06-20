import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getToken } from "../../../../../service/accessCookie";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";

const url = "https://blueharvest.irvansn.com/v1/articles";

const ContainerDetailEditArtikel = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [urlImage, setUrlImage] = useState();
  const [image, setImage] = useState();
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const token = getToken();
        const response = await fetch(`${url}/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTitle(data.data.title);
        setContent(data.data.content);
        setUrlImage(data.data.picture);
      } catch (error) {
        console.error("Error fetching article:", error);
        setError(error);
      }
    };

    fetchArticle();
  }, []);

  const modules = {
    toolbar: false,
  };

  const editArticle = async (e) => {
    e.preventDefault();
    const token = getToken();

    // Buat instance dari FormData
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("picture_file", image);

    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      console.log("Article updated successfully");
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUrlImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white w-full p-9 flex flex-col gap-[38px] mb-8">
      <h1 className="text-[22px] font-semibold">Artikel</h1>
      <form onSubmit={(e) => editArticle(e)} className="flex flex-col gap-6">
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
          <label className="block text-sm mb-4">Gambar Artikel</label>
          <div className="max-w-full max-h-[329px] rounded-lg overflow-hidden">
            {urlImage && (
              <img
                className="w-full h-full object-cover cursor-pointer"
                src={urlImage}
                alt="Product Thumbnail"
                onClick={handleImageClick}
              />
            )}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
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
          <Link to={"/artikel"}>
            <button
              type="button"
              className="border border-primary-90 text-secondary px-20 py-3 rounded-md"
            >
              Batal
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ContainerDetailEditArtikel;

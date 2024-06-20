import { useEffect, useState } from "react";
import { getToken } from "../../../../../service/accessCookie";
import { useParams } from "react-router-dom";

const url = "https://blueharvest.irvansn.com/v1/products";

const ContainerDetailEditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const token = getToken();
      try {
        const response = await fetch(`${url}/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data.data);
        setName(data.data.name);
        setHarga(data.data.price);
        setStok(data.data.stock || ""); 
        setDesc(data.data.description);
        setImage(data.data.thumbnail || null);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    const token = getToken();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", harga);
    formData.append("stock", stok);
    formData.append("description", desc);
    if (image) {
      formData.append("thumbnail", image);
    }

    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Edit successful:", result);
      } else {
        console.error("Edit failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  return (
    <div className="bg-white w-full p-9 flex flex-col gap-[38px] mb-6">
      <h1 className="text-[30px] font-semibold">Produk</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label htmlFor="image">Gambar Produk</label>
          <div className="max-w-[1042px] max-h-[329px] rounded-lg overflow-hidden">
            {product && (
              <img
                className="w-full h-full object-cover"
                src={product.thumbnail}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 w-1/2">
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="name">Nama</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-5 py-3 rounded-md border-[#D9D9D9]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="harga">Harga</label>
              <input
                id="harga"
                type="number"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                className="px-5 py-3 rounded-md border-[#D9D9D9]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="stok">Stok</label>
              <input
                id="stok"
                type="number"
                value={stok}
                onChange={(e) => setStok(e.target.value)}
                className="px-5 py-3 rounded-md border-[#D9D9D9]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/2">
            <label htmlFor="desc">Keterangan</label>
            <textarea
              id="desc"
              className="w-full max-h-[240px] border-[#D9D9D9] rounded-md py-3 px-5"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={10}
            ></textarea>
          </div>
        </div>
        <div className="flex gap-6 justify-end">
          <button
            onClick={handleEdit}
            className="px-12 py-3 bg-primary-90 text-white font-medium rounded-lg "
          >
            Simpan
          </button>
          <button className="px-16 py-3 border border-primary-90  font-medium rounded-lg">
            Batal
          </button>
        </div>
        <hr className="border border-[#D1D5DB]" />
      </form>
    </div>
  );
};

export default ContainerDetailEditProduct;

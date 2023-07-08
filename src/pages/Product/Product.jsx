import React from "react";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  // setting state of image to main img
  const [selectedImg, setSelectedImg] = useState("img");
  //
  const [quantity, setQuantity] = useState(1);

  const id = useParams().id;

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="flex px-48 pb-20 gap-44">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left font-headerFont flex flex-col gap-6">
            <h2 className="text-4xl font-bold capitalize">{data?.attributes?.title}</h2>

            <div>
              <p className="description w-72">{data?.attributes?.desc}</p>
            </div>
            <span className="text-3xl text-red-600">
              ${data?.attributes?.price.toFixed(2)}
            </span>
            <div className="images w-28 flex gap-2">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={() => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className="border-2 border-black/5"></div>
            <div className="quantity flex gap-3">
              <p>QUANTITY</p>
              <div>
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                  className="bg-gray-200 w-6 mr-2 rounded-sm shadow-md"
                >
                  -
                </button>
                {quantity}
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="bg-gray-200 w-6 ml-2 rounded-sm shadow-md"
                >
                  +
                </button>
              </div>
            </div>
            <div className="">
              <button
                className="add bg-[#3898ec] py-2 px-8 flex gap-2 rounded-sm shadow-md text-white"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                <AddShoppingCartIcon />
                Add to cart
              </button>
            </div>

            <div className="flex gap-2 text-[#287afec2] cursor-pointer">
              <FavoriteBorderIcon />
              Add to wishlist
            </div>
          </div>
          <div className="product-img-wrap">
            <div className="relative">
              <div className="mainProductImg relative z-10">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                  className="rounded"
                />
              </div>
              <div className="color-block bg-[#111827] absolute left-5 top-5 w-full h-full rounded"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

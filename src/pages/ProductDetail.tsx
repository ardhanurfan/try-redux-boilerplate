import { useParams } from "react-router-dom";
import {
  removeProduct,
  selectedProduct,
} from "../redux/actions/productActions";
import axios from "axios";
import { useEffect } from "react";
import { Product } from "../redux/constants/product-types";
import { addToCart } from "../redux/actions/cartActions";
import { useAppDispatch, useAppSelector } from "../redux/store";

export default function ProductDetail() {
  const { id } = useParams();
  const product = useAppSelector((state) => state.selectedProduct);
  const dispatch = useAppDispatch();

  const getProduct = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (id && id != "") {
      getProduct();
    }

    return () => {
      dispatch(removeProduct());
    };
  }, []);

  const handleAdd = (product: Product) => {
    dispatch(addToCart(product));
  };

  return product ? (
    <>
      <div className="flex gap-10">
        <div className="bg-slate-100 rounded-2xl p-3">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-2xl aspect-square object-cover object-top"
          />
        </div>
        <div className="flex-col flex items-start gap-4 w-2/3">
          <div className="text-3xl font-bold text-start">{`${product.id} - ${product.title}`}</div>
          <div className="bg-slate-300 text-sm rounded-lg flex items-center justify-center px-3 py-1">
            {product.category}
          </div>
          <div className="bg-yellow-500 text-2xl font-bold text-white px-8 py-2 rounded-lg">
            {`$${product.price}`}
          </div>
          <p className="text-justify">{product.description}</p>
          <button
            onClick={() => handleAdd(product)}
            className="bg-red-500 text-2xl font-bold text-white px-8 py-2 rounded-lg w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  ) : (
    <>Loading...</>
  );
}

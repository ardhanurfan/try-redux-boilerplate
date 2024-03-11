import { useEffect } from "react";
import { Product } from "../redux/constants/product-types";
import { fetchProducts } from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";

function ListProducts() {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  // const getProducts = async () => {
  //   const res = await axios.get("https://fakestoreapi.com/products");
  //   console.log(res.data);
  //   dispatch(setProducts(res.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className="mb-10">List Products</h1>
      <div className="grid grid-cols-5 gap-4">
        {Array.from(products).map((product: Product) => (
          <Link
            key={product.id}
            className="rounded-xl bg-slate-100 p-3 text-center text-black group"
            to={`/product/${product.id}`}
          >
            <div className="aspect-square rounded-xl mb-2 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top group-hover:scale-110 group-hover:rotate-2 duration-300 ease-in-out"
                src={product.image}
                alt={product.title}
              />
            </div>
            <p className="font-bold">{`${product.id} - ${product.title}`}</p>
            <p>{product.category}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ListProducts;

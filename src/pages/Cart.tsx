import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { Product } from "../redux/constants/product-types";
import { useAppDispatch, useAppSelector } from "../redux/store";

export default function Cart() {
  const cartProducts = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemove = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  const handleAdd = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <h1 className="mb-6">Cart</h1>
      {cartProducts.map((product) => (
        <div
          className="flex gap-6 p-2 rounded-lg bg-slate-100 w-[600px] mb-3"
          key={product.id}
        >
          <img
            className="rounded-xl object-cover object-top w-32 h-32"
            src={product.image}
            alt={product.title}
          />
          <div className="flex justify-between items-center w-full grow">
            <div className="text-start">
              <p className="font-bold">{`${product.id} - ${product.title}`}</p>
              <p>{product.category}</p>
              <p className="text-yellow-500">{`$${product.price}`}</p>
            </div>
            <div>
              <button
                className="bg-blue-950 text-white"
                onClick={() => handleAdd(product)}
              >
                +
              </button>
              <p>{product.amount}</p>
              <button
                className="bg-red-500 text-white"
                onClick={() => handleRemove(product)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
      <h2 className="text-2xl font-bold">
        {`Total Order $${cartProducts.reduce(
          (sum, val) => (sum += val.amount * val.price),
          0
        )}`}
      </h2>
    </>
  );
}

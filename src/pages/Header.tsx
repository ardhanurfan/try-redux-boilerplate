import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/store";

function Header() {
  const total = useAppSelector((state) => state.cart);
  return (
    <div className="w-full flex justify-end items-center top-2 right-40 absolute gap-6">
      <Link className="text-black" to={"/"}>
        Home
      </Link>
      <Link
        className="bg-slate-200 px-6 rounded-lg py-3 text-black"
        to={"/cart"}
      >
        {`Cart : ${total.reduce((sum, val) => (sum += val.amount), 0)}`}
      </Link>
    </div>
  );
}

export default Header;

import {useDispatch, useSelector} from "react-redux";
import {CiCircleRemove} from "react-icons/ci";
import {addToCart, removeFromCart} from "../../redux/slice/cartSlice.js";
import Navbar from "../../components/navbar/Navbar.jsx";
import {useEffect, useState} from "react";
import CountUp from "react-countup";

const Cart = () => {
  const dispatch = useDispatch()
  const {products} = useSelector((state) => state.cart);


  return (
    <>
      <Navbar/>
      <table className="px-[60px] w-full mt-[100px] mb-4">
        <tbody className="w-full">
        <tr className="w-full justify-around items-center border-b-2">
          <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">PRODUCT</th>
          <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">PRICE</th>
          <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">QTY</th>
          <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">PRICE</th>
        </tr>
        {
          products?.map(product =>
            <tr key={product.id}
                className="w-full border-b-2 justify-around items-center min-h-[200px] text-neutral-800 text-lg font-normal">
              <td className=" max-w-[400px] pl-[30px] py-5">
                <div className="flex items-center gap-5">
                  <button className="font-2xl text-red-600"
                          onClick={() => dispatch(removeFromCart({...product, quantity: 0}))}><CiCircleRemove/></button>
                  <img className="w-[200px] h-[150px] object-contain" src={product.image}
                       alt={product.title}/>
                  <span>{product.title}</span>
                </div>
              </td>
              <td className="max-w-[200px] text-center">
                ${product.price}
              </td>
              <td className="max-w-[300px] w-full px-[10px] flex justify-center items-center">
                <div
                  className="bg-[#f6f7f8] max-w-[140px] w-full flex justify-between items-center px-4 py-2 mt-[70px] font-bold rounded-lg">
                  <button disabled={product.quantity === 1}
                          onClick={() => dispatch(removeFromCart({...product, quantity: 1}))} className="text-sky-400">-
                  </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => dispatch(addToCart({...product, quantity: 1}))} className="text-sky-400">+
                  </button>
                </div>
              </td>
              <td className="max-w-[200px] text-center ">${(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </>
  )
}
export default Cart

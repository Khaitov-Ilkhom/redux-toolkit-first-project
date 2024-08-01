import {Link} from "react-router-dom";
import {Button, notification} from "antd";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {addLikedProduct} from "../../redux/slice/likeSlice.js";
import RenderRating from "../render-rating/RenderRating.jsx";

const Cards = ({product}) => {

  const dispatch = useDispatch()
  const {likedProduct} = useSelector(state => state.like)
  const addLiked = (product) => {
    dispatch(addLikedProduct(product))
    // notification.success({
    //   message: "Product added to liked"
    // })
  }

  return (
    <div className="shadow-xl rounded-2xl hover:scale-105 duration-700 group relative">
      <Link to={`/single-page/${product.id}`} className="flex justify-center items-center">
        <img className="h-[200px] max-w-[200px] object-contain group-hover:scale-90 duration-700" src={product.image}
             alt={product.title}/>
      </Link>
      <div className="px-4 py-5">
        <h2 className="font-['Lato'] line-clamp-1 text-lg my-3">{product.title}</h2>
        <div className="flex justify-around items-center">
          <p className="text-zinc-800 text-xl font-bold font-['Lato'] leading-relaxed">${product.price}</p>
          <RenderRating rate={product.rating.rate}/>
        </div>
      </div>
      <Button onClick={() => addLiked(product)}
        className="absolute top-2 right-2 z-10 shadow-form w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
        {
          likedProduct.some(liked => liked.id === product.id) ?
            <FaHeart className="text-red-500" size={30}/>
            : <FaRegHeart className="text-red-500" size={30}/>
        }
      </Button>
    </div>
  )
}
export default Cards

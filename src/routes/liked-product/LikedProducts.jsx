import Navbar from "../../components/navbar/Navbar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Button, notification} from "antd";
import {FaHeart} from "react-icons/fa";
import RenderRating from "../../components/render-rating/RenderRating.jsx";
import {removeLikedProduct} from "../../redux/slice/likeSlice.js";
const LikedProducts = () => {
  const dispatch = useDispatch()
  const {likedProduct} = useSelector(state => state.like)

  const removedLikedProduct = (product) => {
    dispatch(removeLikedProduct(product))
    notification.success({
      message: "Product removed from liked"
    })
  }

  return (
    <div>
      <Navbar/>
      <div className="w-full grid grid-cols-4 gap-5 px-[100px] py-[50px] my-[100px]">
        {
          likedProduct.map(product =>
            <div className="shadow-xl rounded-2xl hover:scale-105 duration-700 group relative">
              <Link to={`/single-page/${product.id}`} className="flex justify-center items-center">
                <img className="h-[200px] max-w-[200px] object-contain group-hover:scale-90 duration-700"
                     src={product.image}
                     alt={product.title}/>
              </Link>
              <div className="px-4 py-5">
                <h2 className="font-['Lato'] line-clamp-1 text-lg my-3">{product.title}</h2>
                <div className="flex justify-around items-center">
                  <p className="text-zinc-800 text-xl font-bold font-['Lato'] leading-relaxed">${product.price}</p>
                  <RenderRating rate={product.rating.rate}/>
                </div>
              </div>
              <Button onClick={() => removedLikedProduct(product)}
                className="absolute top-2 right-2 z-10 shadow-form w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                <FaHeart className="text-red-500" size={30}/>
              </Button>
            </div>
          )
        }
      </div>
    </div>
  )
}
export default LikedProducts

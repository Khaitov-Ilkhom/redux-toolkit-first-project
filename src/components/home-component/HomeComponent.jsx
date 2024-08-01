import {useState} from 'react'
import {useFetch} from "../../hooks/useFetch.jsx";
import Cards from "../cards/Cards.jsx";

const HomeComponent = () => {

  const [stock, setStock] = useState(8)
  const [data] = useFetch("/products")

  return (
    <div>
      <div className="w-full bg-cyan-800 min-h-[20px] mt-[74px] text-center">
      </div>
      <div className="hero min-h-[600px] w-full grid grid-cols-2">
        <div className="pt-[180px] pl-[150px]">
          <div
            className="font-['Lato'] text-zinc-800 text-lg font-bold uppercase leading-[27px] tracking-wide">New
            collection
          </div>
          <div
            className="font-['Lato'] text-zinc-800 text-7xl font-black leading-[93.60px] tracking-wide py-5 pb-8">Menswear
            2020
          </div>
          <div className="flex items-center gap-2">
            <button
              className="font-['Lato'] text-center text-cyan-800 text-base font-bold leading-[52px] tracking-wide px-10 rounded border border-cyan-800">Shop
              sale
            </button>
            <button
              className="font-['Lato'] text-center text-white text-base font-bold leading-[52px] tracking-wide px-10 bg-cyan-800 rounded">Shop
              the menswear
            </button>
          </div>
        </div>
        <div></div>
      </div>

      <div className="w-full grid grid-cols-4 gap-5 px-[100px] py-[50px]">
        {
          data?.slice(0, stock).map(product =>
            <Cards type={"allCard"} key={product.id} product={product}/>
          )
        }
      </div>
      <div className="text-center mb-8">
        <button className="bg-cyan-800 px-6 py-3 rounded-xl text-white font-['Lato']" onClick={() => setStock(stock + 4)}>Show More Products</button>
      </div>
    </div>
  )
}
export default HomeComponent
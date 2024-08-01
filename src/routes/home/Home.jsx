import Navbar from "../../components/navbar/Navbar.jsx";
import HomeComponent from "../../components/home-component/HomeComponent.jsx";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeComponent/>
      {/*<div className="w-full m-auto max-w-[1200px] grid grid-cols-4 gap-4">*/}
      {/*  {*/}
      {/*    data.map(product =>*/}
      {/*      <div key={product.id} className="border p-4">*/}
      {/*        <h2>{product.title}</h2>*/}
      {/*        <p>{product.category}</p>*/}
      {/*        <button onClick={() => dispatch(addToCart({product, count: 1}))}>Add to cart</button>*/}
      {/*      </div>*/}
      {/*    )*/}
      {/*  }*/}
      {/*</div>*/}
    </div>
  )
}
export default Home

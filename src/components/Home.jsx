import { Link, useLoaderData } from 'react-router-dom'
import Hero from './Hero'
import Cart1 from '../component_pack/CartsItem/Cart1'

const Home = () => {
  // const items = useLoaderData()
  // console.log(items)

  return (
    <div>
      <Hero />
      <p className="text-5xl text-green-500 my-20 text-center">
        This is Home Page
      </p>
      <div className="grid grid-cols-3 gap-5 mx-10">
        {/* {items.map((item) => (
          <Link
            to={`/details/${item._id}`}
            key={item._id}
            className="border p-10 rounded-lg"
          >
            <img
              src="https://media.artsper.com/artwork/2196294_1_m.jpg"
              alt=""
            />
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
          </Link>
        ))} */}
        <Cart1 />
        <Cart1 />
        <Cart1 />
        <Cart1 />
        <Cart1 />
        <Cart1 />
        <Cart1 />
        <Cart1 />
      </div>
    </div>
  )
}

export default Home

import { Link, useLoaderData } from 'react-router-dom'
import Hero from './Hero'
// import Cart1 from '../component_pack/CartsItem/Cart1'

const Home = () => {
  const items = useLoaderData()
  // console.log(items)

  return (
    <div>
      <Hero />
      <p>Brands</p>
      <div className="grid grid-cols-4 gap-5 mx-10">
        {items.map((item) => (
          <Link
            to={`/details/${item._id}`}
            key={item._id}
            className="border  rounded-lg"
          >
            <div className="p-2">
              <img src={item.image} alt="" className="border rounded-lg" />
              <p className="font-bold"> {item.name}</p>
              <div className="flex gap-3">
                <div className="border px-2 py-1 rounded-xl">
                  <p>${item.price}</p>
                </div>
                <div className="border px-2 py-1 rounded-xl">
                  <p>${item.category}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="py-1 px-2  text-zinc-50 rounded-lg bg-main">
                  Show Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

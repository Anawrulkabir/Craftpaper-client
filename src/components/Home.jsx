import { Link, useLoaderData } from 'react-router-dom'
import Hero from './Hero'
// import Cart1 from '../component_pack/CartsItem/Cart1'

const Home = () => {
  const items = useLoaderData()
  // console.log(items)

  return (
    <div>
      <Hero />
      <p
        className="text-main font-bold text-3xl  my-8 mb-12 text-center"
        id="Our-products"
      >
        Our Products
      </p>
      <div className="grid grid-cols-4 gap-5 mx-10  ">
        {items.map((item) => (
          <Link
            to={`/details/${item._id}`}
            key={item._id}
            className=" hover:scale-[99%] transition duration-900  "
          >
            {/* <div className="p-2 ">
              <div className=" h-42 w-42">
                <img
                  src={
                    item.image
                      ? item.image
                      : 'https://w7.pngwing.com/pngs/460/672/png-transparent-page-not-found-illustration-thumbnail.png'
                  }
                  alt=""
                  className="border rounded-lg object-cover h-80 w-96"
                />
              </div>

              <p className="font-bold text-xl mt-3 ml-3"> {item.name}</p>
              <div className="flex">
                <div className=" ml-3 rounded-xl">
                  <p className="text-orange-400 text-lg font-bold">
                    {item.price}
                  </p>
                </div>
                <div className="border border-green-400 rounded-xl">
                  <p className="">${item.category}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="py-1 px-2  text-zinc-50 rounded-lg bg-main">
                  Show Details
                </button>
              </div>
            </div> */}
            <div className="card  bg-base-100 shadow-xl">
              <figure>
                <img
                  src={
                    item.image
                      ? item.image
                      : 'https://w7.pngwing.com/pngs/460/672/png-transparent-page-not-found-illustration-thumbnail.png'
                  }
                  alt="Shoes"
                  className=" object-cover h-80 w-96"
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-start">
                  <div className="badge badge-outline border-zinc-500 text-green-800 text-xs">
                    {item.category}
                  </div>
                  {/* <div className="badge badge-outline">Products</div> */}
                </div>
                <h2 className="card-title text-main">
                  {item.name}
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className="flex justify-end">
                  <p className="text-orange-400 font-light text-lg text-right">
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

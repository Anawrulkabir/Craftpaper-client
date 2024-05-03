import { Link, useLoaderData } from 'react-router-dom'
import Masonry from 'react-masonry-css'
import '../index.css'

const AllItem = () => {
  const items = useLoaderData()
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 2,
  }
  return (
    <div>
      <p
        className="text-main font-bold text-3xl  my-8 mb-12 text-center"
        id="Our-products"
      >
        All Products
      </p>
      {/* <Masonry
        className="my-masonry-grid px-24 space-x-12 "
        breakpointCols={breakpoints}
      >
        {items.map((item) => (
          <div key={item._id} className="mb-6">
            <Link
              to={`/details/${item._id}`}
              key={item._id}
              className=" hover:scale-[99%] transition duration-900 "
            >
              <div className="card shadow-xl  bg-[#eef9f7]">
                <figure>
                  <img
                    src={
                      item.image
                        ? item.image
                        : 'https://w7.pngwing.com/pngs/460/672/png-transparent-page-not-found-illustration-thumbnail.png'
                    }
                    alt="Shoes"
                    className=" w-full"
                  />
                </figure>
                <div className="card-body">
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline border-zinc-500 text-green-800 text-xs">
                      {item.category}
                    </div>
                  </div>
                  <h2 className="card-title text-main">{item.name}</h2>
                  <div className="flex justify-end">
                    <p className="text-orange-400 font-light text-lg text-right">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Masonry> */}
      <Masonry
        className="my-masonry-grid lg:px-24 px-4 lg:space-x-12 space-x-2 "
        breakpointCols={breakpoints}
      >
        {items.map((item) => (
          <div key={item._id} className="lg:mb-6 mb-3">
            <Link
              to={`/details/${item._id}`}
              key={item._id}
              className=" hover:scale-[99%] transition duration-900 "
            >
              <div className="card shadow-xl  bg-[#eef9f7]">
                <figure>
                  <img
                    src={
                      item.image
                        ? item.image
                        : 'https://w7.pngwing.com/pngs/460/672/png-transparent-page-not-found-illustration-thumbnail.png'
                    }
                    alt="Shoes"
                    className=" w-full"
                  />
                </figure>
                <div className="lg:card-body border p-3">
                  {/* <div className="card-actions justify-start "> */}
                  <div className="badge badge-outline  text-zinc-800 lg:text-xs border-green-500 text-[10px] mb-2 lg:mb-0">
                    {item.category}
                  </div>
                  {/* <div className="badge badge-outline">Products</div> */}
                  {/* </div> */}
                  <h2 className="card-title text-main font-light lg:font-extrabold">
                    {item.name}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                  </h2>
                  <div className="flex justify-end">
                    <p className="text-orange-500 font-light text-lg text-right">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default AllItem

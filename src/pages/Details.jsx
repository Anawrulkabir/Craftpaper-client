import { useLoaderData } from 'react-router-dom'

const Details = () => {
  const item = useLoaderData()
  return (
    // <div className="max-h-[cal(100vh - 300px)]">
    //   <div className="flex  gap-10 p-10 ">
    //     <img src={item.image} alt="" className="w-full" />
    //     <div>
    //       <p className="text-5xl">{item.name}</p>
    //       <p>this is item details page </p>
    //       <p>name : {item.name}</p>
    //       <p>{item.price}</p>
    //       <p>{item.description}</p>
    //       <button className="btn">Request to Buy</button>
    //       <button className="btn">Add to Favourite</button>
    //     </div>
    //   </div>
    // </div>
    <div className="dark:bg-gray-100 dark:text-gray-900">
      <div className="container grid grid-cols-12 mx-auto">
        <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
          <img src={item.image} alt="" />
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
          <div className="pt-6 pb-4 space-y-2">
            <span className="text-orange-500 text-xl">{item.price}</span>
            <h1 className="text-3xl font-bold">{item.name}</h1>
            <p>{item.description}</p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center py-2 space-x-2 text-sm dark:text-indigo-600"
            >
              <div className="flex flex-col gap-2 text-base font-light mt-6">
                <div>Rating : {item.rating}</div>
                <div>Category : {item.category}</div>
                <div>Customization : {item.customization ? 'Yes' : 'No'}</div>
                <div>Time to delivery : {item.time} </div>
                <div>
                  Available : {''}
                  {item.status ? 'Stock Available' : 'Request Only Product'}
                </div>
              </div>
            </a>
            <div className="flex gap-4 pt-6">
              <div className="border rounded bg-main  text-white px-3 py-2">
                <button>Add To Favourite</button>
              </div>
              <div className="border rounded bg-main  text-white px-3 py-2">
                <button>
                  {item.status ? 'Add to Cart' : 'Request for Stock'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details

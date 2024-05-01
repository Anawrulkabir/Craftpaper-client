import { useLoaderData } from 'react-router-dom'

const Details = () => {
  const item = useLoaderData()
  return (
    <div className="max-h-[cal(100vh - 300px)]">
      <div className="flex  gap-10 p-10 ">
        <img src={item.image} alt="" className="w-full" />
        <div>
          <p className="text-5xl">{item.name}</p>
          <p>this is item details page </p>
          <p>name : {item.name}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <button className="btn">Request to Buy</button>
          <button className="btn">Add to Favourite</button>
        </div>
      </div>
    </div>
  )
}

export default Details

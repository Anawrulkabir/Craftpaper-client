import { useLoaderData } from 'react-router-dom'

const Details = () => {
  const item = useLoaderData()
  return (
    <div>
      <p>this is item details page </p>
      <p>name : {item.name}</p>
    </div>
  )
}

export default Details

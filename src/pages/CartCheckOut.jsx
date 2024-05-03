import { useLoaderData } from 'react-router-dom'

const CartCheckOut = () => {
  const items = useLoaderData()
  console.log(items)
  return (
    <div>
      <p>here cart items will be stored </p>
      <p>{items.length}</p>
    </div>
  )
}

export default CartCheckOut

import { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const MyItems = () => {
  const { user } = useContext(AuthContext)
  const items = useLoaderData()
  console.log(items)
  return (
    <div>
      <p>This is my item page</p>
    </div>
  )
}

export default MyItems

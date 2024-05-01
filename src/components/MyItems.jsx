// import { useContext, useEffect, useState } from 'react'
// import { useLoaderData, useParams } from 'react-router-dom'
// import { AuthContext } from '../provider/AuthProvider'

// const MyItems = () => {
//   const { user } = useContext(AuthContext)
//   // console.log(user)
//   // const { items } = useLoaderData()

//   const email = useParams()
//   console.log(email)

//   const myAddedItems = items.filter((item) => item.email === user.email)
//   console.log(myAddedItems)

//   return (
//     <div>
//       <p>This is my item page</p>
//       <p>{items.length}</p>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.user && item.user.email ? item.user.email : 'Email not found'}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default MyItems

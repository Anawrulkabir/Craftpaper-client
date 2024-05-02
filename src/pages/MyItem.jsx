import Masonry from 'react-masonry-css'
import { Link, useLoaderData } from 'react-router-dom'
import { PiDotsThreeCircleLight } from 'react-icons/pi'
// import toast from 'react-hot-toast'

const MyItem = () => {
  const items = useLoaderData()

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   const form = e.target
  //   const image = form.photo.value
  //   const name = form.name.value
  //   const category = form.subcategory.value
  //   const description = form.description.value
  //   const price = form.price.value
  //   const rating = form.rating.value
  //   const time = form.time.value
  //   const username = form.username.value
  //   const email = form.email.value
  //   const customization = form.elements.customization.checked
  //   const status = form.elements.status.checked

  //   const craftItem = {
  //     image,
  //     name,
  //     category,
  //     description,
  //     price,
  //     rating,
  //     time,
  //     username,
  //     email,
  //     customization,
  //     status,
  //     user,
  //   }

  //   fetch('https://craft-house-server.vercel.app/items/${item._id}/update', {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(craftItem),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       if (data.insertedId) {
  //         toast.success('Successfull added a new Craft item')
  //       }
  //     })

  //   console.log(craftItem)
  // }

  return (
    <div>
      <p
        className="text-main font-bold text-3xl  my-8 mb-12 text-center"
        id="Our-products"
      >
        My Items
      </p>
      <Masonry
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
                <figure className="relative">
                  <img
                    src={
                      item.image
                        ? item.image
                        : 'https://w7.pngwing.com/pngs/460/672/png-transparent-page-not-found-illustration-thumbnail.png'
                    }
                    alt="Shoes"
                    className=" w-full"
                  />
                  {/* <div className="absolute top-4 right-4 ">
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className=" m-1">
                        <PiDotsThreeCircleLight className="text-3xl bg-transparent text-green-700" />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <Link
                            // to={`/items/${item._id}/update`}
                            className=""
                            // onClick={() =>
                            //   document
                            //     .getElementById('my_modal_update')
                            //     .showModal()
                            // }
                          >
                            Update
                          </Link>
                        </li>
                        <li>
                          <a>Delete</a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
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
                  {/* <div className="flex justify-center">
                    <Link
                      to={`/details/${item._id}`}
                      className="text-center p-0  text-blue-500 font-extralight hover:font-light tracking-wider inline-block "
                    >
                      See Details
                    </Link>
                  </div> */}
                </div>
              </div>
            </Link>
            {/* <dialog id="my_modal_update" className="modal">
              <div className=" p-6 rounded-xl text-white bg-[#D5E3E0] bg-opacity-65">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-center items-center gap-y-3 gap-x-5"
                >
                  <div className="flex gap-4 ">
                    <label className="form-control w-full max-w-xs">
                      <input
                        type="text"
                        name="photo"
                        placeholder={item.image}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <input
                        type="text"
                        name="name"
                        placeholder={item.name}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <input
                        type="text"
                        name="subcategory"
                        placeholder={item.category}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>
                  <div className="flex gap-4">
                    <label className="form-control w-full max-w-xs">
                      <input
                        type="text"
                        name="description"
                        placeholder={item.description}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <input
                        type="text"
                        name="price"
                        placeholder={item.price}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <input
                        type="text"
                        name="rating"
                        placeholder={item.rating}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>
                  <div className="flex gap-4">
                    <label className="form-control w-full max-w-xs">
                      <input
                        type="text"
                        name="time"
                        placeholder={item.time}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <input
                        type="text"
                        name="username"
                        placeholder={item.username}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <input
                        type="text"
                        name="email"
                        placeholder={item.email}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>
                  <div className="flex gap-4">
                    <div className="form-control flex items-center flex-row gap-5 border rounded-full px-10">
                      <p className="text-main">Customization</p>

                      <label className="cursor-pointer label flex items-center justify-center gap-1">
                        <span className="label-text">No</span>
                        <input
                          type="checkbox"
                          className="toggle"
                          name="customization"
                        />
                        <span className="label-text">Yes</span>
                      </label>
                    </div>
                    <div className="form-control flex items-center flex-row gap-5 border rounded-full px-10 ">
                      <p className="text-main">Status</p>

                      <label className="cursor-pointer label flex items-center justify-center gap-1">
                        <span className="label-text ">In Stock</span>
                        <input
                          type="checkbox"
                          className="toggle"
                          name="status"
                        />
                        <span className="label-text">Made to order</span>
                      </label>
                    </div>
                  </div>

                  <label className="form-control w-full max-w-xs">
                    <input
                      type="submit"
                      value="Update Item"
                      className="btn bg-main border-0 hover:bg-green-800 mt-5 text-lg text-white"
                    />
                  </label>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog> */}
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default MyItem

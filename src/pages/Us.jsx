import { Link } from 'react-router-dom'

const Us = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <Link
          to="/twoyear"
          classNameName="btn bg-red-500 border-0 text-zinc-100 focus:bg-green-600"
        >
          Reveal
        </Link>
      </div>
    </>
  )
}

export default Us

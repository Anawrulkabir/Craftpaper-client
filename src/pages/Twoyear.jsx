import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Twoyear = () => {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Delay showing text after 3 seconds
    const timer = setTimeout(() => {
      setShowText(true)
    }, 1000)

    // Clear timer on unmount to avoid memory leaks
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex justify-center items-center w-full h-screen relative">
      <motion.div
        className="border border-green-700 rounded-full absolute"
        initial={{ x: -200, y: 0 }}
        animate={{ x: 0, y: -15 }}
        transition={{ duration: 1 }}
      >
        <img
          src="../../images/me.jpg"
          alt=""
          className="w-20 h-20 rounded-full object-cover"
        />
      </motion.div>
      <motion.div
        className="border border-green-700 rounded-full absolute"
        initial={{ x: 200, y: 0 }}
        animate={{ x: 66, y: -15 }}
        transition={{ duration: 1 }}
      >
        <img
          src="../../images/tahsin.jpg"
          alt=""
          className="rounded-full w-20 h-20 object-cover"
        />
      </motion.div>
      {showText && (
        <motion.div
          initial={{ x: 0, y: 150 }}
          animate={{ x: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/2 transform -translate-y-1/2 text-center"
        >
          <h1 className="text-2xl text-center text-purple-500 mb-4 ml-20 font-bold">
            Happy two Years 💚
          </h1>
        </motion.div>
      )}
      <canvas className="confetti" id="canvas"></canvas>
    </div>
  )
}

export default Twoyear

import Navbar from './navbar/Navbar';
import { motion } from 'framer-motion';
import krtshirtImage from '../assets/tshirtkr.jpg';

const product = {
  name: 'ಕನ್ನಡ Rajyotsava',
  price: '₹360',
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: krtshirtImage,
    },
  ],
  description: `
    <p>Get your Shirt now!</p>
  `,
};

export default function Tshirt() {
  return (
    <>
      <Navbar />
      <div className="bg-[#151515] min-h-screen flex items-center justify-center px-4 pt-8 md:pt-0">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image with Animation */}
            <motion.img
              src={krtshirtImage}
              alt="Kannada Rajyotsava T-shirt"
              className="w-[90%] md:w-[38vw] h-auto object-cover mx-auto rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />

            {/* Product Info with Animations */}
            <motion.div
              className="mt-10 px-4 text-center lg:text-left lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h1
                className="text-[5.4vh] font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                {product.name}
              </motion.h1>
              <p className="text-[3.6vh] text-white">T-shirt</p>

              <motion.div
                className="mt-3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-[3vh] font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                  {product.price}
                </p>
              </motion.div>

              {/* Product Description with Animation */}
              <motion.div
                className="mt-6 text-base text-white space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                dangerouslySetInnerHTML={{ __html: product.description }}
              />

              {/* Buy Now Button: Start on Desktop, Center on Mobile */}
              <motion.form
                className="mt-10 flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <button
                  type="submit"
                  className="max-w-xs w-full bg-yellow-400 text-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium hover:bg-red-500 hover:text-white shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-yellow-500"
                >
                  Buy Now
                </button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

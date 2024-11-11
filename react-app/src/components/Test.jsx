import Navbar from "./navbar/Navbar";
import msrit from "../assets/msrit.jpg";
import deca from "../assets/deca.png";
import KR from "../assets/KR.png";
import { motion } from "framer-motion";

const features = [
  {
    name: "About M.S.R.I.T",
    description:
      "Established in 1962 by the visionary Dr. M.S. Ramaiah, Ramaiah Institute of Technology has only grown over the years and is one of the most prestigious engineering institutions in India. Offering a variety of courses at UG, PG and Doctorate level, RIT has established itself as a centre of excellence for high quality education. Industry oriented teaching programs and high placement records, guarantee aspiring students a bright future in whichever field they choose to pursue. It stands strong as a bastion of knowledge and free thinking.",
    imageSrc: msrit,
    imageAlt: "MSRIT campus building.",
  },
  {
    name: "About DECA",
    description:
      "If you're a student at MSRIT and interested in building leadership skills and exploring entrepreneurship, DECA is a great club to join. It's part of a global organization that helps students get hands-on experience with business-related competitions, case studies, and events. Being a part of DECA means you can engage in activities like pitching startup ideas, developing business strategies, and networking with industry professionals. It's not just about learning theory: you get to challenge yourself in real world scenarios, which looks fantastic on your resume. Plus, MSRIT's ecosystem is super supportive, with other clubs like IEEE and TEDx giving you diverse opportunities to grow. Whether you're into tech or business, DECA gives you the platform to explore your potential in a fun, competitive, and growth-oriented environment.",
    imageSrc: deca,
    imageAlt: "DECA logo.",
  },
  {
    name: "About ಕನ್ನಡ Rajyotsava",
    description:
      "This has always been the most celebrated event during any given odd semester. Held in the month of November, Kannada Rajyotsava brings out the culture of the State in full fervour and colour. Eminent litterateurs and well-known actors are invited to our campus to add to the celebrations. Our institute takes pride in the fact that many non-Kannadiga students come forward to work as volunteers and contribute to the success of Rajyotsava. Many competitive events are held, and prizes are distributed on the final day.",
    imageSrc: KR,
    imageAlt: "Rajyotsava celebration.",
  },
];

const animationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Example() {
  return (
    <>
      <Navbar />
      <div className="bg-[#0B0B0B] pt-[80px]">
        {/* Hero Section */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex pt-[5vw] md:pt-[9vw] justify-center h-[30vh] md:h-[40vh] bg-[#0B0B0B]"
        >
          <div className="relative text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-2xl flex justify-center text-white"
            >
              M.S.R.I.T presents
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-9xl pb-[2vh]  font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
            >
              ಕನ್ನಡ Rajyotsava
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-3xl md:text-5xl flex pt-[1vw] justify-center text-white"
            >
              ೨೦೨೪
            </motion.p>
          </div>
        </motion.main>
        
        {/* Features Section */}
        <div className="max-w-full mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 md:mt-16 space-y-8 md:space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center w-full space-y-6 md:space-y-0 md:space-x-8`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                {/* Image */}
                <motion.div
                  className="flex-shrink-0 w-3/4 md:w-1/3"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </motion.div>

                {/* Text */}
                <div className="w-full md:w-2/3">
                  <motion.h3
                    className="text-xl md:text-2xl font-medium text-[#E7602A]"
                    variants={animationVariants}
                  >
                    {feature.name}
                  </motion.h3>
                  <motion.p
                    className="mt-2 text-sm md:text-[1.2vw] leading-normal text-white"
                    variants={animationVariants}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

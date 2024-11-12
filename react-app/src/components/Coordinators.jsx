import InstagramIcon from '/src/assets/insta.svg';
import Navbar from "./navbar/Navbar";
import shreya from "../assets/shreya.png";
import madhu from "../assets/madhu.png";
import vidya from "../assets/vidya.png";
import pranav from "../assets/pranav.png";
import shraddha from "../assets/shraddha.png";
import karthik from "../assets/karthik.png";
import bg from "../assets/gb.jpg";

const people = [
  {
    name: 'Shreya G Shet',
    usn: '1MS21CV086',
    phone: '6363679309',
    url: 'https://instagram.com/shreya_g_shet',
    photo: shreya,
  },
  {
    name: 'Madhukeerthi K',
    usn: '1MS22CV404',
    phone: '9480420739',
    url: 'https://instagram.com/madhu.001.mk',
    photo: madhu,
  },
  {
    name: 'Vidya Mainalli',
    usn: '1ms21et060',
    phone: '9019519798',
    url: 'https://instagram.com/vidya_f_m',
    photo: vidya,
  },
  {
    name: 'Pranav B Raj',
    usn: '1MS22AI073',
    phone: '9353029515',
    url: 'https://instagram.com/pranav_b_raj',
    photo: pranav,
  },
  {
    name: 'Shraddha K Hiremath',
    usn: '1MS22IM042',
    phone: '7892433738',
    url: 'https://instagram.com/shraddhahiremath',
    photo: shraddha,
  },
  {
    name: 'Karthik Gowda G R',
    usn: '1MS22CHO22',
    phone: '9353083175',
    url: 'https://instagram.com/_karthik_gowda_40',
    photo: karthik,
  },
];

export default function Coordinators() {
  const fourthYearCoordinators = people.slice(0, 3);
  const thirdYearCoordinators = people.slice(3);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full lg:h-[95vh] bg-[#000000] ">
        
        {/* Left Side Image */}
        <div className="flex justify-center items-center">
          <div 
            className="bg-cover bg-center h-[48vh] sm:h-[70vh] w-full mx-[5vw] md:mx-[8vw]" 
            style={{ backgroundImage: `url(${bg})` }}
          >
          </div>
        </div>

        {/* Right Side Content */}
        <div className="bg-[#000000] py-6 md:py-12 mx-[5vw] md:mx-[8vh] md:-ml-[8vh]">
          <div className="max-w-full md:max-w-[70vh] mx-auto space-y-6 md:space-y-12 text-center">
            
            {/* 4th Year Coordinators */}
            <div className="space-y-5">
              <h2 className="text-[5vw] md:text-[4vh] font-bold tracking-tight text-[#FFEAAC]">
                Meet our 4<sup className="align-super text-[1.5vh]">th</sup> Year Coordinators
              </h2>
            </div>
            <ul role="list" className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6">
              {fourthYearCoordinators.map((person) => (
                <li
                key={person.name}
                className="relative bg-[#151515] pb-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex flex-col items-center"
              >
                <div className="relative w-[75%] max-w-[200px] aspect-square">
                  <img
                    src={person.photo}
                    alt="Coordinator"
                    className="mx-auto h-full w-full object-cover rounded-lg"
                  />
                  <a
                    href={person.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-[0.8vw] right-[0.8vw] md:top-[0.5vw] md:right-[0.5vw]"
                  >
                    <img
                      src={InstagramIcon}
                      alt="Instagram"
                      className="h-[4vw] w-[4vw] sm:h-[2.5vw] sm:w-[2.5vw] md:h-[1.5vw] md:w-[1.5vw]"
                    />
                  </a>
                </div>
                
                <div className="text-center mt-3 md:mt-2 space-y-1 px-2 w-full">
                  <h3 className="text-[#ffffff] font-semibold text-sm md:text-base">{person.name}</h3>
                  <p className="text-[#FE5B4A] uppercase text-xs md:text-sm">{person.usn}</p>
                  <p className="text-[#ffffff] text-xs md:text-sm">{person.phone}</p>
                </div>
              </li>
              
              ))}
            </ul>

            {/* 3rd Year Coordinators */}
            <div className="space-y-5 pb-4 md:pb-[1vw]">
              <h2 className="text-[5vw] md:text-[4vh] font-bold tracking-tight text-[#FFEAAC]">
                Meet our 3<sup className="align-super text-[1.5vh]">rd</sup> Year Coordinators
              </h2>
            </div>
            <ul role="list" className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6">
              {thirdYearCoordinators.map((person) => (
                <li
                key={person.name}
                className="relative bg-[#151515] pb-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex flex-col items-center"
              >
                <div className="relative w-[75%] max-w-[200px] aspect-square">
                  <img
                    src={person.photo}
                    alt="Coordinator"
                    className="mx-auto h-full w-full object-cover rounded-lg"
                  />
                  <a
                    href={person.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-[0.8vw] right-[0.8vw] md:top-[0.5vw] md:right-[0.5vw]"
                  >
                    <img
                      src={InstagramIcon}
                      alt="Instagram"
                      className="h-[4vw] w-[4vw] sm:h-[2.5vw] sm:w-[2.5vw] md:h-[1.5vw] md:w-[1.5vw]"
                    />
                  </a>
                </div>
                
                <div className="text-center mt-3 md:mt-2 space-y-1 px-2 w-full">
                  <h3 className="text-[#ffffff] font-semibold text-sm md:text-base">{person.name}</h3>
                  <p className="text-[#FE5B4A] uppercase text-xs md:text-sm">{person.usn}</p>
                  <p className="text-[#ffffff] text-xs md:text-sm">{person.phone}</p>
                </div>
              </li>
              
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// import Card from "../../components/Cards";
// import { featuresCardData } from "../../data";

// const Features = () => {
//   return (
//     <section>
//       <div className="py-14 mx-auto ">
//         <h2 className="font-outfit text-[1rem] font-bold text-center">
//           FEATURES
//         </h2>
//         <p className="font-urbanist text-center font-bold text-[3rem] mt-2 w-full md:w-[60%] mx-auto leading-[3rem]">
//           Why Choose Mahfuz for Effortless, Ethical Payments?
//         </p>

//         <div className="mt-10 px-4 md:px-20">
//           <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-7">
//             {featuresCardData.map((feature, index) => (
//               <Card
//                 key={index}
//                 icon={feature.icon}
//                 title={feature.title}
//                 description={feature.description}
//               />
//             ))}
//           </div>

//           <div className="md:hidden px-3 overflow-x-auto no-scrollbar flex gap-3 mx-auto">
//             {featuresCardData.map((feature) => (
//               <div className="min-w-full " key={feature.id}>
//                 <Card
//                   icon={feature.icon}
//                   title={feature.title}
//                   description={feature.description}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;



import Card from "../../components/Cards";
import { featuresCardData } from "../../data";

const Features = () => {
  return (
    <section className=" min-h-screen py-20">
      <div className="mx-auto w-full px-4 md:w-[85%]">
        <h4 className="font-outfit text-[0.75rem] font-semibold tracking-widest text-gray-500">
          FEATURES
        </h4>

        <div className="mt-2 grid md:grid-cols-2 gap-8 items-start">
          {/* Left Text Content */}
          <div>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold leading-snug text-[#002147] font-urbanist">
              Why Mahfuz?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Mahfuz is a complete digital, Non-interest microfinance bank built
              for the unbanked, underbanked, and Gen Z. At Mahfuz, we offer
              ethical, interest-free but profit-based banking services designed
              for modern-day digital lifestyle.
              <br />
              <br />
              From effortless account opening to ethical savings and financing,
              user-friendly mobile application, seamless transactions and smart
              investments.
            </p>
          </div>

          {/* Right 2x2 Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 md:p-8 rounded-lg shadow-md">
            {/* Blue Glow in the middle (optional) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-blue-100 blur-2xl rounded-full"></div>
            </div>

            {featuresCardData.map((benefit, index) => (
              <Card
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="z-10"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

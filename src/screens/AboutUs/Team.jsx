import TeamCard from "../../components/TeamCard";
import { teamMembers } from "../../data";
const Team = () => {
  return (
    <section className="bg-[#F7F7F7] min-h-screen py-20 px-5 text-center md:text-start">
      <div className="mx-auto w-full md:w-[85%]">
        <h3 className="font-outfit text-[1rem] font-bold">OUR TEAM</h3>
        <p className="font-urbanist  font-bold text-[2rem] mt-2 leading-none md:leading-[2.5rem] text-center md:text-start w-full md:w-[60%]">
          Meet the Visionaries Driving Ethical Finance Forward{" "}
        </p>
      </div>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center">
          {teamMembers.slice(0, 3).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center">
          {teamMembers.slice(3, 5).map((member, index) => (
            <TeamCard
              key={index + 3} // Ensure unique keys
              image={member.image}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

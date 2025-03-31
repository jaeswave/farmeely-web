import Button from "../../components/Button";
import ourStory1 from "../../assets/images/ourStory1.png";
import ourStory2 from "../../assets/images/ourStory2.png";

const OurStory = () => {
  return (
    <section className="min-h-screen flex items-center justify-center mx-auto text-center md:text-start py-10 ">
      <div className="flex flex-col md:flex-row w-[85%] mx-auto gap-5 ">
        <div className="w-full md:w-1/2 py-5">
          <h1 className="font-outfit text-[1rem] font-bold">OUR STORY</h1>
          <h2 className="font-urbanist font-bold text-[2rem] md:text-[3rem] mt-2">About US</h2>
          <p className="font-urbanist text-xs md:text-sm  mt-2 w-full md:leading-none lg:leading-[1.3rem] xl:leading-[2.5rem]">
            Our story begins with a passion for creating unique and memorable
            experiences for our customers. We believe that every moment is an
            opportunity to create something special, and we strive to make each
            interaction with our brand a memorable one. Our team is dedicated to
            providing exceptional service and quality products that exceed
            expectations. We are committed to sustainability and ethical
            practices, ensuring that our impact on the world is positive. Join
            us on our journey as we continue to grow and evolve, always keeping
            our customers at the heart of everything we do.
          </p>
          <Button title="Read More" className="mt-5" />
        </div>
        <div className="w-full md:w-1/2 grid grid-rows-[20%-80%] gap-5">
          <img src={ourStory1} alt="" />
          <img src={ourStory2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;

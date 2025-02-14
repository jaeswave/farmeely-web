import { howItWorksData } from "../data";

const HowItWorks = () => {
  return (
    <section className="py-10">
      <div className="mx-auto lg:px-4">
        <div className="grid lg:grid-cols-2 gap-16 place-items-center">
          <div className="px-5 lg:px-0 w-full lg:max-w-[70%] text-center lg:text-start">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-customBlack leading-relaxed text-center md:text-start ">
            MailMeQuran makes it effortless to stay connected with the Quran at your own pace. Simply sign up and customize your schedule—choose how often you’d like to receive verses, whether daily, weekly, or monthly. Select the number of verses or specific surahs you wish to receive, and we’ll deliver them straight to your inbox at your preferred time. This flexible approach helps you seamlessly integrate Quranic recitation and reflection into your routine, whether you have just a few minutes or a full hour. With MailMeQuran, you can build consistency, deepen your understanding through translations and Tafsir, and cultivate a meaningful, lasting connection with the Quran.
            </p>
          </div>

          <div className="space-y-6 w-[70%]">
            {howItWorksData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <h3 className="text-xl font-semibold mb-1">{item.step}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

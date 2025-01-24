import { howItWorksData } from "../data";

const HowItWorks = () => {
  return (
    <section className="py-10">
      <div className="mx-auto lg:px-4">
        <div className="grid lg:grid-cols-2 gap-16 place-items-center">
          <div className="px-5 lg:px-0 w-full lg:max-w-[70%] text-center lg:text-start">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-customBlack leading-relaxed text-center md:text-start ">
              MailMeQuran is designed to make it easy for you to stay connected
              with the Quran at your own pace. Once you sign up, you can set a
              personalized schedule for receiving Quranic verses based on your
              preferred frequency, whether it's daily, weekly, or monthly.
              Simply choose the number of verses or specific surahs you wish to
              receive, and we’ll send them directly to your inbox at your
              selected time. This allows you to incorporate Quranic study and
              reflection into your daily life, whether you have a few minutes or
              an hour to spare. With MailMeQuran, you can stay consistent in
              your recitation, deepen your understanding through translations
              and Tafsir, and foster a lasting connection with the Quran.
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

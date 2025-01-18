import DashboardImage from "../assets/images/dashboard.png";

const SurahCompletion = (prop) => {
  const { data } = prop;

  console.log("SurahCompletion", data);

  function calculateSurahProgress(surah) {
    const totalSurahs = 114;
    return Math.min((surah / totalSurahs) * 100, 100); // Ensure progress doesn't exceed 100%
  }

  const CompletionProgress = calculateSurahProgress(
    Object.keys(data).length > 0 ? data.emailLogs.surah_completed : 0
  );

  return (
    <div className="bg-customGreen flex items-center justify-between rounded-3xl text-customWhite">
      <div className="text-center lg:text-start items-center px-5 lg:w-[65%]">
        <p className="font-bold text-[1.5rem] mb-3">
          Progress : Surah Completion
        </p>
        <p className="grid lg:grid-cols-2 lg:justify-between space-x-10">
          <span>
            Verses delivered:{" "}
            {Object.keys(data).length > 0 ? data.emailLogs.verse_completed : 0}
          </span>
          <span>
            Surah Completed:{" "}
            {Object.keys(data).length > 0 ? data.emailLogs.surah_completed : 0}
          </span>
        </p>
        <p className="grid lg:grid-cols-2 lg:justify-between space-x-10 mb-3">
          <span>Progress</span>
          <span>{CompletionProgress}%</span>
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
          <div
            className="bg-customBlack h-4 rounded-full text-center text-xs text-white"
            style={{ width: `${CompletionProgress}%` }}
          >
            {CompletionProgress}%
          </div>
        </div>
      </div>
      <div className="place-self-center hidden sm:block object-contain mb-3">
        <img className="w-[80%] h-auto" src={DashboardImage} alt="Dashboard" />
      </div>
    </div>
  );
};

export default SurahCompletion;

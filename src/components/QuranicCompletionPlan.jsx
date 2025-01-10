import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../components/Button";

const QuranicCompletionPlan = (prop) => {
  const { verseCount = 0, frequency = "daily",verseSent } = prop; // Default values
  const totalVerses = 6236;

  const [progressData, setProgressData] = useState({
    percentageComplete: 0,
    timeRemaining: 0,
    completionDate: "Not Set",
  });

  useEffect(() => {
    const calculateCompletionPlan = () => {
      // Calculate percentage complete
      const percentageComplete = Math.min((verseCount / totalVerses) * 100, 100);

      // Calculate time remaining and completion date
      const remainingVerses = totalVerses - verseCount;
      let timeRemaining = 0;
      let unit = "";

      // Determine timeRemaining and unit based on frequency
      if (frequency === "daily") {
        timeRemaining = Math.ceil(remainingVerses / verseCount) || 0;
        unit = "days";
      } else if (frequency === "weekly") {
        timeRemaining = Math.ceil(remainingVerses / verseCount) || 0;
        unit = "weeks";
      } else if (frequency === "monthly") {
        timeRemaining = Math.ceil(remainingVerses / verseCount) || 0;
        unit = "months";
      }

      const completionDate = new Date();
      if (unit === "days") {
        completionDate.setDate(completionDate.getDate() + timeRemaining);
      } else if (unit === "weeks") {
        completionDate.setDate(completionDate.getDate() + timeRemaining * 7);
      } else if (unit === "months") {
        completionDate.setMonth(completionDate.getMonth() + timeRemaining);
      }

      return {
        percentageComplete,
        timeRemaining,
        completionDate: completionDate.toDateString(),
      };
    };

    const updatedProgress = calculateCompletionPlan();
    setProgressData(updatedProgress);
  }, [verseCount, frequency]);

  return (
    <div className="max-w-sm mx-auto bg-[#D4EDD970] rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-center mb-4">
        Your Quran Completion Plan
      </h3>
      <div className="flex justify-center my-4">
        <div className="w-24">
          <CircularProgressbar
            value={progressData.percentageComplete}
            text={`${progressData.percentageComplete.toFixed(1)}%`}
            styles={buildStyles({
              textColor: "#000",
              pathColor: "green",
              trailColor: "#d6e6d6",
            })}
          />
        </div>
      </div>
      <p className="text-sm text-center mb-4">
        Based on your preference of{" "}
        <span className="font-semibold">{verseCount || 0}</span> verses{" "}
        <span className="font-semibold">{frequency}</span>, you will complete
        the Quran in approximately{" "}
        <span className="font-semibold">
          {progressData.timeRemaining || "0"}
        </span>{" "}
        {frequency === "daily"
          ? "days"
          : frequency === "weekly"
          ? "weeks"
          : "months"}
        , by{" "}
        <span className="font-semibold">{progressData.completionDate}</span>.
      </p>
      <div className="text-sm text-center mb-4">
        <p>
          <span className="font-bold">Verses Read:</span> {verseSent || 0} /{" "}
          {totalVerses}
        </p>
        <p>
          <span className="font-bold">Status:</span>{" "}
          {progressData.percentageComplete === 100
            ? "Completed ✅"
            : "In Progress ⏳"}
        </p>
      </div>
      <p className="italic text-sm text-center mb-4">
        The Quran is a guide for those who seek it. Keep going!
      </p>
      <div className="flex justify-center">
        <Button
        title="Update Your Plan"
        className="!w-40"
        />
      </div>
    </div>
  );
};

export default QuranicCompletionPlan;

import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const QuranicCompletionPlan = (prop) => {
  const { data } = prop;
  const values = Object.keys(data).length > 0 ? data : null;
  const totalVerses = 6236;

  const [progressData, setProgressData] = useState({
    percentageComplete: 0,
    timeRemaining: 0,
    completionDate: "Not Set",
  });

  useEffect(() => {
    const calculateCompletionPlan = () => {
      // Calculate percentage complete
      const percentageComplete = Math.min(
        ((values?.daily_verse_count || 0) / totalVerses) * 100,
        100
      );

      console.log("percentageComplete", percentageComplete);

      // Calculate time remaining and completion date
      const remainingVerses = totalVerses - values?.daily_verse_count || 0;
      let timeRemaining = 0;
      let unit = "";

      // Determine timeRemaining and unit based on frequency
      if (values && values.frequency === "daily") {
        timeRemaining =
          Math.ceil(remainingVerses / values?.daily_verse_count) || 0;
        unit = "days";
      } else if (values && values.frequency === "weekly") {
        timeRemaining =
          Math.ceil(remainingVerses / values?.daily_verse_count) || 0;
        unit = "weeks";
      } else if (values && values.frequency === "monthly") {
        timeRemaining =
          Math.ceil(remainingVerses / values?.daily_verse_count) || 0;
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
    console.log("hello to the whole world", updatedProgress);
    setProgressData(updatedProgress);
  }, [values]);

  return (
    <div className="max-w-sm mx-auto  rounded-lg p-6">
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
        <span className="font-semibold">{values?.daily_verse_count || 0}</span>{" "}
        verses{" "}
        <span className="font-semibold">{values?.frequency || "daily"}</span>,
        you will complete the Quran in approximately{" "}
        <span className="font-semibold">
          {progressData.timeRemaining || "0"}
        </span>{" "}
        {values?.frequency === "daily"
          ? "days"
          : values?.frequency === "weekly"
          ? "weeks"
          : "months"}
        , by{" "}
        <span className="font-semibold">{progressData.completionDate}</span>.
      </p>
      <div className="text-sm text-center mb-4">
        <p>
          <span className="font-bold">Verses Read:</span>{" "}
          {values?.emailLogs.verse_completed || 0} / {totalVerses}
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
        <Link to="/update-preference">
          <Button title="Update Your Plan" className="!w-40" />
        </Link>
      </div>
    </div>
  );
};

export default QuranicCompletionPlan;

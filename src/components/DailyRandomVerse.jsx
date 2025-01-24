import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Button from "./Button";
import { getDailyRandomVerse } from "../redux/slices/dailyRandomVerseSlice";
import { useDispatch, useSelector } from "react-redux";

const DailyRandomVerse = () => {
  const { isLoading, verse, error } = useSelector((state) => state.randomVerse);
  const dispatch = useDispatch();

  const [storedVerse, setStoredVerse] = useState(null);

  useEffect(() => {
    const currentTime = Date.now();
    const storedData = JSON.parse(localStorage.getItem("randomVerseData"));

    if (storedData) {
      const { time, data } = storedData;

      if (currentTime - time < 86400000) {
        // Use stored data if it's still valid
        setStoredVerse(data);
        return;
      }
    }

    // Fetch a new verse if no valid data exists
    dispatch(getDailyRandomVerse()).then(() => {
      const newTime = Date.now();
      if (verse?.data?.length > 0) {
        const newData = verse.data[0];
        localStorage.setItem(
          "randomVerseData",
          JSON.stringify({ time: newTime, data: newData })
        );
        setStoredVerse(newData);
      }
    });
  }, [dispatch, verse]);

  const displayVerse =
    storedVerse || (verse?.data?.length > 0 && verse.data[0]);

  if (isLoading) return <Spinner />;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  if (displayVerse) {
    return (
      <div>
        <h2 className="text-1xl font-semibold text-center mb-3 mt-3">
          Your Daily Quranic Verse
        </h2>
        <p className="text-2xl text-center arabic-font text-customBlack mb-4">
          {displayVerse.ar}
        </p>
        <p className="text-center text-gray-700 text-sm mb-4">
          {displayVerse.en}
        </p>
        <p className="text-center font-bold text-gray-800 mb-4">
          (Surah {displayVerse.chapter}, Verse {displayVerse.verse})
        </p>
        <div className="flex justify-center">
          <Button className="!bg-[#17A1FA]" title="Read Full Tafsir" />
        </div>
      </div>
    );
  }

  return <p className="text-center text-gray-600">No verse data available.</p>;
};

export default DailyRandomVerse;

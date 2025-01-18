import { useEffect } from "react";
import Spinner from "./Spinner";
import Button from "./Button";
import { getDailyRandomVerse } from "../redux/slices/dailyRandomVerseSlice";
import { useDispatch, useSelector } from "react-redux";

const DailyRandomVerse = () => {
  const { isLoading, verse, error } = useSelector((state) => state.randomVerse);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the thunk to fetch the verse
    dispatch(getDailyRandomVerse());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (verse && verse.data && verse.data.length > 0) {
    const verseData = verse.data[0];
    return (
      <div>
        <h2 className="text-1xl font-semibold text-center mb-3 mt-3">
          Your Daily Quranic Verse
        </h2>
        <p className="text-2xl text-center arabic-font text-customBlack mb-4">
          {verseData.ar}
        </p>
        <p className="text-center text-gray-700 text-sm mb-4">{verseData.en}</p>
        <p className="text-center font-bold text-gray-800 mb-4">
          (Surah {verseData.chapter}, Verse {verseData.verse})
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

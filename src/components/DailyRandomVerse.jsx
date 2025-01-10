import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { fetchDailyRandomVerse } from "../api";
import Button from "./Button";

const DailyRandomVerse = () => {
  const DAILY_VERSE_KEY = "dailyVerse";
  const VERSE_TIMESTAMP_KEY = "verseTimestamp";

  const [verseData, setVerseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const now = new Date();
    const savedVerse = localStorage.getItem(DAILY_VERSE_KEY);
    const savedTimestamp = localStorage.getItem(VERSE_TIMESTAMP_KEY);

    // Check if saved verse exists and is still valid (within 24 hours)
    if (savedVerse && savedTimestamp) {
      const timestamp = new Date(savedTimestamp);
      const timeDiff = now - timestamp;

      if (timeDiff < 24 * 60 * 60 * 1000) {
        setVerseData(JSON.parse(savedVerse));
        setLoading(false);
        return;
      }
    }

    // Fetch new verse if no valid data exists
    const getDailyVerse = async () => {
      setLoading(true);
      try {
        const result = await fetchDailyRandomVerse();
        if (result.success && result.data.length > 0) {
          const verse = result.data[0];
          setVerseData(verse);

          // Save new verse and timestamp
          localStorage.setItem(DAILY_VERSE_KEY, JSON.stringify(verse));
          localStorage.setItem(VERSE_TIMESTAMP_KEY, now.toISOString());
        } else {
          throw new Error(result.message || "No verse data available.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getDailyVerse();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (verseData) {
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

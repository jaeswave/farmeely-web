import { useState } from "react";

const MyVerses = () => {
  const [selectedVerse, setSelectedVerse] = useState(null);

  const verses = [
    {
      id: 1,
      surah: "Surah Al-Baqarah",
      ayah: "2-3",
      text: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ...",
      translation:
        "And establish prayer and give zakah and bow with those who bow in worship and obedience.",
      tafsir:
        "This verse emphasizes the importance of faith and guidance for the believers.",
    },
    {
      id: 2,
      surah: "Surah Al-Baqarah",
      ayah: "3-4",
      text: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ...",
      translation: "Translation for verse 3-4.",
      tafsir: "Tafsir explanation for verse 3-4.",
    },
    {
      id: 3,
      surah: "Surah Al-Baqarah",
      ayah: "4-5",
      text: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ...",
      translation: "Translation for verse 4-5.",
      tafsir: "Tafsir explanation for verse 4-5.",
    },
  ];

  const handleVerseClick = (verse) => {
    setSelectedVerse(verse);
  };

  const closeModal = () => {
    setSelectedVerse(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">My Verses</h1>

      <div className="mt-6 grid lg:grid-cols-3 gap-4">
        {verses.map((verse) => (
          <div
            key={verse.id}
            onClick={() => handleVerseClick(verse)}
            className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg h-[40vh]"
          >
            <h2 className="text-lg font-semibold">
              {verse.surah}, Ayah {verse.ayah}
            </h2>
            <p className="mt-2 text-customBlack">{verse.text}</p>
            <p className="mt-2 text-sm text-gray-500">Tafsir Summary</p>
          </div>
        ))}
      </div>

      {selectedVerse && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {selectedVerse.surah}, Ayah {selectedVerse.ayah}
            </h2>
            <p className="text-2xl text-gray-800 mb-4">{selectedVerse.text}</p>
            <p className="text-lg text-gray-600 mb-4">
              Translation: {selectedVerse.translation}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Tafsir Explanation: {selectedVerse.tafsir}
            </p>
            <textarea
              placeholder="Your Reflections"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
            ></textarea>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
              Save Reflection
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyVerses;

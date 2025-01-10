import { useState } from "react";

const Bookmarks = () => {
  const [selectedBookmark, setSelectedBookmark] = useState(null);

  const bookmarks = [
    {
      id: 1,
      surah: "Surah Al-Kahf",
      ayah: "10",
      text: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
      translation:
        "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.",
      tafsir:
        "This verse is a supplication for mercy and guidance, showcasing humility and reliance on Allah's wisdom.",
    },
    {
      id: 2,
      surah: "Surah Al-Mulk",
      ayah: "13",
      text: "وَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ",
      translation:
        "And conceal your speech or publicize it; indeed, He is Knowing of that within the breasts.",
      tafsir:
        "This verse emphasizes Allah's knowledge of all things, whether hidden or revealed, highlighting His omniscience.",
    },
    {
      id: 3,
      surah: "Surah Al-Fatiha",
      ayah: "6",
      text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: "Guide us to the straight path.",
      tafsir:
        "A fundamental supplication for guidance towards the righteous path in life and faith.",
    },
  ];

  const handleBookmarkClick = (bookmark) => {
    setSelectedBookmark(bookmark);
  };

  const closeModal = () => {
    setSelectedBookmark(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="flex items-center justify-between pb-4 border-b border-gray-300">
        <h1 className="text-2xl font-semibold">Bookmarks</h1>
        <nav>
          <button className="text-green-500 mx-2">Dashboard</button>
          <button className="text-green-500 mx-2">My Verses</button>
          <button className="text-green-500 mx-2">Bookmarks</button>
          <button className="text-green-500 mx-2">Donate</button>
        </nav>
      </header>

      {/* Bookmark Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark.id}
            onClick={() => handleBookmarkClick(bookmark)}
            className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">
              {bookmark.surah}, Ayah {bookmark.ayah}
            </h2>
            <p className="mt-2 text-gray-600 truncate">{bookmark.text}</p>
            <p className="mt-2 text-sm text-gray-500">Click for more details</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 mx-1 bg-green-500 text-white rounded-lg">
          &lt;
        </button>
        <button className="px-4 py-2 mx-1 bg-green-500 text-white rounded-lg">
          Page 1
        </button>
        <button className="px-4 py-2 mx-1 bg-green-500 text-white rounded-lg">
          &gt;
        </button>
      </div>

      {/* Modal */}
      {selectedBookmark && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {selectedBookmark.surah}, Ayah {selectedBookmark.ayah}
            </h2>
            <p className="text-2xl text-gray-800 mb-4">
              {selectedBookmark.text}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Translation:</strong> {selectedBookmark.translation}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Tafsir Explanation:</strong> {selectedBookmark.tafsir}
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

export default Bookmarks;

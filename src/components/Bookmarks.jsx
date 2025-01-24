import { useState } from "react";
import axios from "axios"; // For making HTTP requests

const Bookmarks = () => {
  const [selectedBookmark, setSelectedBookmark] = useState(null);
  const [bookmarks, setBookmarks] = useState([
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
  ]);

  const handleBookmarkClick = (bookmark) => {
    setSelectedBookmark(bookmark);
  };

  const closeModal = () => {
    setSelectedBookmark(null);
  };

  const handleDelete = async (bookmarkId) => {
    try {
      // Make an API call to delete the bookmark
      await axios.delete(`/api/bookmarks/${bookmarkId}`); // Replace with your actual endpoint

      // Update state by removing the deleted bookmark
      setBookmarks((prevBookmarks) =>
        prevBookmarks.filter((bookmark) => bookmark.id !== bookmarkId)
      );
      alert("Bookmark deleted successfully!");
    } catch (error) {
      console.error("Error deleting bookmark:", error);
      alert("Failed to delete the bookmark. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Your Bookmarks</h1>

      <div className="mt-6 grid lg:grid-cols-3 gap-4">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark.id}
            className="p-4 bg-customGreen bg-opacity-[8%] shadow-md rounded-lg"
          >
            <h2 className="text-lg font-semibold">
              {bookmark.surah}, Ayah {bookmark.ayah}
            </h2>
            <p className="mt-2 text-gray-600 truncate">{bookmark.text}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleBookmarkClick(bookmark)}
                className="text-blue-500 hover:underline"
              >
                View Details
              </button>
              <button
                onClick={() => handleDelete(bookmark.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;

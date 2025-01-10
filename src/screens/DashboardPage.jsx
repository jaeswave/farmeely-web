import Dashboard from "../assets/images/dashboard.png";
import QuickAccessCard from "../components/QuickAccessCard";
import myVerse from "../assets/icons/myVerse.png";
import preference from "../assets/icons/preference.png";
import language from "../assets/icons/language.png";
import tafsir from "../assets/icons/tafsir.png";
import QuranicCompletionPlan from "../components/QuranicCompletionPlan";
import DailyRandomVerse from "../components/DailyRandomVerse";
import { useEffect, useState } from "react";
import { getUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DashboardPage = () => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await getUser(localStorage.getItem("token"));
        console.log(response.data);
        if (response.success === true) {
          setCustomer(response.data);
        }
      } catch (error) {
        if (error.message === "Unauthorized") {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  function calculateSurahProgress(completedSurahs) {
    const totalSurahs = 114;
    return Math.min((completedSurahs / totalSurahs) * 100, 100); // Ensure progress doesn't exceed 100%
  }

  const CompletionProgress = calculateSurahProgress(
    customer?.email_logs?.surah_completed || 0
  );

  console.log(customer.preferences.daily_verse_count);
  console.log(typeof customer.preferences.daily_verse_count);

  return (
    <section className="">
      <div className="mx-auto min-h-screen px- lg:px-4 mt-5">
        <h1 className="text-2xl font-bold">
          Assalamu Alaykum,{" "}
          {customer.surname.charAt(0).toUpperCase() +
            customer.surname.slice(1).toLowerCase()}
          !
        </h1>

        <p className="text-lg mt-1 mb-2">
          Your next Quranic verse is scheduled for{" "}
          <span className="font-bold">
            {customer.preferences?.schedule_time || "00:00"}
          </span>
        </p>

        <div className="grid lg:grid-cols-[1fr_30%] gap-6">
          <div className="">
            <div className="bg-customGreen flex items-center justify-between rounded-3xl text-customWhite">
              <div className="text-center lg:text-start items-center px-5 lg:w-[65%]">
                <p className="font-bold text-[1.5rem] mb-3 ">
                  Progress : Surah Completion
                </p>
                <p className="grid  lg:grid-cols-2 lg:justify-between space-x-10">
                  <span>
                    Verses delivered:{" "}
                    {customer.email_logs?.verse_completed || 0}
                  </span>
                  <span>
                    Surah Completed: {customer.email_logs?.surah_completed || 0}
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
                <img className="w-[80%] h-auto" src={Dashboard} alt="" />
              </div>
            </div>

            <h1 className="text-2xl font-bold mt-4 ml-5 text-center lg:text-start">
              Quick Access
            </h1>
            <div className="grid md:grid-cols-2 mt-4 gap-4">
              <QuickAccessCard
                title="My Verses"
                description="Displays the last received verse (Arabic text) and its translation"
                icon={myVerse}
                bgColor="bg-[#D480512E]"
                buttonBgColor="!bg-[#D48051]"
                buttonText="Read More"
                routePath="/my-verse"
              />
              <QuickAccessCard
                title="Set Preferences"
                description="Update your delivery time, language preference, and more"
                icon={preference}
                bgColor="bg-[#9647FF14]"
                buttonBgColor="!bg-[#9647FF]"
                buttonText="Set Now"
                routePath="/preference"
              />
              <QuickAccessCard
                title="Change Language"
                description="Choose your preferred translation language"
                icon={language}
                bgColor="bg-[#B6E5FF45]"
                buttonBgColor="!bg-[#17A1FA]"
                buttonText="Update"
              />
              <QuickAccessCard
                title="Tafsir Explaination"
                description="Enhanced your understanding of the Quran with Tafsir"
                icon={tafsir}
                bgColor="bg-[#00BE5F14]"
                buttonBgColor="!bg-[#28A745]"
                buttonText="Read More"
              />
            </div>
          </div>
          <div className="bg-[#979B9D29] grid grid-row-2 gap-4 rounded-3xl p-5">
            <div className="bg-[#D4EDD970] rounded-md">
              <QuranicCompletionPlan
                verseCount={customer.preferences?.daily_verse_count  || 0}
                frequency={customer.preferences?.frequency || "daily"}
                verseSent={customer.email_logs?.verse_completed || 0}
              />
            </div>
            <div className="bg-[#B6E5FF61] rounded-md grid place-items-center">
              <DailyRandomVerse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;

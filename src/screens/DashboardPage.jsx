import QuickAccessCard from "../components/QuickAccessCard";
import myVerse from "../assets/icons/myVerse.png";
import language from "../assets/icons/language.png";
import preference from "../assets/icons/preference.png";
import tafsir from "../assets/icons/tafsir.png";
import QuranicCompletionPlan from "../components/QuranicCompletionPlan";
import DailyRandomVerse from "../components/DailyRandomVerse";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerDetails } from "../redux/slices/customerDataSlice";
import SurahCompletion from "../components/SurahCompletion";
import Loader from "../components/Loader";
import { getPreference } from "../redux/slices/preferenceSlice";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.customerData);
  const [preferenceData, setPreferenceData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const Data = async () => {
      const result = await dispatch(
        getCustomerDetails(localStorage.getItem("token"))
      ).unwrap();
      if (result.status === "error") {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    Data();
  }, [dispatch]);

  useEffect(() => {
    const Data = async () => {
      const result = await dispatch(getPreference()).unwrap();
      setPreferenceData(result.data);
    };

    Data();
  }, [dispatch]);

  return (
    <section className="">
      <div className="mx-auto min-h-screen px- lg:px-4 mt-5">
        <div className="text-center lg:text-start">
          {isLoading ? (
            <Loader />
          ) : (
            <h1 className="text-1xl lg:text-2xl font-bold">
              Assalamu Alaykum,
              {Object.keys(data).length > 0
                ? data.data?.surname[0].toUpperCase() +
                  data.data?.surname.slice(1)
                : "Guest"}
              !
            </h1>
          )}

          <p className="text-sm lg:text-lg mt-1 mb-2">
            Your next Quranic verse is scheduled for{" "}
            <span className="font-bold">
              {Object.keys(preferenceData).length > 0
                ? `${preferenceData.schedule_time} ${
                    new Date(preferenceData.emailLogs.next_sending_date)
                      .toISOString()
                      .split("T")[0]
                  }`
                : "00:00"}
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_30%] gap-6">
          <div className="">
            <SurahCompletion data={preferenceData} />

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
                routePath="/my-verses"
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
                routePath="/language"
              />
              <QuickAccessCard
                title="Tafsir Explaination"
                description="Enhanced your understanding of the Quran with Tafsir"
                icon={tafsir}
                bgColor="bg-[#00BE5F14]"
                buttonBgColor="!bg-[#28A745]"
                buttonText="Read More"
                routePath="/tafsir"
              />
            </div>
          </div>
          <div className="bg-[#979B9D29] grid grid-row-2 gap-4 rounded-3xl p-5">
            <div className="bg-[#D4EDD970] rounded-md">
              <QuranicCompletionPlan data={preferenceData} />
            </div>
            <div className="bg-[#B6E5FF61] rounded-md grid place-items-center overflow-scroll h-[20vh]">
              <DailyRandomVerse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;

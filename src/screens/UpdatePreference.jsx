import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import {
  getPreference,
  updateCustomerPreference,
} from "../redux/slices/preferenceSlice";
import Spinner from "../components/Spinner";
import { surahList } from "../data";

const UpdatePreference = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preference, setPreference] = useState(null);
  const { isLoading } = useSelector((state) => state.preference);

  useEffect(() => {
    const fetchPreference = async () => {
      const result = await dispatch(getPreference()).unwrap();
      if (result.status === "error") {
        navigate("/login");
      }
      if (result.status === "success") {
        setPreference(result.data);
        console.log(result.data);
      } else {
        toast.error("Failed to load preferences.");
      }
    };
    fetchPreference();
  }, [dispatch]);

  if (!preference) {
    return <Spinner />;
  }

  const handleSubmit = async (values) => {
    console.log("valuesssssss", values);

    const result = await dispatch(updateCustomerPreference(values)).unwrap();
    if (result.status === "success") {
      toast.success(result.message);
      navigate("/dashboard");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="px-8 py-6">
      <h2 className="text-3xl font-bold text-center">
        Update Your Preferences
      </h2>
      <p className="text-center text-lg mb-2">
        Modify your Quranic verse delivery preferences.
      </p>
      <div className="mx-auto px-10 py-10 rounded-lg h-[80%] bg-[#E4E3E3]">
        <Formik
          initialValues={{
            frequency: preference.frequency || "",
            timezone: preference.timezone || "",
            schedule_time: preference.schedule_time || "",
            start_surah: preference.start_surah || "",
            start_verse: preference.start_verse || "",
            is_language: preference.is_language || "",
            daily_verse_count: preference.daily_verse_count || "",
            start_date:
              new Date(preference.start_date).toISOString().split("T")[0] || "",
          }}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form>
              <div className="grid md:grid-cols-2 gap-6 px-3 md:px-10">
                {/* Delivery Frequency */}
                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    Delivery Frequency
                  </label>
                  <Field
                    as="select"
                    name="frequency"
                    className="form-select w-full border border-customGreen rounded p-2"
                  >
                    <option value="">Select Frequency</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </Field>
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    Time Zone
                  </label>
                  <Field
                    as="select"
                    name="timezone"
                    className="form-select w-full border border-customGreen rounded p-2"
                  >
                    <option value="">Select Your Time Zone</option>
                    <option value="GMT +1">GMT +1</option>
                  </Field>
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    Delivery Time
                  </label>
                  <Field
                    type="time"
                    name="schedule_time"
                    className="form-input w-full border border-customGreen rounded p-2"
                  />
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    Start Surah
                  </label>
                  <Field
                    as="select"
                    name="start_surah"
                    className="form-select w-full border border-gray-300 rounded p-2"
                  >
                    <option value="">Select Surah to Start From</option>
                    {surahList.map((surah) => (
                      <option key={surah.number} value={surah.number}>
                        {`Surah ${surah.number}: ${surah.name}`}
                      </option>
                    ))}
                  </Field>
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    Start Verse
                  </label>
                  <Field
                    type="number"
                    name="start_verse"
                    className="form-input w-full border border-gray-300 rounded p-2"
                  />
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    Preferred Language
                  </label>
                  <Field
                    as="select"
                    name="is_language"
                    className="form-select w-full border border-gray-300 rounded p-2"
                  >
                    <option value="">Select Language</option>
                    <option value="en">en</option>
                  </Field>
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    Verse Count
                  </label>
                  <Field
                    type="number"
                    name="daily_verse_count"
                    className="form-input w-full border border-gray-300 rounded p-2"
                  />
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    Start Date
                  </label>
                  <Field
                    type="date"
                    name="start_date"
                    className="form-input w-full border border-gray-300 rounded p-2"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="!w-1/2"
                  title={isLoading ? "Updating..." : "Update Preferences"}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdatePreference;

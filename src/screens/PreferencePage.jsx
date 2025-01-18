import { Formik, Form, Field } from "formik";
import PreferenceValidation from "../validations/PreferenceValidation";
import { surahList } from "../data";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createCustomerPreference } from "../redux/slices/preferenceSlice";

const PreferenceForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.preference);
  const navigate = useNavigate();
  const initialValues = {
    frequency: "",
    timezone: "",
    schedule_time: "",
    start_surah: "",
    start_verse: "",
    is_language: "",
    daily_verse_count: "",
    start_date: "",
  };

  const handleSubmit = async (values) => {
    const result = await dispatch(createCustomerPreference(values)).unwrap();
    console.log(values, result);

    if (result.status === "error") navigate("/login");
    else if (result.status === "success") {
      toast.success(result.message);
      navigate("/dashboard");
    } else {
      toast.error(result.message);
      navigate("/dashboard");
    }
  };

  return (
    <div className="px-8 py-6">
      <h2 className="text-3xl font-bold text-center">Set Your Preferences</h2>
      <p className="text-center text-lg mb-2">
        Customize your Quranic verse delivery to suit your schedule and
        preferences
      </p>
      <div className="mx-auto px-10 py-10 rounded-lg h-[80%] bg-[#E4E3E3]">
        <Formik
          initialValues={initialValues}
          validationSchema={PreferenceValidation}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form>
              <div className="grid md:grid-cols-2 gap-6 px-3 md:px-10">
                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    1. Delivery Frequency Section
                  </label>
                  <label className="text-sm  mb-2 block">
                    How often would you like to receive verses?
                  </label>

                  <div className="flex gap-4">
                    {["Daily", "Weekly", "Monthly"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <Field
                          type="radio"
                          name="frequency"
                          value={option.toLowerCase()}
                          className="form-radio"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {errors.frequency && touched.frequency && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.frequency}
                    </p>
                  )}
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    2. Time Zone
                  </label>
                  <label className="text-sm  mb-2 block">
                    Select your preferred time zone.
                  </label>
                  <Field
                    as="select"
                    name="timezone"
                    className="form-select w-full border border-customGreen rounded p-2"
                  >
                    <option value="">Select Your Time Zone</option>
                    <option value="GMT +1">GMT +1</option>
                  </Field>
                  {errors.timezone && touched.timezone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.timezone}
                    </p>
                  )}
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    3. Delivery Time Section
                  </label>
                  <label className="text-sm  mb-2 block">
                    When would you like to receive verses?
                  </label>
                  <Field
                    type="time"
                    name="schedule_time"
                    className="form-input w-full border border-customGreen rounded p-2"
                  />
                  {errors.schedule_time && touched.schedule_time && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.schedule_time}
                    </p>
                  )}
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    4. Start Surah
                  </label>
                  <label className="text-sm  mb-2 block">
                    Which surah would you like to start from?
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
                  {errors.start_surah && touched.start_surah && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.start_surah}
                    </p>
                  )}
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    5. Start Verse
                  </label>
                  <label className="text-sm  mb-2 block">
                    Which verse would you like to start from?
                  </label>
                  <Field
                    type="number"
                    name="start_verse"
                    className=" w-full border border-gray-300 rounded p-2"
                  />
                  {errors.start_verse && touched.start_verse && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.start_verse}
                    </p>
                  )}
                </div>

                {/* Language */}
                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    6. Preferred Language
                  </label>
                  <label className="text-sm  mb-2 block">
                    Preferred language for translation.
                  </label>
                  <Field
                    as="select"
                    name="is_language"
                    className="form-select w-full border border-gray-300 rounded p-2"
                  >
                    <option value="">Preferred Language for Translation</option>
                    <option value="en">en</option>
                  </Field>
                  {errors.language && touched.language && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.language}
                    </p>
                  )}
                </div>

                <div className="col-span-1">
                  <label className="text-base font-medium block">
                    7. Verse Length Section
                  </label>
                  <label className="text-sm mb-2  block">
                    How many verses would you like?
                  </label>

                  <div className="flex items-center gap-5">
                    <Field
                      type="range"
                      name="daily_verse_count"
                      min="1"
                      max="20"
                      className="w-[80%]"
                    />
                    <span>{values.daily_verse_count} Verses</span>
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="text-sm font-medium  block">
                    8. Start Date
                  </label>
                  <label className="text-sm  mb-2 block">
                    When would you like to start receiving verses?
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
                  title={isLoading ? "Submitting..." : "Save Preferences"}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PreferenceForm;

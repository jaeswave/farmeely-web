import { Formik, Form, Field } from "formik";
import PreferenceValidation from "../validations/PreferenceValidation";

const PreferencesPage = () => {
  const initialValues = {
    frequency: "daily",
    timeZone: "GMT +1",
    deliveryTime: "7:00 AM",
    startSurah: "1",
    startVerse: "1",
    language: "en",
    verseLength: 2,
  };

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setValues({ ...values, [name]: value });
  // }

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    alert("Preferences saved successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Set Your Preferences</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={PreferenceValidation}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <Form>
            {/* Delivery Frequency Section */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Delivery Frequency
              </label>
              <div className="flex gap-4">
                {["Daily", "Weekly", "Custom Schedule"].map((option) => (
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
            </div>

            {/* Time Zone Section */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Time Zone
              </label>
              <Field
                as="select"
                name="timeZone"
                className="w-full p-2 border rounded"
              >
                <option>GMT +1</option>
                <option>GMT +2</option>
                <option>GMT -5</option>
              </Field>
            </div>

            {/* Delivery Time Section */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Delivery Time
              </label>
              <Field
                as="select"
                name="deliveryTime"
                className="w-full p-2 border rounded"
              >
                <option>7:00 AM</option>
                <option>12:00 PM</option>
                <option>6:00 PM</option>
              </Field>
            </div>

            {/* Start Surah Section */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Start Surah
              </label>
              <Field
                as="select"
                name="startSurah"
                className="w-full p-2 border rounded"
              >
                <option>Surah 1: Al-Fatihah</option>
                <option>Surah 2: Al-Baqarah</option>
                <option>Surah 3: Aal-E-Imran</option>
              </Field>
            </div>

            {/* Start Verse Section */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Start Verse
              </label>
              <Field
                type="number"
                name="startVerse"
                className="w-full p-2 border rounded"
                min="1"
              />
              {errors.startVerse && touched.startVerse && (
                <div className="text-red-500 text-sm">{errors.startVerse}</div>
              )}
            </div>

            {/* Language Section */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Language</label>
              <Field
                as="select"
                name="language"
                className="w-full p-2 border rounded"
              >
                <option>English</option>
                <option>Arabic</option>
                <option>Urdu</option>
              </Field>
            </div>

            {/* Verse Length Section */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Verse Length
              </label>
              <div className="flex items-center gap-2">
                <Field
                  type="range"
                  name="verseLength"
                  min="1"
                  max="10"
                  className="w-full"
                />
                <span>{values.verseLength} Verses</span>
              </div>
              {errors.verseLength && touched.verseLength && (
                <div className="text-red-500 text-sm">{errors.verseLength}</div>
              )}
            </div>

            {/* Tafsir Explanation */}
            <div className="mb-4 flex items-center gap-2">
              <Field
                type="checkbox"
                name="tafsirExplanation"
                className="form-checkbox"
              />
              <label className="text-sm font-medium">Tafsir Explanation</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Save Preferences
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PreferencesPage;

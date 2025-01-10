import * as Yup from "yup";

const preferenceValidation = Yup.object().shape({
  daily_verse_count: Yup.number()
    .integer("Daily verse count must be an integer")
    .positive("Daily verse count must be positive")
    .required("Daily verse count is required"),

  start_surah: Yup.number()
    .integer("Start Surah must be an integer")
    .positive("Start Surah must be positive")
    .required("Start Surah is required"),

  start_verse: Yup.number()
    .integer("Start Verse must be an integer")
    .positive("Start Verse must be positive")
    .required("Start Verse is required"),

  is_language: Yup.string().optional(), // Optional field

  timezone: Yup.string()
    .max(100, "Timezone must not exceed 100 characters")
    .required("Timezone is required"),

  frequency: Yup.string()
    .oneOf(
      ["daily", "weekly", "monthly"],
      "Frequency must be one of: daily, weekly, monthly"
    )
    .required("Frequency is required"),

  schedule_time: Yup.string()
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Schedule time must be in HH:mm format"
    )
    .required("Schedule time is required"),

  start_date: Yup.date().required("Start date is required"),
});

export default preferenceValidation;

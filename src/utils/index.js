export function handleScroll(id) {
  const section = document.getElementById(id);
  section && section.scrollIntoView({ behavior: "smooth" });
}


export const convertTo24HourFormat = (time12hr) => {
  // Match the 12-hour format with AM/PM
  const regex = /^(0[1-9]|1[0-2]):([0-5][0-9])\s([APap][Mm])$/;
  const match = time12hr.trim().match(regex);
  let [ , hours, minutes, modifier] = match;
  hours = parseInt(hours, 10);
  if (modifier.toUpperCase() === "AM" && hours === 12) {
    hours = 0; 
  } else if (modifier.toUpperCase() === "PM" && hours < 12) {
    hours += 12; 
  }
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}:00`;
};





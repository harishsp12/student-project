/* =========================
   CAPITALIZE FIRST LETTER
========================= */
export const capitalizeFirst = (value) => {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
};

/* =========================
   EMAIL VALIDATION
   only @gmail.com
========================= */
export const validateEmail = (email) => {
  if (!email) return false;
  return /^[a-z0-9._%+-]+@gmail\.com$/.test(
    email.trim().toLowerCase()
  );
};

/* =========================
   PHONE VALIDATION
   exactly 10 digits
========================= */
export const validatePhone = (phone) => {
  if (!phone) return false;
  return /^[0-9]{10}$/.test(phone);
};

/* =========================
   AADHAR VALIDATION
   exactly 12 digits
========================= */
export const validateAadhar = (aadhar) => {
  if (!aadhar) return false;
  return /^[0-9]{12}$/.test(aadhar);
};

/* =========================
   EMPTY FIELD CHECK
========================= */
export const validateEmptyFields = (data) => {
  for (let key in data) {
    if (
      data[key] === "" ||
      data[key] === null ||
      data[key] === undefined
    ) {
      return key;
    }
  }
  return null;
};

/* =========================
   DOB → PASSWORD
   dd-mm-yyyy
========================= */
export const dobToPassword = (dob) => {
  if (!dob) return "";
  const d = new Date(dob);
  if (isNaN(d.getTime())) return "";

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
};

/* =========================
   EMAIL VALIDATION
   only @gmail.com allowed
========================= */
export const validateEmail = (email) => {
  if (!email) return false;
  const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return regex.test(email);
};

/* =========================
   PHONE VALIDATION
   exactly 10 digits
========================= */
export const validatePhone = (phone) => {
  if (!phone) return false;
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
};

/* =========================
   AADHAR VALIDATION
   exactly 12 digits
========================= */
export const validateAadhar = (aadhar) => {
  if (!aadhar) return false;
  const regex = /^[0-9]{12}$/;
  return regex.test(aadhar);
};

/* =========================
   EMPTY FIELD VALIDATION
========================= */
export const validateEmptyFields = (data) => {
  for (let key in data) {
    if (
      data[key] === "" ||
      data[key] === null ||
      data[key] === undefined
    ) {
      return key; // return empty field name
    }
  }
  return null;
};

/* =========================
   DOB → PASSWORD
   dd-mm-yyyy format
========================= */
export const dobToPassword = (dob) => {
  if (!dob) return "";
  const d = new Date(dob);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

/* =========================
   PASSWORD CHECK (LOGIN)
========================= */
export const validatePassword = (password) => {
  if (!password) return false;
  return password.length >= 4;
};

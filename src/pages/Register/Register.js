import { useState } from "react";
import api from "../../api/api";
import toast from "react-hot-toast";
import "../../styles/Register.css";
import { Link } from "react-router-dom";

export default function Register(){

const [formData,setFormData] = useState({
childName:"",
fatherName:"",
motherName:"",
mobileNo:"",
dob:"",
age:"",
aadharNo:"",
address:""
});


// ⭐ First Letter Capital Function
const capitalizeFirstLetter = (value)=>{
if(!value) return value;
return value.charAt(0).toUpperCase() + value.slice(1);
};


// ⭐ DOB → Age Calculate
const calculateAge = (dob)=>{
const today = new Date();
const birthDate = new Date(dob);

let age = today.getFullYear() - birthDate.getFullYear();

const month = today.getMonth() - birthDate.getMonth();

if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
age--;
}

return age;
};


// ⭐ Handle Input Change
const handleChange = (e)=>{

const {name,value} = e.target;

let updatedValue = value;

// ⭐ Apply Capitalization only for name fields
if(name === "childName" || name === "fatherName" || name === "motherName"){
updatedValue = capitalizeFirstLetter(value);
}

let updatedForm = {
...formData,
[name]: updatedValue
};

// ⭐ Auto Age
if(name === "dob"){
updatedForm.age = calculateAge(value);
}

setFormData(updatedForm);

};


// ⭐ Submit
const handleSubmit = async(e)=>{
e.preventDefault();

try{

await api.post("/register/save", formData);

toast.success("Register Success");

setFormData({
childName:"",
fatherName:"",
motherName:"",
mobileNo:"",
dob:"",
age:"",
aadharNo:"",
address:""
});

}catch(error){

toast.error(error.response?.data || "Register Failed");

}

};


return(

<div className="register-container">

<div className="register-card">

<h2>Student Register</h2>
<div className="back-wrapper">
  <Link to="/" className="back">Home</Link>
</div>
<form onSubmit={handleSubmit}>

<input
name="childName"
placeholder="Child Name"
value={formData.childName}
onChange={handleChange}
required
/>

<input
name="fatherName"
placeholder="Father Name"
value={formData.fatherName}
onChange={handleChange}
required
/>

<input
name="motherName"
placeholder="Mother Name"
value={formData.motherName}
onChange={handleChange}
required
/>

<input
name="mobileNo"
placeholder="Mobile Number"
value={formData.mobileNo}
onChange={handleChange}
required
/>

<input
type="date"
name="dob"
value={formData.dob}
onChange={handleChange}
required
/>

<input
name="age"
placeholder="Age"
value={formData.age}
readOnly
/>

<input
name="aadharNo"
placeholder="Aadhar Number"
value={formData.aadharNo}
onChange={handleChange}
required
/>

<textarea
name="address"
placeholder="Address"
value={formData.address}
onChange={handleChange}
/>

<button type="submit">Submit</button>

</form>

</div>

</div>

);

}
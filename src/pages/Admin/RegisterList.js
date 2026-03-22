import { useEffect,useState } from "react";
import api from "../../api/api";
import toast from "react-hot-toast";
import "../../styles/RegisterList.css";

export default function RegisterList(){

const [data,setData] = useState([]);

useEffect(()=>{
loadData();
},[]);

const loadData = async()=>{

const res = await api.get("/register/all");

setData(res.data);

};

const deleteData = async(id)=>{

if(!window.confirm("Delete this record?")) return;

await api.delete(`/register/delete/${id}`);

toast.success("Deleted Successfully");

loadData();

};

return(

<div className="table-container">

<h2>Register Enquiries</h2>

<table>

<thead>

<tr>

<th>ID</th>
<th>Child</th>
<th>Father</th>
<th>Mother</th>
<th>Mobile</th>
<th>DOB</th>
<th>Age</th>
<th>Aadhar</th>
<th>Address</th>
<th>Action</th>

</tr>

</thead>

<tbody>

{data.map((d)=>(

<tr key={d.id}>

<td>{d.id}</td>
<td>{d.childName}</td>
<td>{d.fatherName}</td>
<td>{d.motherName}</td>
<td>{d.mobileNo}</td>
<td>{d.dob}</td>
<td>{d.age}</td>
<td>{d.aadharNo}</td>
<td>{d.address}</td>

<td>

<button
className="delete-btn"
onClick={()=>deleteData(d.id)}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}
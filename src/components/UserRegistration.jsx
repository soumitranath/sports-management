
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

// const url =`https://octavenine.com/projects/api/User/user_registration`
const url = "https://www.rnsa.in/api/public/student"
const UserRegistration = () => {
    const initialFormData = Object.freeze({
        name: '',
        address: '',
        mobile_no: '',
        altNumber: '',
        schoolName: '',
        standard: '',
        dateOfBirth: '',
        previousActivities: '',
        inSports: '',
        previousActivitiesDetails: '',
        selectSports: '',
        healthInjuries: '',
        medicalHistory: '',
        batchTiming: '',
        trainingPeriod: '',
        jerseySize: ''
    })
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleChangeCheck = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };
    const formHandler = (e) => {
        e.preventDefault();
        axios.post(url, formData)
            .then(res => {
                // console.log(res);
                console.log(res.data);
                if(res.data.status=="error"){
                    toast.error(res.data.message)
                }
            }).catch((err)=>console.log(err))
    }
    return (
        <div className="container_layout">
            <h4 className="page_title">User Registration Form</h4>
            <div className="content_container">
                <form onSubmit={formHandler}>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Enter Address" name="address" onChange={handleChange} />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Mobile No</label>
                                        <input type="number" className="form-control" id="mobile_no" placeholder="Enter Mobile No" name="mobile_no" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Alternate Mobile No</label>
                                        <input type="number" className="form-control" id="altNumber" placeholder="Alternate Mobile No" name="altNumber" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>School Name</label>
                                <input type="text" className="form-control" id="name" placeholder="School Name" name="schoolName" onChange={handleChange} />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Standard</label>
                                        <input type="text" className="form-control" id="standard" placeholder="Standard" name="standard" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="previousActivities" name="previousActivities" onChange={handleChangeCheck} />
                                        <label className="form-check-label" htmlFor="previousActivities">Previous Activities?</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="inSports" name="inSports" onChange={handleChangeCheck} />
                                        <label className="form-check-label" htmlFor="inSports">In Sports?</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Enter Previous Activities Details</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter Details" name="previousActivitiesDetails" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Joining Date</label>
                                        <input type="date" className="form-control" id="JoiningDate" name="joiningDate" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <label>Select Interested Sports</label>
                            <div className="form-group" style={{ marginTop: '12px' }}>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="selectSports" value="Football" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Football</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="selectSports" value="Basketball" onChange={handleChange} />
                                    <label className="form-check-label">Basketball</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="selectSports" value="Cricket" onChange={handleChange} />
                                    <label className="form-check-label">Cricket</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="selectSports" value="Badminton" onChange={handleChange} />
                                    <label className="form-check-label">Badminton</label>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Previous Health Injuries (if any)</label>
                                <input type="text" className="form-control" id="healthInjuries" placeholder="Enter Details" name="healthInjuries" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Medical History (if any)</label>
                                <input type="text" className="form-control" id="medicalHistory" placeholder="Enter Details" name="medicalHistory" onChange={handleChange} />
                            </div>
                            <label>Batch Timing</label>
                            <div className="form-group" style={{ marginTop: '12px' }}>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="batchTiming" id="Morning" value="Morning" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Morning">Morning</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="batchTiming" id="Evening" value="Evening" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Evening">Evening</label>
                                </div>
                            </div>
                            <label>Training Period</label>
                            <div className="form-group" style={{ marginTop: '12px' }}>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="trainingPeriod" id="" value="3 Month" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio1">3 Month</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="trainingPeriod" id="" value="6 Month" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">6 Month</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="trainingPeriod" id="" value="Yearly" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Yearly</label>
                                </div>
                            </div>
                            <label>Jersey Size</label>
                            <div className="form-group" style={{ marginTop: '12px' }}>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="jerseySize" id="" value="XS" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio1">XS</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="jerseySize" id="" value="S" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">S</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="jerseySize" id="" value="M" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">M</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="jerseySize" id="" value="L" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">L</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="jerseySize" id="" value="XL" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">XL</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Amount to be Paid(Total)</label>
                                        <input type="number" className="form-control" id="principalAmount" placeholder="Amount to be Paid" name="principalAmount" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Paid Amount</label>
                                        <input type="number" className="form-control" id="paidAmount" placeholder="Paid Amount" name="paidAmount" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Next EMI Date</label>
                                        <input type="date" className="form-control" id="nextEMIDate" name="nextEMIDate" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserRegistration;
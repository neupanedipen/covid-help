import {useState} from 'react';

const HelpForm = ({helpDesc}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [value, setValue] = useState();
    const [details, setDetails] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        console.log({
            name,
            email,
            phoneNum,
            value,
            details
        })        
    }
    return (
            <form className="container my-3">
                <div className="form-group my-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter Phone Number" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="getHelpFor">{helpDesc}</label>
                    <select className="form-select" value={value}
      onChange={e => setValue(e.currentTarget.value)}>
                        <option defaultValue>Select one of service</option>
                        <option value="oxygen">Oxygen</option>
                        <option value="bed">Hospital Bed</option>
                        <option value="ambulance">Ambulance</option>
                        <option value="medicine">Medicine</option>
                        <option value="plasma">Plasma</option>
                    </select>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="details">Other Details</label>
                    <textarea className="form-control" id="details" rows="4" value={details} onChange={e => setDetails(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
    )
}

export default HelpForm;
const HelpForm = ({helpDesc}) => {
    return (
            <form className="container my-3">
                <div className="form-group my-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                </div>
                <div className="form-group my-3">
                    <label for="fullName">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name"/>
                </div>
                <div className="form-group my-3">
                    <label for="phoneNumber">Phone Number</label>
                    <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter Phone Number"/>
                </div>
                <div className="form-group my-3">
                    <label for="getHelpFor">{helpDesc}</label>
                    <select className="form-select">
                        <option selected>Select one of service</option>
                        <option value="oxygen">Oxygen</option>
                        <option value="bed">Hospital Bed</option>
                        <option value="ambulance">Ambulance</option>
                        <option value="medicine">Medicine</option>
                        <option value="plasma">Plasma</option>
                    </select>
                </div>
                <div className="form-group my-3">
                    <label for="details">Other Details</label>
                    <textarea class="form-control" id="details" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    )
}

export default HelpForm;
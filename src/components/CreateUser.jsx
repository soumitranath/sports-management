
import BannerImg from '../assets/images/badminton.png'

function CreateUser() {


    return (
        <div className="container_layout">
            <h4 className="page_title">Create User</h4>
            <div className="content_container">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Enter moblie Number</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Enter Email Id</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label>Select User Role</label>
                        <div className="form-group" style={{ marginTop: '12px' }}>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="selectSports" value="SuperAdmin" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Super Admin</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="selectSports" value="Admin" />
                                <label className="form-check-label">Admin</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="selectSports" value="SubAdmin" />
                                <label className="form-check-label">Sub Admin</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="selectSports" value="Finance" />
                                <label className="form-check-label">Finance</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="selectSports" value="User" />
                                <label className="form-check-label">User</label>
                            </div>
                        </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <button type="button" className="btn btn-primary" >Click here to proceed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img src={BannerImg} className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;

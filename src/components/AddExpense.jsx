
import BannerImg from '../assets/images/badminton.png'

function AddExpense() {


    return (
        <div className="container_layout">
            <h4 className="page_title">Add Expense</h4>
            <div className="content_container">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Enter Expense Amount</label>
                                    <input type="number" className="form-control" id="name" placeholder="Enter name" name="name" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Expense Reason</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label>Select Date of Expense</label>
                            <input type="date" className="form-control" id="JoiningDate" name="joiningDate" />
                            </div>
                        </div>
                        <br/>
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

export default AddExpense;

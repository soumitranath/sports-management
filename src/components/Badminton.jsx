import React, { useState } from 'react';
import BannerImg from '../assets/images/badminton.png'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function Badminton() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className="container_layout">


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='h6'>Add User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                                        <label>Mobile No</label>
                                        <input type="number" className="form-control" id="name" placeholder="Enter Mobile No" />
                                    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Click to Proceed
          </Button>
        </Modal.Footer>
      </Modal>



            <h4 className="page_title">Book Badminton Court</h4>
            <div className="content_container">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Select Date</label>
                                    <input type="date" className="form-control" id="name" value={new Date(new Date()).toISOString().split('T')[0]} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group float-sm-end">
                                    <select className="form-select" aria-label="Default select example" style={{ marginTop: '22px' }}>
                                        <option selected>Select court..</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ul className="slot_time">
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="cb" id="cb" />
                                        <label htmlFor="cb"><p>6 AM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="cb" id="cb" />
                                        <label htmlFor="cb"><p>7 AM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="cb" id="cb" />
                                        <label htmlFor="cb"><p>8 AM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="cb" id="cb" />
                                        <label htmlFor="cb"><p>9 AM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="cb" id="cb" />
                                        <label htmlFor="cb"><p>10 AM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="cb" id="cb" />
                                        <label htmlFor="cb"><p>11 AM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="cb" id="cb" />
                                        <label htmlFor="cb"><p>12 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="cb" id="cb" />
                                        <label htmlFor="cb"><p>01 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="cb" id="cb" />
                                        <label htmlFor="cb"><p>02 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="03PM" id="03PM" />
                                        <label htmlFor="03PM"><p>03 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="04PM" id="04PM" disabled />
                                        <label htmlFor="cb"><p>04 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="05PM" id="05PM" disabled />
                                        <label htmlFor="05PM"><p>05 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="06PM" id="06PM" disabled />
                                        <label htmlFor="06PM"><p>06 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="07PM" id="07PM" disabled />
                                        <label htmlFor="07PM"><p>07 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="08PM" id="08PM" />
                                        <label htmlFor="08PM"><p>08 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="09PM" id="09PM" />
                                        <label htmlFor="09PM"><p>09 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="10PM" id="10PM" />
                                        <label htmlFor="10PM"><p>10 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="hidden_checkbox" name="11PM" id="11PM" />
                                        <label htmlFor="11PM"><p>11 PM</p>
                                            <p>60 min</p>
                                            <p>Rs. 100</p></label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group float-sm-end">
                                    <button type="button" className="btn btn-primary"  onClick={handleShow}>Click here to proceed</button>
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

export default Badminton;

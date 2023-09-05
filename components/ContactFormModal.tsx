import { sendContactForm } from "@/lib/api";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function FormModal({ show, handleClose }) {
  const initValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    company: "",
    website: "",
  };

  const [userData, setUserData] = useState(initValues);

  const handleUserData = (e) =>{
    setUserData(() => ({
      ...userData,
      [e.target.name] : e.target.value
    }))
  }
  
  //state for handle check box disabled or not
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const handleChecked = (e) => {
    if (e.target.value === "yes") {
      setCheck2(true);
    }
    if (e.target.checked === false) {
      setCheck2(false);
    }
    if (e.target.value === "no") {
      setCheck1(true);
    }
    if (e.target.checked === false) {
      setCheck1(false);
    }

    // setting the value of checked inside the userData state
    handleUserData(e);
  };

  // form submission function
  const handleSubmit = async () =>{
    await sendContactForm(userData);
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Get Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-base bottom-border--rounded">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <form
                  action="#"
                  className="contact-form-modal p-5 py-md-10 rounded-4"
                >
                  <div className="row g-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control rounded-pill contact-form-modal__input"
                        placeholder="First Name"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleUserData}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control contact-form-modal__input rounded-pill"
                        placeholder="Last Name"
                        value={userData.lastName}
                        name="lastName"
                        onChange={handleUserData}
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="email"
                        className="form-control contact-form-modal__input rounded-pill"
                        placeholder="Email*"
                        value={userData.email}
                        name="email"
                        onChange={handleUserData}
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control contact-form-modal__input rounded-pill"
                        placeholder="Company Name"
                        value={userData.company}
                        name="company"
                        onChange={handleUserData}
                      />
                    </div>
                    <div className="col-12">
                      <div className="contact-form-1__select yellow-input rounded-pill">
                        <select
                          value={userData.subject}
                          name="subject"
                          className="form-select rounded-pill"
                          onChange={handleUserData}
                        >
                          <option>Select Services</option>
                          <option value="1">Web Development</option>
                          <option value="2">Digital Marketing</option>
                          <option value="3">Cloud Development</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <label
                        className="form-check-label"
                        htmlFor="accept-terms"
                      >
                        Do You Have Website ?
                      </label>
                      <div className="d-flex">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="yes"
                            id="accept-terms"
                            name='website'
                            disabled={check1}
                            onChange={(e) => handleChecked(e)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="accept-terms"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check mx-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="no"
                            id="accept-terms1"
                            disabled={check2}
                            onChange={(e) => handleChecked(e)}
                            name='website'
                          />
                          <label
                            className="form-check-label"
                            htmlFor="accept-terms1"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="text-center mt-6">
                        <button
                          style={{
                            background: "#5d43fc",
                            padding: "0.8rem 6rem",
                          }}
                          className="bttn bttn--warning bttn-md bttn-pill fw-md"
                          onClick={()=>{handleSubmit()}}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormModal;

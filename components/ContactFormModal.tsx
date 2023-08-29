// import { useState } from 'react';
import Modal from "react-bootstrap/Modal";

function FormModal({ show, handleClose }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header  closeButton>
          <Modal.Title >Get Quote</Modal.Title>
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
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        className="form-control contact-form-modal__input rounded-pill"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="email"
                        className="form-control contact-form-modal__input rounded-pill"
                        placeholder="Email*"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control contact-form-modal__input rounded-pill"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="col-12">
                      <div className="contact-form-1__select yellow-input rounded-pill">
                        <select className="form-select rounded-pill">
                          <option>Select Services</option>
                          <option value="1">Web Development</option>
                          <option value="2">Digital Marketing</option>
                          <option value="3">Cloud Development</option>
                        </select>
                      </div>
                    </div>
                    {/* <div className="col-12">
                      <textarea
                            className="form-control contact-form-1__input rounded-8"
                            rows={3}
                            placeholder="Let us know"></textarea>
                    </div> */}
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
                            value=""
                            id="accept-terms"
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
                            value=""
                            id="accept-terms1"
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
                        <button style={{"background":"#5d43fc","padding":"0.8rem 6rem"}} className="bttn bttn--warning bttn-md bttn-pill fw-md">
                          {" "}
                          Submit{" "}
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

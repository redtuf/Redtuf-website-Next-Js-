// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FormModal({show,handleClose}) {


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
        <Modal.Body>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <form
                        action="#"
                        className="contact-form-1 bg-base p-5 py-md-10 rounded-4">
                        <div className="row g-4">
                        <div className="col-md-6">
                            <input
                            type="text"
                            className="form-control rounded-pill contact-form-1__input"
                            placeholder="Name*"
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                            type="number"
                            className="form-control contact-form-1__input rounded-pill"
                            placeholder="Phone*"
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                            type="email"
                            className="form-control contact-form-1__input rounded-pill"
                            placeholder="Email*"
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                            type="text"
                            className="form-control contact-form-1__input rounded-pill"
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
                        <div className="col-12">
                            <textarea
                            className="form-control contact-form-1__input rounded-8"
                            rows={3}
                            placeholder="Let us know"></textarea>
                        </div>
                        
                        <div className="col-12">
                            <div className="text-center mt-6">
                            <button className="bttn bttn--warning bttn-md bttn-pill fw-md">
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
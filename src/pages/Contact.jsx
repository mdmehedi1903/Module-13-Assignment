import React from 'react';

const Contact = () => {
    return (
            <div className="container mt-4">
              <div className="row">
                <div className="col-md-4 contact-sidebar">
                  <h3>Contact Information</h3>
                  <p>Email: example@email.com</p>
                  <p>Phone: +1234567890</p>
                </div>
                <div className="col-md-8 contact-form">
                  <h3>Contact Us</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                    <textarea className="form-control"/>
                    <br/>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <br/><br/>
            </div>
          );
};

export default Contact;
import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var country = this.props.data.address.country;
      var city = this.props.data.address.city;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="align-center">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <aside className="twelve align-center footer-widgets">
            <div className="widget widget_contact">
              <div className="align-center contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city}, {country}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;

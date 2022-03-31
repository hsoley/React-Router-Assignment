// modules
import React from 'react';
// style
import '../assets/css/style.css';


class ContactDetail extends React.Component {
   

    render() {
        return (
            <div className="contactItem">
                <h3>{this.props.title}</h3>
                <h5>{this.props.address}</h5>
                <h4>Telephone: { this.props.phone}</h4>
                <hr/>
            </div>
        );
    }

}

export default ContactDetail;
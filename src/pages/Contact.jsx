// modules
import React from 'react';
// style
import '../assets/css/style.css';
// components used
import ImageDisplay from '../components/ImageDisplay';
import ContactDetail from '../components/ContactDetail'


class Contact extends React.Component {


    render() {
        return (
            <main className="mainContainer">
                <h2 className="pageTitle">Contact</h2>
                <div className="subContainer">
                    {/* address taken from https://www.dufferinconstruction.com/contact-us/ */}
                    <section className="contentTxtWrapper addressBox">
                        <ContactDetail title="Barrie Asphalt Plant" address="27 Napoleon Road, Barrie, ON, Canada L4M 0G8" phone="705-726-8061" />
                        <ContactDetail title="Hamilton Asphalt Plant" address="475 Nebo Road, Hamilton, ON, Canada L0R 1P0" phone="905-383-2114" />
                        <ContactDetail title="Maintenance Shop and Office" address="731 Third Line, Oakville, ON, Canada L6L 4B2" phone="905-827-5750" />
                        <ContactDetail title="Royel Paving" address="3664 Highway 35, Lindsay, ON, Canada K9V 4R1" phone="705-324-6773" />
                        <ContactDetail title="Head Office" address="585 Michigan Drive, Suite 1, Oakville, ON, Canada L6L 0G1" phone="905-842-2741" />
                        <ContactDetail title="London Office" address="2200 Jetstream Road, London, ON, Canada N6A 4V7" phone="519-453-1500" />
                        <ContactDetail title="Cambridge Asphalt Plant" address="1453 Whistle Bare Road, Cambridge, ON, Canada N1R 5S3" phone="519-465-7815" />
                    </section>
                    <section className="map">
                        <ImageDisplay name="map.png" alt="Toronto Map Locations" title="" sub="" />
                    </section>
                </div>
            </main>
        );
    }

}

export default Contact;
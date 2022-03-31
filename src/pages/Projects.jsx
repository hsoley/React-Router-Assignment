// modules
import React from 'react';
// style
import '../assets/css/style.css';
// components used
import ImageDisplay from '../components/ImageDisplay';


class Projects extends React.Component {


    render() {
        return (
            <main className="mainContainer">
                <h2 className="pageTitle">Projects</h2>

                <div className="prjImgContainer">
                    <ImageDisplay name="1.jpeg" alt="Bluewater Health" title="Bluewater Health" sub="BF - Build Finance" />
                    <ImageDisplay name="2.jpeg" alt="Brampton Courthouse Addition Phase 2 and Toronto Region Bail Centre" title="Brampton Courthouse Addition Phase 2 and Toronto Region Bail Centre" sub="DBF – Design Build Finance" />
                    <ImageDisplay name="3.jpeg" alt="Bridge – Transit-Oriented Community" title="Bridge – Transit-Oriented Community" sub="Development" />
                    <ImageDisplay name="4.jpeg" alt="Bridgepoint Health" title="Bridgepoint Health" sub="DBFM - Design Build Finance Maintain" />
                    <ImageDisplay name="5.jpeg" alt="Brockville General Hospital Redevelopment Project" title="Brockville General Hospital Redevelopment Project" sub="BF- Build Finance" />
                    <ImageDisplay name="6.jpeg" alt="Cambridge Memorial Hospital" title="Cambridge Memorial Hospital" sub="BF - Build Finance" />
                </div>
            </main>
        );
    }

}

export default Projects;
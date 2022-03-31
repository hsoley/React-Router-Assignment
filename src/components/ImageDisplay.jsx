// modules
import React from 'react';
// style
import '../assets/css/style.css';


class ImageDisplay extends React.Component {
   

    render() {
        return (
            <div className="displayItem">
                <img className="prjImg" src={require(`../assets/images/${this.props.name}`)} alt={this.props.alt} />

                <h4 className="imgTitle">{this.props.title}</h4>
                <h6 className="imgSub">{this.props.sub}</h6>
            </div>
        );
    }

}

export default ImageDisplay;
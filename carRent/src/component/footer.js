import React, {Component} from "react";

export default class Footer extends Component {
    render() {
        const footerStyles = {
            // position: '',
            height: '100px',
            bottom: '0',
            width: '100%',
        };
        return (
            <div className="footer navbar-bottom" style={footerStyles}>
                <div className="container">
                    <div className="muted credit col-lg-12 text-center">
                        <p>Copyright &copy; carRental.com</p>
                    </div>
                </div>
            </div>
        );
    }
}
import React ,{Component} from 'react';

class Layout extends Component {
    render() {
        const containerStyle = { marginTop: "30px" };
        return (
            <div className="container" style={containerStyle}>
                <h2 className="text-capitalize text-center">Main page layout</h2>

            </div>
        )
    }
}
export default Layout;
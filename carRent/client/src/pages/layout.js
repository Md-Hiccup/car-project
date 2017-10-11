import React ,{Component} from 'react';
import FrontPage from './frontPage';
const request = require('superagent');

class Layout extends Component {
    constructor(){
        super();
        this.state ={users: []};
    }
    componentDidMount() {
        console.log('component did mount');
        fetch('/users')
            .then(res => {console.log(res) ;return res.json();})
            .then(users => {console.log(users);this.setState({ users })});
    }
    render() {
        return (
            <div>
                <FrontPage />
                <div className="Layout">
                    <h1>Users</h1>
                    {this.state.users.map(user =>
                        <div key={1}>user : {user.result}</div>
                    )}
                </div>
            </div>
        )
    }
}
export default Layout;
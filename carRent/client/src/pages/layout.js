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
        /* *********By superagent module ********** */
        // request('GET', '/users')
        //     .then(res => {console.log(res.body); this.setState({users: res.body}); return res.json})
        /* *********By react by default fetch method ******* */
         fetch('/api')
             .then(res => {console.log(res); return res.json();})
             .then(users => {console.log(users);this.setState({ users: users })});
    }
    render() {
        return (
            <div>
                <FrontPage />
                <div className="Layout">
                    <h1>Users</h1>
                    {/*{this.state.users.result}*/}
                    {this.state.users.map(user =>
                        <div key={1}>user : {user.api}</div>
                    )}
                </div>
            </div>
        )
    }
}
export default Layout;
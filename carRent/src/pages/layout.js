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
        //     .then(res => {console.log(res.body); this.setState({users: res.body}); return res.json});
        /* *********By react by default fetch method ******* */
        fetch('/users')
            .then(res => {console.log(res); return res.json();})
            .then(users => {console.log(users);this.setState({ users: users })});
        fetch('/login',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({a: 1, b: 2})
            })
            .then(res => {console.log("a",res); return res.json();})
            .then(data => {console.log('Request succeeded with JSON response', data)});
    }
    render() {
        return (
            <div>
                <FrontPage />
                <div className="text-center" >
                    <h1>Users</h1>
                    {/*{this.state.users.result}*/}
                    {this.state.users.map(user =>
                        <div key={user.id}>user : {user.name} &nbsp; Password : {user.pass}</div>
                    )}
                </div>
            </div>
        )
    }
}
export default Layout;
import React, { withRouter, Component } from "react";
import EditorContainer from '../Containers/Editor-Container';
import UserContainer from '../Containers/User-Container';
import auth from "./auth";

class MainApp extends Component {
	constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
	render(){
    const username = this.props.username
  return (
    <div>
      <h1>Welcome {username}</h1>
      <div>
				<EditorContainer username={username}/>
				<UserContainer />
      </div>
      <button
        onClick={() => {
          auth.logout(() => {
            this.props.history.push("/");
          });
        }}
      >
      Logout
      </button>
    </div>
	);
			}
};

export default MainApp
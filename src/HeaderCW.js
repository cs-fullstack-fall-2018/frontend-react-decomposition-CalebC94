import logo from "./todopostit.png";
import React, {Component} from "react";

class Header extends Component {


    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.appTitle}</h1>
                </header>
                <div>
                    <label>New To Do: </label>
                    <br/>
                    <input
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={this.state.title}
                    />
                </div>
                <button onClick={() => this.props.clicked(this.state.title)}>Add</button>
                <hr/>
            </div>
        );
    }
}

export default Header;
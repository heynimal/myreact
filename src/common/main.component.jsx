import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Popular Social Media Sites</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/" activeclassname="active">Home</Link></li>
                                <li><Link to="/sites" activeclassname="active">Sites</Link></li>
                                <li><Link to="/about" activeclassname="active">About Me</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main

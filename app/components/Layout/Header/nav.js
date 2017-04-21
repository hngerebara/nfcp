import React from 'react';

export default class NavBar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">News Feed App</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Setup</a></li>
                    </ul>
                    <form className="navbar-form navbar-right">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="glyphicon glyphicon-search"/>
                                </button>
                            </div>
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"/> Login</a></li>
                        
                    </ul>
                </div>
            </nav>
        );
    }
}

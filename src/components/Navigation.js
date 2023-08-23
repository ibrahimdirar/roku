// components/Navigation.js
import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Dashboard</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Main Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/calculations">Calculations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/data">Data</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

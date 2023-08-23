// App.js
import React from 'react';
import Navigation from './components/Navigation';
import MainPage from './pages/MainPage';
import CalculationsPage from './pages/CalculationsPage';
import DataPage from './pages/DataPage';
import CalculationNodeDetailPage from './pages/CalculationNodeDetailPage';

const App = () => {
    const route = window.location.pathname;

    let content;
    switch(route) {
        case '/calculations':
            content = <CalculationsPage />;
            break;
        case '/data':
            content = <DataPage />;
            break;
        case '/calculation-detail':
            content = <CalculationNodeDetailPage />;
            break;
        // Add other routes as needed
        default:
            content = <MainPage />;
    }

    return (
        <div>
            <Navigation />
            {content}
        </div>
    );
};

export default App;

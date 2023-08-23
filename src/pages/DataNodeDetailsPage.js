// CalculationNodeDetailPage.js
import React from 'react';
import CytoscapeComponent from './CytoscapeComponent';

const CalculationNodeDetailPage = () => {
    const elements = {
        nodes: [
            { data: { id: 'data1' } },
            { data: { id: 'calc1' } },
            // ... other nodes
        ],
        edges: [
            { data: { source: 'data1', target: 'calc1' } },
            // ... other edges
        ]
    };

    return (
        <div>
            <h1>Calculation Node Detail</h1>
            <CytoscapeComponent elements={elements} />
        </div>
    );
};

export default CalculationNodeDetailPage;

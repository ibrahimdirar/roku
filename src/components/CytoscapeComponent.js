// CytoscapeComponent.js
import React, { useRef, useEffect } from 'react';
import cytoscape from 'cytoscape';

const CytoscapeComponent = ({ elements }) => {
    const cyRef = useRef(null);

    useEffect(() => {
        const cy = cytoscape({
            container: cyRef.current,
            elements: elements,
            // ... (rest of the Cytoscape configuration)
        });
    }, [elements]);

    return (
        <div className="card mt-4">
            <div className="card-body">
                <div ref={cyRef} style={{ width: '100%', height: '500px' }} />
            </div>
        </div>
    );
};

export default CytoscapeComponent;

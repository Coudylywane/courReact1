import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Les images importer dans la balise IMG sont accessible dans "public"*/}
            <img src="./logo192.png" alt="logo reat" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;
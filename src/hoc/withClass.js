import React from 'react';

const withClass = (WrappedComponenet, className) =>
    (props) => (
        <div className={className}>
            <WrappedComponenet />
        </div>
    );

export default withClass;
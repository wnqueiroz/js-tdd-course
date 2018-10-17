import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title }) => {
    const component = (
        <header>
            {title && <h1>{title}</h1>}
        </header>
    );

    return component;
};

FullHeader.propTypes = {
    title: PropTypes.string,
};

export default FullHeader;

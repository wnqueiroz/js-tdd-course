import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
    bgColor: '#ccc',
};

const FullHeader = ({ title, subtitle, bgColor: backgroundColor }) => {
    const styles = {
        header: {
            backgroundColor,
        },
    };
    const component = (
        <header style={styles.header} >
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    );

    return component;
};

FullHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};
FullHeader.defaultProps = defaultProps;

export default FullHeader;

import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
};

const FullHeader = ({ title, subtitle, bgColor: backgroundColor, textColor, font }) => {
    const styles = {
        header: {
            backgroundColor,
            color: textColor,
            fontFamily: font,
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
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
};
FullHeader.defaultProps = defaultProps;

export default FullHeader;

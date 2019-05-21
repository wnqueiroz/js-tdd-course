import React from 'react';
import PropTypes from 'prop-types';
import { headerStyle, containerStyle, titleStyle, subtitleStyle } from './Styles';

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: '',
};

const FullHeader = ({ title, subtitle, bgColor: backgroundColor, textColor, font, bgImg }) => {
    const headerStyleCombined = {
        ...headerStyle,
        backgroundColor,
        color: textColor,
        fontFamily: font,
        backgroundImage: `url(${bgImg})`,
    };
    const component = (
        <header style={headerStyleCombined} >
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>
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
    bgImg: PropTypes.string,
};
FullHeader.defaultProps = defaultProps;

export default FullHeader;

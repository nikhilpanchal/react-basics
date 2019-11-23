import React from 'react';
import PropTypes from 'prop-types';

export default class Ticker extends React.Component {
    static propTypes = {
        time: PropTypes.string.isRequired
    }


    render() {
        return <div>{this.props.time}</div>
    }
}
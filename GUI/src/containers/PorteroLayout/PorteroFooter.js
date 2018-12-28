import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class PorteroFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span> &copy; 2018 Sistema de asistencias</span>
        <span className="ml-auto">Powered by 4J</span>
      </React.Fragment>
    );
  }
}

PorteroFooter.propTypes = propTypes;
PorteroFooter.defaultProps = defaultProps;

export default PorteroFooter;

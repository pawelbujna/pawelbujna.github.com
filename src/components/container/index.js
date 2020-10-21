import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div>{children}</div>;
};

export { Container };

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { compose, pure, setDisplayName } from 'recompose';
import injectSheet from 'react-jss';
import iconStyles from './icon-styles';
import iconKinds from './constants';

const Icon = ({
  children,
  classes,
  kind,
}) => (<span className={classes[kind]}>{children}</span>);

Icon.propTypes = {
  /** One of available icon types (see example) */
  kind: PropTypes.oneOf(Object.values(iconKinds)).isRequired,
  /** @ignore JSS */
  classes: PropTypes.any.isRequired,
  /** @ignore React Child node(s) */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default compose(
  pure,
  injectSheet(iconStyles),
  setDisplayName('Icon'),
)(Icon);


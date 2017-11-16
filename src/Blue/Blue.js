import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Blue.css';

class Blue extends Component {
    render() {
        return (
            <div className={styles.cointainer}>Blue theme - starts </div>
        );
    }
}

Blue.propTypes = {};
Blue.defaultProps = {};

export default Blue;

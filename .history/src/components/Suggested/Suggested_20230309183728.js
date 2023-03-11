import PropTypes from "@mui/material";
import classNames from "classnames/bind";
import styles from './Suggested.module.scss';

const cx = classNames.bind(styles);

function Suggested({ label }) {
    return ( 
        <div className={cx('wrapper')}>
        <p className={cx('label')}>{label}</p>
        </div>

     );
}

export default Suggested ;
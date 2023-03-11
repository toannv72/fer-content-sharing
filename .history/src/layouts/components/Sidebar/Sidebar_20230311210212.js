import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    BlogIcon,
} from '~/components/Icons';
import config from '~/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="chia sẻ "
                    to={config.routes.sanpham}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Nổi bật" to={config.routes.blog} icon={<BlogIcon />} activeIcon={<BlogIcon />} />
            </Menu>
           
                <div className={cx('row')}>
                    <div className={cx('col')}>
                        <p>STYLE</p>
                    </div>
                    <div className={cx('col')}>
                        <h3>
                            Office{' '}
                            <div className="underline">
                                <span />
                            </div>{' '}
                        </h3>

                        <p className="email-id">ferr@gmail.com</p>
                        <h4>+84 - 01234567890</h4>
                    </div>
                    <div className={cx('col')}>
                        <h3>
                            Links{' '}
                            <div className="underline">
                                <span />
                            </div>
                        </h3>
                        <ul>
                            // <li>
                            //     <a href="/">Home</a>
                            // </li>
                            <li>
                                <a href="/services">Services</a>
                            </li>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/features">Features</a>
                            </li>
                            <li>
                                <a href="/contacts">Contacts</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('col')}>
                        <h3>
                            Newsletter{' '}
                            <div className={cx('underline')}>
                                <span />
                            </div>
                        </h3>
                        <form>
                            <i className="fa-regular fa-envelope" />
                            <input type="email" placeholder="Enter your email id" required />
                            <button type="submit">
                                <i className="fa-solid fa-arrow-right" />
                            </button>
                        </form>
                    </div>
                </div>
                <hr />
                
        </aside>
    );
}

export default Sidebar;

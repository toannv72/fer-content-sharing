import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon } from '~/components/Icons';
import config from '~/config';


const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Chia sẻ "
                    to={config.routes.sanpham}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Nổi bật"
                    to={config.routes.blog}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
            </Menu>
            <footer>
                <div className={cx('row')}>
                    <div className={cx('row')}>
                        <p>STYLE</p>
                    </div>
                    <div className={cx('row')}>
                        <h3>
                            Office{' '}
                            <div className="underline">
                                <span />
                            </div>{' '}
                        </h3>
                        <p>One</p>
                        <p>Two</p>
                        <p>Three</p>
                        <p className="email-id">fer@gmail.com</p>
                        <h4>+84 - 0123456789</h4>
                    </div>
                    <div className={cx('row')}>
                        <h3>
                            Links{' '}
                            <div className="underline">
                                <span />
                            </div>
                        </h3>
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a hrefaAbout Us</a>
                            </li>
                            <li>
                                <a href="a">Features</a>
                            </li>
                            <li>
                                <a href="a">Contacts</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>
                            Newsletter{' '}
                            <div className="underline">
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
                <p className="copyright">@2023</p>
            </footer>
        </aside>
    );
}

export default Sidebar;

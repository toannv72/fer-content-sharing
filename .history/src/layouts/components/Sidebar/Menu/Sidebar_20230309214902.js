import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '.';
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
                        
                        <p className="email-id">fer@gmail.com</p>
                        <h4>+84 - 0123456789</h4>
                    </div>
                    <div className={cx('col')}>
                        <h3>
                            Links{' '}
                            <div className="underline">
                                <span />
                            </div>
                        </h3>
                        <ul>
    <li>
        <a href="/">Home</a>
    </li>
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
Thay đổi thuộc tính to trong các MenuItem của Menu để trỏ tới các đường dẫn tương ứng:
jsx
Copy code
<Menu>
    <MenuItem title="Home" to="/" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
    <MenuItem title="Chia sẻ" to="/services" icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
    <MenuItem title="Nổi bật" to="/features" icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
</Menu>
Sau khi sửa lại code như trên, khi nhấn vào các menu item, trang sẽ chuyển sang địa chỉ tương ứng với href của a trong phần Links của footer.






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
                <p className="copyright">@2023</p>
            </footer>
        </aside>
    );
}

export default Sidebar;

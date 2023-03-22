import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, BlogIcon } from '~/components/Icons';
import config from '~/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Chia sẻ "
                    to={config.routes.share}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Nổi bật" to={config.routes.blog} icon={<BlogIcon />} activeIcon={<BlogIcon />} />
            </Menu>

            <div className={cx('row')}>
                <div className={cx('col')}>
                    <MenuItem title="Liên hệ" to={config.routes.about} />
                    <MenuItem title=" Giới Thiệu" to={config.routes.about} />
                    <MenuItem title="Tin Tức " to={config.routes.about} />
                    <MenuItem title=" Trợ Giúp" to={config.routes.about} />
                </div>
            </div>
            <hr />
        </aside>
    );
}

export default Sidebar;

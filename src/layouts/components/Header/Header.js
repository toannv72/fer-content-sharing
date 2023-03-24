import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,

    faEarthAsia,
    faEllipsisVertical,
    faGear,

    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import {  UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
    const imgUser = JSON.parse(localStorage.getItem('user'));

const MENU_ITEMS = [
    // {
    //     icon: <FontAwesomeIcon icon={faEarthAsia} />,
    //     title: 'English',
    //     children: {
    //         title: 'Language',
    //         data: [
    //             {
    //                 type: 'language',
    //                 code: 'en',
    //                 title: 'English',
    //             },
    //             {
    //                 type: 'language',
    //                 code: 'vi',
    //                 title: 'Tiếng Việt',
    //             },
    //         ],
    //     },

    // },
    // {
    //     icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    //     title: 'Feedback and help',
    //     to: '/feedback',
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faKeyboard} />,
    //     title: 'Keyboard shortcuts',
    // },
];

function Header() {
    // const currentUser = true;
    const currentUser = localStorage.getItem('user'); 

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };


    

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@ihc',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/information',
        },

        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.noImage} alt="" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload blog" placement="bottom">
                                <Link to="/upload">
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Link>
                            </Tippy>

                            {/* <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>13</span>
                                </button>
                            </Tippy> */}
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button text>Upload</Button>
                            </Link>
                            <Link to="/login">
                                <Button primary>Log in</Button>
                            </Link>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src={imgUser.avatar ? imgUser.avatar : images.noImage}
                                alt=""
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

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
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row footer__block pb-0">
                        <div className="col-lg-6 main">
                            <figure>
                                <a
                                    href="https://kilala.vn/cam-nang-nhat-ban.html"
                                    title="C\u1EA9m nang Nh\u1EADt B\u1EA3n"
                                >
                                    <img src="/data/images/kilala_logo.svg" alt="C\u1EA9m nang Nh\u1EADt B\u1EA3n" />
                                </a>
                            </figure>
                        </div>
                        <div className="col-lg-6 sns">
                            <ul>
                                <li>
                                    <a
                                        href="https://www.facebook.com/vnkilala"
                                        title="KILALA Facebook"
                                        rel="noopener"
                                        target="_blank"
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/channel/UCNMkUtvwuvg0xYAXvxMQZ7g"
                                        title="KILALA Youtube"
                                        rel="noopener"
                                        target="_blank"
                                    >
                                        <i className="fab fa-youtube" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/kilala.vn/"
                                        title="KILALA Instagram"
                                        rel="noopener"
                                        target="_blank"
                                    >
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.pinterest.com/kilalavn/_saved/"
                                        title="KILALA Pinterest"
                                        rel="noopener"
                                        target="_blank"
                                    >
                                        <i className="fab fa-pinterest-p" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.tiktok.com/@kilala.vn"
                                        title="KILALA Tiktok"
                                        rel="noopener"
                                        target="_blank"
                                    >
                                        <i className="fab fa-tiktok social-titok" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer__block">
                        <div className="col-lg-6">
                            <div className="info">
                                <p>
                                    CÔNG TY TNHH TRUYỀN THÔNG KILALA <br />
                                    <small>Vận hành bởi Công ty TNHH thương mại Sunflower</small>
                                </p>
                                <ul>
                                    <li>
                                        <a href="https://goo.gl/maps/ihJdZe2figomfgap9" rel="noopener" target="_blank">
                                            <i className="fa fa-map-marker-alt mr-2" />
                                            Tầng 3, Tòa nhà Copac Square,
                                            <br /> 12 Tôn Đản, Phường 13, Quận 4, TP.HCM, VN
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:(+84)2838277722">
                                            <i className="fa fa-phone-alt mr-2" />
                                            (+84) 28 3827 7722  Thứ 2 – Thứ 6 | 8:30 – 17:00
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@kilala.vn">
                                            <i className="fa fa-envelope mr-2" />
                                            info@kilala.vn
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            className="mr-2"
                                            href="https://kilala.vn/lien-he.html"
                                            title="Li\xEAn h\u1EC7"
                                        >
                                            Liên hệ
                                        </a>
                                        <span className="mr-2">|</span>
                                        <a
                                            className="mr-2"
                                            href="https://kilala.vn/cong-tac-vien.html"
                                            title="C\u1ED9ng t\xE1c n\u1ED9i dung"
                                        >
                                            Cộng tác nội dung
                                        </a>
                                        <span className="mr-2">|</span>
                                        <a
                                            href="https://kilala.vn/chinh-sach-bao-mat.html"
                                            title="Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"
                                        >
                                            Chính sách bảo mật
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="ref">
                                <ul>
                                    <li>
                                        <figure>
                                            <a
                                                href="https://www.yuidea.co.jp/"
                                                title="YUIDEA Japan"
                                                rel="noopener"
                                                target="_blank"
                                            >
                                                <img
                                                    className="lazy"
                                                    width="162"
                                                    alt="YUIDEA Japan"
                                                    src="/data/images/yuidea_logo.png"
                                                    style={{}}
                                                />
                                            </a>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <a
                                                href="https://kilala.com.vn/vi/"
                                                title="KILALA Communication"
                                                rel="noopener"
                                                target="_blank"
                                            >
                                                <img
                                                    className="lazy"
                                                    width="113"
                                                    alt="KILALA Communication"
                                                    src="/data/images/kilala_communication.svg"
                                                    style={{}}
                                                />
                                            </a>
                                        </figure>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text">
                            <p>
                                Giấy phép MXH 454/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 16/10/2020. Chịu
                                trách nhiệm quản lý nội dung: Bà Đường Thị Anh Thảo.
                            </p>
                            <p>
                                Tất cả nội dung, hình ảnh sử dụng trong Cẩm nang Văn hóa & Phong cách sống tại kilala.vn
                                thuộc bản quyền của KILALA. Mọi hành vi sao chép, nếu không có sự cho phép của KILALA,
                                sẽ xem như vi phạm Luật Sở hữu Trí Tuệ hiện hành của nước Việt Nam.
                            </p>
                            <div className="d-md-flex justify-content-end align-items-center">
                                <p className="copyright mb-2 mb-md-0 mr-md-3">© 2013-2023. All Rights Reserved</p>
                                <div className="text-md-right text-center">
                                    <a
                                        href="https://www.dmca.com/Protection/Status.aspx?ID=3aa9a8e5-9d48-4048-b4a9-d948f2d8474a&refurl=https://kilala.vn/cam-nang-nhat-ban.html"
                                        title="DMCA.com Protection Status"
                                        className="dmca-badge"
                                    >
                                        <img
                                            src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=3aa9a8e5-9d48-4048-b4a9-d948f2d8474a"
                                            alt="DMCA.com Protection Status"
                                        />
                                    </a>
                                    <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js" />
                                    <div />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </aside>
    );
}

export default Sidebar;

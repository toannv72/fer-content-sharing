import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styles from './Home2.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function name() {
    return (
        <main className={cx('page-content')}>
            <div className={cx('card')}>
                <div className={cx('content')}>
                    <h2 className={cx('title')}>THỜI TRANG</h2>
                    <p className={cx('copy')}>
                        Bạn có biết trang phục có thể tác động tới mức độ thành công trong cuộc sống?
                        Trang phục không chỉ đơn thuần là bộ quần áo khoác lên người, phản ánh diện mạo,
                        chúng còn ảnh hưởng đến việc bộc lộ cảm xúc của người mặc. Vì vậy, nếu bạn muốn khởi đầu
                        một ngày mới như ý, hãy khai màn từ việc chọn quần áo.
                    </p>
                    <a className={cx('btn')} href="/Blog">
                        Khám phá ngay
                    </a>
                </div>
            </div>
            <div className={cx('card')}>
                <div className={cx('content')}>
                    <h2 className={cx('title')}>LÀM ĐẸP</h2>
                    <p className={cx('copy')}>
                        Làm đẹp là một nhu cầu bất tận.
                        Làm đẹp để cảm thấy mình tự tin hơn, yêu cuộc sống hơn, đẹp để trong mắt người thân yêu hình ảnh mình sẽ thể hiện luôn là một ấn tượng tốt,
                        đẹp để cho mình thấy được niềm vui để tự vỗ về mỗi khi phiền muộn. Nói chung làm đẹp là một cách để
                        một người không phân biệt nam hay nữ, khẳng định mình cũng như để thưởng thức cuộc sống.

                    </p>
                    <a className={cx('btn')} href="/Blog">
                        Khám phá ngay
                    </a>
                </div>
            </div>
            <div className={cx('card')}>
                <div className={cx('content')}>
                    <h2 className={cx('title')}>BÍ QUYẾT SỐNG</h2>
                    <p className={cx('copy')}>
                        Sức khỏe tốt là nền tảng cơ bản của một cuộc sống vui vẻ, hạnh phúc, là cơ sở quan trọng để
                        mỗi người thực hiện ý tưởng, ước mơ, nguyện vọng của cuộc đời mình. Bởi nếu bệnh tật, ốm đau,
                        chúng ta thường sẽ không còn đủ sức khỏe, tâm trí nào mà lo lắng, suy nghĩ đến những việc khác.
                    </p>
                    <a className={cx('btn')} href="/Blog">
                        Khám phá ngay
                    </a>
                </div>
            </div>
            <div className={cx('card')}>
                <div className={cx('content')}>
                    <h2 className={cx('title')}>DU LỊCH</h2>
                    <p className={cx('copy')}>
                        Không chỉ là trải nghiệm, nghỉ ngơi, lợi ích của việc đi du lịch còn giúp chúng ta vun đắp thêm vốn sống, tình yêu quê hương,
                        gia đình cùng nhiều lợi ích cho sức khỏe và những kỷ niệm khó quên,... Điều này sẽ giúp cuộc sống của bạn thêm phong phú,
                        mới mẻ và có người cùng chia sẻ những điều ý nghĩa trong cả cuộc sống lẫn công việc.
                    </p>

                    <a className={cx('btn')} href="/Blog">
                        Khám phá ngay
                    </a>
                </div>
            </div>

        </main>
    );
}

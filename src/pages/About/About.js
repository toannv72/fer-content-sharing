import styles from './About.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function About() {
    return (
        <>
            <header className={cx("masthead")}>
                <p className={cx("masthead-intro")}>Về chúng tôi</p>
                <h1 className={cx("masthead-heading")}>Content Sharing</h1>
            </header>

            <section className={cx("introduction-section")}>
                <h1>Giới thiệu</h1>
                <p>Content Sharing là trang thông tin về những chủ đề trong cuộc sống như thời trang, làm đẹp, du lịch, bí quyết sống cùng cộng đồng dành cho người đam mê thời trang, làm đẹp và các vấn đề văn hóa.
                </p>
                <p>Content Sharing cung cấp những nội dung chính liên quan đến thế giới thời trang, làm đẹp chuyên nghiệp và những bí quyết giúp bạn luôn tự tin như một cô gái “Sắc sảo, sành điệu và sâu lắng”.
                </p>
                <p>Ngoài ra, Content Sharing còn luôn cập nhật những chia sẻ ngắn, bí quyết về thời trang, làm đẹp cùng những trang phục đẹp hàng ngày, đồng thời giới thiệu những tác phẩm văn hóa, nguồn cảm hứng và các blog thú vị bình luận về phong cách sống, quan điểm sống.
                </p>
                <p>Hãy khám phá cuộc sống xung quanh mình và bước ra khỏi giới hạn của bản thân để trở thành phiên bản tốt hơn mỗi ngày cùng Content Sharing.</p>
            </section>


            {/* <footer className={cx("site-padding")}>
            </footer> */}
        </>
    )
}
export default About;
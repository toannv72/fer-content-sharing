import { Link } from 'react-router-dom';
import styles from './HomeBlog.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function HomeBlog() {

     const [posts, setPosts] = useState([]);

     useEffect(() => {
         axios
             .get('/api/posts')
             .then((response) => {
                 setPosts(response.data);
             })
             .catch((error) => {
                 console.log(error);
             });
     }, []);
    return (
        <p>

            <div className={cx("posts")} style={{ flexWraprap: 'wrap', justifyContent: 'center' }}>
                {/* {!items.error?items.map((item) => (
                    <Post
                        key={item.id}
                        title={item.title}
                        img={item.imageTitle}
                        writing={item.description}
                        id={item.id}
                    />
                )):<h1>không có blog</h1>} */}


                <div className={cx("post")}>
                    <Link to={`/post:`} className={cx("link")}>
                        <div className={cx("postImg1")}>
                            <img className={cx("postImg")} src="https://chaubui.net/wp-content/uploads/2023/01/duong-da-cua-jisoo.jpg" alt="" />
                        </div>
                        <div className={cx("postInfo")}>
                            <span className={cx("postTitle")}>Bật mí “chìa khóa” trong bí quyết dưỡng da của Jisoo</span>
                            <hr />
                        </div>
                    </Link>
                    <p className={cx("postDesc")}>Dưỡng da “thắng” trang điểm: Xuất hiện với vai trò khách mời trong chương trình Get It Beauty, Jisoo chia sẻ rằng cô sở hữu làn da khô vào mọi lúc. Do đó, cô tập trung vào việc dưỡng da hơn trang điểm trong chu trình hàng ngày. Hãy tìm đến bác sĩ chuyên môn nếu bạn chưa xác định được loại da và chu trình dưỡng da phù hợp. Hydrat hóa: Hydrat hóa là quá trình cung cấp nước cho cơ thể. Khi thiếu nước, bề mặt da trở nên khô, nhăn nheo và kéo theo các dấu hiệu lão hóa. Sử dụng mặt nạ giấy và mặt nạ làm sạch lỗ chân lông để làm dịu làn da sau những lần trang điểm. Jisoo đắp mặt nạ rất thường xuyên, hai đến ba lần trong một ngày tùy vào tâm trạng của cô. Và bước cuối cùng, đừng quên dùng kem dưỡng ẩm để khóa ẩm. Môi mọng nước: Bên cạnh da mặt, Jisoo cũng rất quan tâm đến đôi môi. Cô dùng mặt nạ môi và nhắn nhủ khán giả nhớ dùng son dưỡng “mọi lúc mọi nơi” để duy trì làn môi căng mọng, đặc biệt khi trang điểm hoặc di chuyển nhiều. Mặt mộc: Cô chia sẻ do tính chất làn da khô nên cô ưu tiên các khoảng thời gian không trang điểm để da được nghỉ ngơi, thư giãn. Dễ dàng thấy Jisoo chụp những bức ảnh mặt mộc chỉ với một chút điểm nhấn vào son dưỡng bóng ở đôi môi. Thực phẩm “dưỡng da”: Không chỉ cung cấp “thức ăn” cho da, Jisoo chia sẻ rằng bản thân chú trọng vào các thực phẩm chứa nhiều collagen để hỗ trợ quá trình dưỡng da hàng ngày. </p>
                </div>

                <div className={cx("post")}>
                    <Link to={`/post:`} className={cx("link")}>
                        <div className={cx("postImg1")}>
                            <img className={cx("postImg")} src="https://chaubui.net/wp-content/uploads/2023/01/duong-da-cua-jisoo.jpg" alt="" />
                        </div>
                        <div className={cx("postInfo")}>
                            <span className={cx("postTitle")}>Bật mí “chìa khóa” trong bí quyết dưỡng da của Jisoo</span>
                            <hr />
                        </div>
                    </Link>
                    <p className={cx("postDesc")}>Dưỡng da “thắng” trang điểm: Xuất hiện với vai trò khách mời trong chương trình Get It Beauty, Jisoo chia sẻ rằng cô sở hữu làn da khô vào mọi lúc. Do đó, cô tập trung vào việc dưỡng da hơn trang điểm trong chu trình hàng ngày. Hãy tìm đến bác sĩ chuyên môn nếu bạn chưa xác định được loại da và chu trình dưỡng da phù hợp. Hydrat hóa: Hydrat hóa là quá trình cung cấp nước cho cơ thể. Khi thiếu nước, bề mặt da trở nên khô, nhăn nheo và kéo theo các dấu hiệu lão hóa. Sử dụng mặt nạ giấy và mặt nạ làm sạch lỗ chân lông để làm dịu làn da sau những lần trang điểm. Jisoo đắp mặt nạ rất thường xuyên, hai đến ba lần trong một ngày tùy vào tâm trạng của cô. Và bước cuối cùng, đừng quên dùng kem dưỡng ẩm để khóa ẩm. Môi mọng nước: Bên cạnh da mặt, Jisoo cũng rất quan tâm đến đôi môi. Cô dùng mặt nạ môi và nhắn nhủ khán giả nhớ dùng son dưỡng “mọi lúc mọi nơi” để duy trì làn môi căng mọng, đặc biệt khi trang điểm hoặc di chuyển nhiều. Mặt mộc: Cô chia sẻ do tính chất làn da khô nên cô ưu tiên các khoảng thời gian không trang điểm để da được nghỉ ngơi, thư giãn. Dễ dàng thấy Jisoo chụp những bức ảnh mặt mộc chỉ với một chút điểm nhấn vào son dưỡng bóng ở đôi môi. Thực phẩm “dưỡng da”: Không chỉ cung cấp “thức ăn” cho da, Jisoo chia sẻ rằng bản thân chú trọng vào các thực phẩm chứa nhiều collagen để hỗ trợ quá trình dưỡng da hàng ngày. </p>
                </div>

            </div>
        </p>
    )
}
export default HomeBlog
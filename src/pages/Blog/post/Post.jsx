import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './post.css';

export default function Post({ title, img, writing, id }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="post">
            <Link to={`/singleBlog/${id}`} className="link">
                <div className="postImg1">
                    <img className="postImg" src={img} alt="" />
                </div>
                <div className="postInfo">
                    <span className="postTitle">{title}</span>
                    <hr />
                </div>
            </Link>
            {/* <p className="postDesc">{writing}</p> */}
            <p
                className="postDesc"
                dangerouslySetInnerHTML={{
                    __html: writing,
                }}
            ></p>
        </div>
    );
}

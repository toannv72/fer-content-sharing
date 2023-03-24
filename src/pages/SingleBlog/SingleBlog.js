import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import './SingleBlog.css';

export default function SingleBlog() {
    const { pathname } = useLocation();
    const idBlog = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URLS}blog/getOne/${idBlog.id}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProducts(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, [idBlog.id]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <img className="singlePostImg" src={products.imageCover} alt="" />
                    <h1 className="singlePostTitle">
                        {products.title}
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit"></i>
                            <i className="singlePostIcon far fa-trash-alt"></i>
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span style={{ display: 'flex' }}>
                            <h2> Author:</h2>
                            <h2 style={{ color: 'black' }}>{products.author}</h2>
                        </span>
                    </div>
                    <p
                        className="singlePostDesc"
                        dangerouslySetInnerHTML={{
                            __html: products.description,
                        }}
                    ></p>
                </div>
            </div>
        );
    }
}

import { Link } from 'react-router-dom';
import styles from './HomeBlog.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import axios from 'axios';

import { useEffect } from 'react';
import Post from '../Blog/post/Post';
import ErrorToast from '../ErrorToast/ErrorToast';

const cx = classNames.bind(styles);
function HomeBlog() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // console.log(items);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URLS}blog/getAllBlog?page=0&size=2&sort=id%2Cdesc`)
            .then(
                (res) =>( 
                    res.json()
                )
            )
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    // console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    throw new Error(error.message);
                },
            )
            .catch((error) => {
                setIsLoaded(true);
                setError(error.message);
                console.log(" sai rồi kìa");
            });
    }, []);

    // console.log(error);
    if (error) {
        return <ErrorToast message={error.message} />;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="posts" style={{ flexWraprap: 'wrap', justifyContent: 'center' }}>
                {!items.error ? (
                    items.map((item) => (
                        <Post
                            key={item.id}
                            title={item.title}
                            img={item.imageTitle}
                            writing={item.description}
                            id={item.id}
                        />
                    ))
                ) : (
                    <h1>không có blog</h1>
                )}
            </div>
        );
    }
}
export default HomeBlog;

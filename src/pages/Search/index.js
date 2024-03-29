import styles from './HomeBlog.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from '../Blog/post/Post';
import ErrorToast from '../ErrorToast/ErrorToast';
import { Pagination } from '@mui/material';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);
function Search() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // console.log(items);
    const [totalPage, setTotalPage] = useState();
    const [currentPage, setCurrentPage] = useState(1);
     const currentUrl = window.location.href;
     const urlParts = currentUrl.split('search/');
     console.log(urlParts);
     const [lastPart, setLastPart] = useState(urlParts[urlParts.length - 1]);
    const handlePageChange = (event, value) => {
        window.scrollTo(0, 0);
        setCurrentPage(value);

        // console.log(value);
    };
  const abc = useLocation();
  console.log(abc);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URLS}blog/${lastPart}?page=${currentPage - 1}&size=4`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    // console.log(result);
                    setTotalPage(result.totalPage);
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
            });
    }, [currentPage, lastPart]);

    // console.log(error);
    if (error) {
        return <ErrorToast message={error.message} />;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <div
                    className="posts"
                    style={{ flex: 9, flexWrap: 'wrap', justifyContent: 'center', display: 'flex', margin: 20 }}
                >
                    {!items.error ? (
                        <>
                            {items.contends.map((item) => (
                                <>
                                    <Post
                                        key={item.id}
                                        title={item.title}
                                        img={item.imageTitle}
                                        writing={item.description}
                                        id={item.id}
                                    />
                                </>
                            ))}
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            ></div>
                        </>
                    ) : (
                        <h1>không có blog</h1>
                    )}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                    <Pagination
                        count={totalPage}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                    />
                </div>
            </>
        );
    }
}
export default Search;

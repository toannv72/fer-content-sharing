import React, { useState } from 'react';
import axios from 'axios';
import styles from './Upload.module.scss';
import classNames from 'classnames/bind';
import { TextField } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
const cx = classNames.bind(styles);
function Upload() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [avata, setAvata] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);
        axios
            .post('/api/posts', formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={cx('from')}>
            <form onSubmit={handleSubmit} className={cx('from-1')}>
                <div className={cx('from-1')}>
                    <TextField
                        id="standard-basic"
                        label="Title"
                        variant="standard"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <TextareaAutosize
                        id="content"
                        name="content"
                        placeholder="Content"
                        minRows="5"
                        maxRows={7}
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    ></TextareaAutosize>

                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={(event) => setImage(event.target.files[0])}
                    />
                    <label htmlFor="image">Avata:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={(event) => setAvata(event.target.files[0])}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Upload;

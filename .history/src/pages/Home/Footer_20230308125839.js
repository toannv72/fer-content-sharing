import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Footer.module.scss';
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames/bind';

const ft = classNames.bind(styles);
export default function Footer() {
    return (
        <footer>
            <div className={styles.row}>
                <div className={styles.col}>
                    <img
                        src="https://tse2.mm.bing.net/th?id=OIP.XrGVljajcLZhvJGUD-Sc7gHaE7&pid=Api&P=0"
                        className={styles.logo}
                    />
                    <p>STYLE</p>
                </div>
                <div className="col">
                    <h3>
                        Office{' '}
                        <div className="underline">
                            <span />
                        </div>{' '}
                    </h3>
                    <p>One</p>
                    <p>Two</p>
                    <p>Three</p>
                    <p className="email-id">fer@gmail.com</p>
                    <h4>+84 - 0123456789</h4>
                </div>
                <div className="col">
                    <h3>
                        Links{' '}
                        <div className="underline">
                            <span />
                        </div>
                    </h3>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Features</a>
                        </li>
                        <li>
                            <a href="">Contacts</a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h3>
                        Newsletter{' '}
                        <div className="underline">
                            <span />
                        </div>
                    </h3>
                    <form>
                        <i className="fa-regular fa-envelope" />
                        <input type="email" placeholder="Enter your email id" required />
                        <button type="submit">
                            <i className="fa-solid fa-arrow-right" />
                        </button>
                    </form>
                    <div className="social-icon">
                        <i className="fa-brands fa-facebook-f" />
                        <i className="fa-brands fa-twitter" />
                        <i className="fa-brands fa-google-plus" />
                        <i className="fa-brands fa-youtube" />
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright">@2023</p>
        </footer>
    );

    
}
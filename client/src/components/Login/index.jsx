import { Link, } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const Signup = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/"
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form action="" className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Login in</h1>
                        <input type="email" placeholder='Email' name='email' value={data.email} onChange={handleChange} required className={styles.input} />
                        <input type="password" placeholder='Password' name='password' value={data.password} onChange={handleChange} required className={styles.input} />

                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type='submit' className={styles.green_btn}>
                            Sign In
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>Create new account</h1>
                    <Link to="/signup">
                        <button type='button' className={styles.white_btn}>
                            Sign in
                        </button>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default Signup;
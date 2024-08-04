"use client"
import Link from "next/link";
import style from "./login.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State for error handling

    const handleLogin = async () => {
        setError(null); // Reset error before login attempt
        try {
            let result = await fetch('http://localhost:5000/login', {
                method: 'post',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.log(result);
            if (result.user && result.user._id) {
                localStorage.setItem('user', JSON.stringify(result.user));
                localStorage.setItem('auth', JSON.stringify(result.auth));
                router.push('/');
            } else {
                setError("Username / Password not match");
            }
        } catch (err) {
            console.error('Login error:', err);
            setError("Something went wrong. Please try again later.");
        }
    };

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            try {
                const user = JSON.parse(auth);
                if (user._id) {
                    router.push('/');
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
    }, [router]);

    return (
        <>
            <div className={style.loginpage}>
                <div className={`${style.container} container`}>
                    <div className={`${style.row} row`}>
                        <div className={`${style.col_md_6} col-md-6`}>
                            <div className={style.selflogin}>
                                <div className={style.heading}>
                                    <h2>Login</h2>
                                </div>
                                <div className={style.selflogin}>
                                    <div className={style.singleinput}>
                                        <label>Username*</label>
                                        <input type="text" placeholder="Username/Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className={style.singleinput}>
                                        <label>Password*</label>
                                        <input type="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className={`${style.themebutton} themebutton`}>
                                        <button type="button" className="btn" onClick={handleLogin}>Login</button>
                                    </div>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                </div>
                                <div className={style.link}>
                                    <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.col_md_6} col-md-6`}>
                            <div className={style.loginfreespace}>
                                <div className={style.freespace}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

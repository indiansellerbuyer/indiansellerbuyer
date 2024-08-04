"use client";
import Link from "next/link";
import style from "./signup.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      router.push('/');
    }
  }, [router]);

  const CollectData = async () => {
    setError(null); // Reset error state
    setSuccess(null); // Reset success state

    if (!firstname || !lastname || !username || !phone || !email || !password || !confirmPassword) {
      setError("Please fill all fields!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match! Frontend");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          phone,
          email,
          password,
          confirmPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      console.log(result);
      if (result.auth) {
        localStorage.setItem("auth", JSON.stringify(result.auth));
        setSuccess("Registration successful!");
        // router.push('/');
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div className={`${style.loginpage}`}>
        <div className={`${style.container} container`}>
          <div className={`${style.row} row`}>
            <div className={`${style.col_md_6} col-md-6`}>
              <div className={`${style.selflogin}`}>
                <div className={`${style.heading}`}>
                  <h2>Signup</h2>
                </div>
                <div className={`${style.selflogin}`}>
                  <div className={`${style.row} row`}>
                    <div className={`${style.col_md_6} col-md-6`}>
                      <div className={`${style.singleinput}`}>
                        <label>First Name*</label>
                        <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                      </div>
                    </div>
                    <div className={`${style.col_md_6} col-md-6`}>
                      <div className={`${style.singleinput}`}>
                        <label>Last Name*</label>
                        <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                      </div>
                    </div>
                    <div className={`${style.col_md_12} col-md-12`}>
                      <div className={`${style.singleinput}`}>
                        <label>Username*</label>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                      </div>
                    </div>
                    <div className={`${style.col_md_12} col-md-12`}>
                      <div className={`${style.singleinput}`}>
                        <label>Phone*</label>
                        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                      </div>
                    </div>
                    <div className={`${style.col_md_12} col-md-12`}>
                      <div className={`${style.singleinput}`}>
                        <label>Email*</label>
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className={`${style.col_md_12} col-md-12`}>
                      <div className={`${style.singleinput}`}>
                        <label>Password*</label>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                    </div>
                    <div className={`${style.col_md_12} col-md-12`}>
                      <div className={`${style.singleinput}`}>
                        <label>Confirm Password*</label>
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                      </div>
                    </div>
                    <div className={`${style.col_md_12} col-md-12`}>
                      <div className={`${style.themebutton} themebutton`}>
                        <button type="button" className="btn" onClick={CollectData}>Signup</button>
                      </div>
                      {error && <p style={{ color: 'red' }}>{error}</p>}
                      {success && <p style={{ color: 'green' }}>{success}</p>}
                    </div>
                  </div>
                </div>
                <div className={`${style.link}`}>
                  <p>Have an account? <Link href="/login">Login</Link></p>
                </div>
              </div>
            </div>
            <div className={`${style.col_md_6} col-md-6`}>
              <div className={`${style.loginfreespace}`}>
                <div className={`${style.freespace}`}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

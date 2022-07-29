import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';

import styles from '../styles/login.module.css';
import { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [userMsg, setUserMsg] = useState('');
  const [email, setEmail] = useState('');

  const handleOnChangeEmail = (e) => {
    setUserMsg('');
    setEmail(e.target.value);
  };

  const handleLoginWithEmail = (e) => {
    e.preventDefault();

    if (email) {
      setUserMsg('');
      if (email === 'aymeric.pilaert@hotmail.fr') {
        router.push('/');
      } else {
        setUserMsg('Something went wrong logging in');
      }
    } else {
      setUserMsg('Enter a valid email address');
      //show user message
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href='/'>
            <a>
              <div className={styles.logoWrapper}>
                <Image
                  src='/static/netflix.svg'
                  alt='Netflix logo'
                  width='128px'
                  height='34px'
                />
              </div>
            </a>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            type='email'
            placeholder='Email address'
            name=''
            id=''
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />
          <p className={styles.userMsg}> {userMsg} </p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
import styles from './navbar.module.css';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { magic } from '../../lib/magic-client';

const NavBar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const [username, setUsername] = useState('');

  const router = useRouter();

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push('/');
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push('/my-list');
  };

  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropDown(!showDropdown);
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    const signOut = async () => {
      try {
        await magic.user.logout();
        router.push('/login');
      } catch {
        console.log('Error logging out', error);
        router.push('/login');
      }
    };
    signOut();
  };

  useEffect(() => {
    async function getUsername() {
      try {
        const { email } = await magic.user.getMetadata();
        if (email) {
          setUsername(email);
        }
      } catch (error) {
        console.log('Error retrieving email:', error);
      }
    }
    getUsername();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href='/'>
          <a className={styles.logoLink}>
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

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}> {username} </p>
              <Image
                src='/static/expand_more.svg'
                alt='Expand dropdown'
                width='24px'
                height='24px'
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link>
                    <a className={styles.linkName} onClick={handleSignOut}>
                      Sign out
                    </a>
                  </Link>

                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

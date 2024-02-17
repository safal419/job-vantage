import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/assets/logo.png"
            alt="JobVantage"
            width={50}
            height={50}
          />
        </Link>
        <span className={styles.companyName}>JobVantage</span>
      </div>

      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/jobs">Find Jobs</Link>
        <Link href="/projects">Find Projects</Link>
      </div>

      <div className={styles.actions}>
        <div>
          <Link href="/uploadjobs">
            <Button variant="contained" size="small">
              Post a Job +
            </Button>{" "}
          </Link>
          <Link href="/login">
            <Button variant="contained" size="small">
              Login
            </Button>{" "}
          </Link>
          <Link href="/sign-up">
            <Button variant="contained" size="small">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
// import styles from "./page.module.css";

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="auth-page align-items-center py-2 justify-content-center gap-2">
        <Link className="btn btn-primary" href="/pages/auth/login">Go To Login Page</Link>
        <Link className="btn btn-primary" href="/pages/dashboard/profile/">Go To Dasboard</Link>
      </div>
    </main>
  );
}

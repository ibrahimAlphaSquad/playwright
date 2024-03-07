"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const submitHandler = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password })

    router.push(`/about?email=${email}&password=${password}`);
  }

  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <p>Welcome to home page</p>
      <p>This deployment should no run</p>
      <p>This deployment for UI branch and it should no run</p>
      <form onSubmit={submitHandler} method="post">
        <label>
          Email:
          <input placeholder="email" type="email" name="email" />
        </label>
        <label>
          Password:
          <input placeholder="password" type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

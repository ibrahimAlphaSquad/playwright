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

    localStorage.setItem("auth", JSON.stringify({ email, password }));
  }

  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <p>Welcome to home page</p>
      <p>This sentence is designed to test the deployment of "merge-test" when a pull request (PR) opened with "merge-test" is merged. Upon merging the PR, it triggers the deployment; otherwise, no deployments should execute.</p>
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

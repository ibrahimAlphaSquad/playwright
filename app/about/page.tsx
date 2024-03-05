import Link from "next/link";

export default function Page({ searchParams: params }) {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Home</Link>
      <p>Welcome to about page</p>
      <p id="email" aria-label="email" title="email">{params.email}</p>
      <p id="password" aria-label="password" title="password">{params.password}</p>
    </div>
  );
}

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <p>Welcome to home page</p>
      <p>This deployment should no run</p>
    </div>
  );
}

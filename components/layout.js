import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <nav>
          <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

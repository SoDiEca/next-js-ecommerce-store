import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  margin-top: 20px;
  padding: 10px;
  color: solid black;
`;

export default function Header() {
  return (
    <header>
      <nav css={navStyles}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <br />

        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <br />

        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/items">
            <a>Items</a>
          </Link>
        </li>
      </nav>
    </header>
  );
}

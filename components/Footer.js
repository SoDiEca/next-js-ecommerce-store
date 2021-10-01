import { css } from '@emotion/react';

const footerStyles = css`
  margin-top: 20px;
  padding: 10px;
  color: black;
`;
export default function Footer() {
  return <footer css={footerStyles}>footer-on-the-way.com</footer>;
}

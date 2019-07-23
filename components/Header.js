import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/post">
      <a style={linkStyle}>Post</a>
    </Link>
    <Link href="/chris">
      <a style={linkStyle}>Chris</a>
    </Link>
  </div>
);

export default Header;

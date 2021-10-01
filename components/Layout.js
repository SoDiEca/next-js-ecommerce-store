import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header />
      <br />
      Info will be here soon, be patient...
      <br />
      <br />
      {props.children}
      <br />
      <br />
      <Footer />
    </div>
  );
}

const React = require('react');
const ReactDOM = require('react-dom');
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

import { Header } from './layout/header.jsx';
import { Footer } from './layout/footer.jsx';

class Content extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main></main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('all')
)

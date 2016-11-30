import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import About from './about';


if (typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function') {
  window.renderClient = (data) => {
    ReactDOM.render(<About initialData={data.initialData} />, document.getElementById('app'));
  }
}
else {
  global.renderServer = (data) => {
    let json = JSON.parse(data);
    return ReactDOMServer.renderToString (
      <About initialData={json.initialData} />
    )
  };
}

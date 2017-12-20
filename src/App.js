import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
          <div className="container">
            <h1 className="display-3">Getting Started with Sass</h1>
            <p className="lead">An introduction to Sass with Bootstrap and React.js</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <ul className="list-group">
                <li className="list-group-item">
                  <a target="_blank" rel="noopener noreferrer" href="">Original GitHub Repository</a>
                </li>
                <li className="list-group-item">
                  <a target="_blank" rel="noopener noreferrer" href="http://sass-lang.com/">Sass Language Website</a>
                </li>
                <li className="list-group-item">
                  <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@Connorelsea/using-sass-with-create-react-app-7125d6913760">Connor Elsea: Adding Sass or Scss to Create-React-App</a>
                </li>
                <li className="list-group-item">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc">React.js: Adding a CSS Preprocessor</a>
                </li>
                <li className="list-group-item">
                  <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/docs/4.0/getting-started/theming/">Bootstrap: Theming</a>
                </li>
              </ul>
            </div>
            <div className="col-8">
              <h2>Guiding Questions</h2>
              <ol>
                <li>
                  What is the difference between a <code>.sass</code> and <code>.scss</code> file?
                  <details>
                    <summary>Explanation</summary>
                    <p className="explanation">Write your explanation here!</p>
                  </details>
                </li>
                <li>
                  How does nesting work with Sass?
                  <details>
                    <summary>Explanation</summary>
                    <p className="explanation">Write your explanation here!</p>
                  </details>
                </li>
                <li>
                  How does declaring variables work with Sass?
                  <details>
                    <summary>Explanation</summary>
                    <p className="explanation">Write your explanation here!</p>
                  </details>
                </li>
                <li>
                  How must your file name change in order for it to be used as a partial?
                  <details>
                    <summary>Explanation</summary>
                    <p className="explanation">Write your explanation here!</p>
                  </details>
                </li>
                <li>
                  How can you override the original Bootstrap colors?
                  <details>
                    <summary>Explanation</summary>
                    <p className="explanation">Write your explanation here!</p>
                  </details>
                </li>
                <li>
                  How can you utilize Bootstrap colors in your <code>.scss</code> files?
                  <details>
                    <summary>Explanation</summary>
                    <p className="explanation">Write your explanation here!</p>
                  </details>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

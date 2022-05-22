import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header className="flex">
        <h1>Assignment Title : <span>React Basic App</span></h1>
      </header>

      <main className="flex">
        <h4>Hello World through React by <span>Muhammad Ammad Hassan</span></h4>
      </main>

      <footer className="flex">
        <div class="social-icons flex">
          <a href="https://web.facebook.com/m_ammad_hassan/" target="_blank" rel='noreferrer'>
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com/m_ammadhassan" target="_blank" rel='noreferrer'>
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="https://www.instagram.com/m_ammadhassan" target="_blank" rel='noreferrer'>
            <i class="fab fa-instagram-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/m-ammadhassan/" target="_blank" rel='noreferrer'>
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/m-ammadhassan" target="_blank" rel='noreferrer'>
            <i class="fab fa-github-square"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;

import React from 'react';

function Home() {
  return (
    <div>
     <div>
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo nec arcu pretium faucibus.</p> */}
        </section>
        <section>
          <h2>Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>Digital Marketing</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Website</p>
      </footer>
    </div>
    </div>
  );
}

export default Home;

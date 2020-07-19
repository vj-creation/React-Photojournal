import React from 'react';
import AlbumMaker from './components/AlbumMaker';
import BannerImage from './components/BannerImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
          <h1>Photography-Blog📷</h1>
          <h3>by 🔥<a href="https://www.instagram.com/vj.creation" color="#FF0000">@vj.creation</a></h3>
          <AlbumMaker />
        </div>
      </header>
    </div>
  );
}

export default App;

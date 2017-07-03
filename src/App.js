import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import SideAd from './SideAd'
import OtherArticle from './OtherArticle'
import Footer from './Footer'
import ArticleHeader from './ArticleHeader'
import Avatar from './Avatar'
import Article from './Article'
import Comment from './Comment'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <main className="expanded row">
            <div className="large-8 medium-12 columns article">
              <ArticleHeader />
              <Avatar />
              <Article />
              <Comment />
            </div>
            <SideAd />
            <OtherArticle />
          </main>
          <Footer />
          
      </div>
    );
  }
}

export default App;

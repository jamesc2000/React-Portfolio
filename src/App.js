import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
// import Testimonials from  './components/Testimonials';
// import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpacity: ''
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollDown)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollDown)
  }

  scrollDown = () => {
    let sections = [document.getElementById('home'), ... document.getElementsByTagName('section')]

    let scrollTop = document.documentElement.scrollTop
    let windowY = document.documentElement.clientHeight
    if (scrollTop >= windowY) {
      this.setState({
        navbarOpacity: 'opaque'
      })
    } else {
      this.setState({
        navbarOpacity: ''
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar classOpacity={this.state.navbarOpacity}/>
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        {/* <ContactUs resumeData={resumeData}/> */}
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
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

var sectionHeights = []
var sectionPosY = []

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpacity: '',
      currentSection: ['current', '', '', '', '']
    }
  }

  componentDidMount() {
    let sections = [document.getElementById('home'), ...document.getElementsByTagName('section')]
    
    let images = document.getElementsByTagName('img')     // Check if all images are done loading
    var loadedCount = 0                                   // by adding an event listener to each image
    for (let i=0; i < images.length; i++) {               // then increment a counter for each image loaded
      images[i].addEventListener('load', () => {          // then compare it to the number of images in the page
        loadedCount++
        if (loadedCount === images.length-1) {
          sectionHeights = sections.map(sections => (sections.offsetHeight))
          sectionHeights.reduce(function (a,b,i) {return sectionPosY[i] = a + b}, 0)
        }
      })
    }
    window.addEventListener('scroll', this.scrollDown)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollDown)
  }

  scrollDown = () => {
    let scrollTop = document.documentElement.scrollTop
    console.log(scrollTop)
    if (scrollTop < sectionPosY[0]) {
      this.setState({
        navbarOpacity: '',
        currentSection: ['current', '', '', '', '']
      })
    } else if (sectionPosY[0] < scrollTop && scrollTop < sectionPosY[1]) {
      this.setState({
        navbarOpacity: 'opaque',
        currentSection: ['', 'current', '', '', '']
      })

    } else if (sectionPosY[1] < scrollTop && scrollTop < sectionPosY[2]) {
      this.setState({
        navbarOpacity: 'opaque',
        currentSection: ['', '', 'current', '', '']
      })

    } else if (sectionPosY[2] < scrollTop && scrollTop < sectionPosY[3]) {
      this.setState({
        navbarOpacity: 'opaque',
        currentSection: ['', '', '', 'current', '']
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar classOpacity={this.state.navbarOpacity} selected={this.state.currentSection}/>
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
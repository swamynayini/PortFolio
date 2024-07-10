import { BrowserRouter as Router,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {  
  return (
    <div className="bg-black text-white h-screen">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/resume" component={Resume} /> 
          <Route exact path="/contactMe" component= {ContactMe} /> 
        </Switch>
      </Router>
      <Footer/>
    </div>
  
  );
}

export default App;

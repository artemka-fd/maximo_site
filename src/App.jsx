import './App.css'
import Header from './components/header.jsx'
import Textview from './components/textview.jsx'
import Catalogue from './components/catalogue.jsx'

function App() {
  return (
    <>
    <Header />
    <div className="wrapper mx-auto max-w-screen-lg">
      {/* functional buttons hfdgjdfgjfgjfd */}
      <Catalogue />
      {/* <Textview /> */}
    </div>
    </>
  )
}

export default App

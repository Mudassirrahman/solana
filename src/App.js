import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import NftsCard from './components/Nfts-Card/NftsCard';
import NftsMenuBar from './components/Nfts-Card/NftsMenuBar';

function App() {
  return (
   <>
    <Header />
    <Hero />
    <NftsMenuBar />
    <NftsCard />
    <Footer />
   </>
  );
}

export default App;

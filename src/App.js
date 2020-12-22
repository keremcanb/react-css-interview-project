import Header from './components/layout/Header';
import LeftSection from './components/section/LeftSection';
import RightSection from './components/section/RightSection';

const App = () => (
  <main id="main-container">
    <Header />
    <div id="section-container" >
      <LeftSection />
      <RightSection />
    </div>
  </main>
);

export default App;

import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar'
import { BrowserRouter,
  Routes,
  Route} from 'react-router-dom'
import data from './data/data.json'
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts';
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu"
import HotAccessories from "./components/HotAccessories"
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';





function App() {
  return (
    <BrowserRouter>
    
     <PreNavbar/>
     <Navbar/>
     {/* passing image banner as props */}
     <Slider start = {data.banner.start} /> 
     <Offers offer = {data.offer}/>
     <Heading text ="STAR PRODUCTS"/>
     <StarProducts starProduct = {data.starProduct}/>
     <Heading text ="Hot Accessories"/>
     
     <HotAccessoriesMenu />
     <Routes>
       <Route exact path="/music" element ={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />} />
       
       <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />} />
       
       <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />} />
       
       <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />} />
       
       <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />} />
       
       </Routes>

       <Heading text = "Product Reviews"/>

       <ProductReviews productReviews={data.productReviews}/>
       <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>
   
       <Banner  banner={data.banner}/>
       
    </BrowserRouter>

  );
}

export default App;

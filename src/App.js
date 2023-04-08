import DrawerAppBar from "./components/navbar/NavBar";
import BannerFunction from "./components/banner/Banner";
import Card from "./components/cards/Card"
import staggLogo from "./assets/Stagg Images/staggLogo.jpg";
import steveLogo from "./assets/Steve Images/esteve-logo.jpg";
import steinwayLogo from "./assets/Steinway Images/steinway-and-sons-logo.png";
import rotosoundLogo from "./assets/Rotosound Images/Header-Rotosound-Logo.png"
 
const BrandsDatas = [
  {
      id: Math.random(),
      name: "Stagg",
      logo: staggLogo,
      summery: "برند استگ یک برند بلژیکی ساخت ساز و لوازم جانبی ساز میباشد برای مطالب بیشتر کلیک کنید",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      images: []
  },
  {
      id: Math.random(),
      name: "Steve",
      logo: steveLogo,
      summery: "برند اسنیو سازنده گیتار های دست ساز اسپانیایی میباشد برای مطالب بیشتر کلیک کنید",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      images: []
  },
  {
      id: Math.random(),
      name: "Steinway and Sons",
      logo: steinwayLogo,
      summery: "برند اشتنوی اند سانز معتبر ترین برند پیانو جهان میباشد که در تمامی کنسرت های بزرگ جهان مورد استفاده است",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      images:[]
  },
  {
    id: Math.random(),
    name: "Rotosound",
    logo: rotosoundLogo,
    summery: "سیم های روتوساند ساخت کشور انگلستان است و یکی از برترین سیم های جهان است برای مطالب بیشتر کلیک کنید",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: []
  },
  {
    id: Math.random(),
    name: "Young Chang",
    summery: "پیانو های یانگ چانگ ساخت کشور کره میباشد ویکی از برترین برند های پیانو حال حاضر جهان است",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: []
  }
]

function App() {

  const CardsOfBrands = BrandsDatas.map((item) => {
    return <Card image={item.logo} brand={item.name} detail={item.summery} />
  })

  return (
    <div>
      <DrawerAppBar>
        <BannerFunction/>
        {/* <Card/> */}
        {CardsOfBrands}
        
      </DrawerAppBar>
    </div>
  );
}

export default App;

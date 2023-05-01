import DrawerAppBar from "./components/navbar/NavBar";
import BannerFunction from "./components/banner/Banner";
import Card from "./components/cards/Card";
import { useSelector } from "react-redux";
import { TextBox } from "./components/textBox/TextBox";
import Wrapper from "./Layout/Wrapper";

function App() {

  //take datas of array of brands
  const datas = useSelector((state) => state.brandsData.data)

  //map on the array of redux store for create cards of brands
  const CardsOfBrands = datas.map((item) => {
    return <Card image={item.logo} brand={item.name} detail={item.summery} />
  })

  return (
    <div>
      <DrawerAppBar>
        <BannerFunction />
        <TextBox />
        <Wrapper>
          {CardsOfBrands}
        </Wrapper>
      </DrawerAppBar>
    </div>
  );
}

export default App;

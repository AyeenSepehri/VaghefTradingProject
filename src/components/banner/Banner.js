import bannerImage from "../../assets/baner/how-to-design-the-perfect-website.jpg";
import classes from "./Banner.module.css"
import { useSelector } from "react-redux";

function BannerFunction() {
    const test = useSelector((state) => state.brandsData.data)
    console.log(test)
    return(
        <div>
            <img className={classes.container} src={bannerImage} alt="wellcome banner"/>
        </div>
    );
}


export default BannerFunction;
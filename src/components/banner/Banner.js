import bannerImage from "../../assets/baner/how-to-design-the-perfect-website.jpg";
import classes from "./Banner.module.css"

function BannerFunction() {

    return(
        <div>
            <img className={classes.container} src={bannerImage} alt="wellcome banner"/>
        </div>
    );
}


export default BannerFunction;
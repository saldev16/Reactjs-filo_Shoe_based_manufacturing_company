import Constants from "../services/constant";
import Logo from "../assets/image/logo.png";

export const getImageURL = (path) => {
    if (path.includes("http")) {
        return path;
    } else {
        return Constants.HOST + path;
    }
};

export const getDefaultImage = () => {
    return Logo;
};

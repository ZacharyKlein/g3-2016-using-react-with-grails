import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "app": {
        "width": 300,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "textAlign": "center"
    },
    "center": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 300
    },
    "inline-react-logo": {
        "display": "inline",
        "width": 40,
        "height": 40,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "about-modal": {
        "width": 400
    },
    "copyright": {
        "float": "left"
    },
    "about-react-logo": {
        "display": "inline-block",
        "width": 100,
        "height": 100,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "background": "url(\"../images/react.png\") no-repeat"
    },
    "about-webpack-logo": {
        "display": "inline-block",
        "width": 100,
        "height": 100,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "background": "url(\"../images/webpack.gif\") no-repeat"
    },
    "about-grails-logo": {
        "display": "inline-block",
        "width": 100,
        "height": 100,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "background": "url(\"../images/grails.png\") no-repeat"
    }
});
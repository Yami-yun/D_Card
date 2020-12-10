import { Dimensions } from 'react-native';

const w = Dimensions.get('window').width;

const header = 50;
const info = 80;
const h = Dimensions.get('window').height - header;

const calW = 360;
const calH = 692 - header;

const widthCal = (width:number) => { 
    return (width / calW) * w;
}

const heightCal = (height:number) => {
    return (height / calH) * h;
}

const heightCalNoInfo = (height:number) => {
    return (height / (calH  - info)) * (h  - info);
}

const test = () => {

}

const getDeviceWidth  = () => {
    return w;
}

const getDeviceHeight  = () => {
    // console.log(h);
    return h;
}

const getDeviceHeightNoInfo  = () => {
    // console.log(h - info - 24);
    return (h - info - 24);
}

export {widthCal, heightCal, test, getDeviceWidth, getDeviceHeight, heightCalNoInfo, getDeviceHeightNoInfo};
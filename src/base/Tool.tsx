import { Dimensions } from 'react-native';

// get device width, height, ok

const w = Dimensions.get('window').width;       // app total width

const header = 50;              // app header height
const info = 80;                // app info height
const h = Dimensions.get('window').height - header;

// cal == develop device(note10)
const calW = 360;
const calH = 692 - header;

// user device width
const widthCal = (width:number) => { 
    return (width / calW) * w;
}

// user device height
const heightCal = (height:number) => {
    return (height / calH) * h;
}

// user device cal height - info height
const heightCalNoInfo = (height:number) => {
    return (height / (calH  - info)) * (h  - info);
}

const getDeviceWidth  = () => {
    return w;
}

const getDeviceHeight  = () => {
    return h;
}

const getDeviceHeightNoInfo  = () => {
    return (h - info - 24);
}

export {widthCal, heightCal, getDeviceWidth, getDeviceHeight, heightCalNoInfo, getDeviceHeightNoInfo};
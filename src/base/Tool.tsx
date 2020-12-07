import { Dimensions } from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


interface Props{
    t?:string;
    d:any;
};

const log = ({t, d}:Props) => {
    if(t === undefined){
        console.log("test : ", d);    
    }
    else{
        console.log(t, " : ", d);
    }
}

const widthCal = (width:number) => {
    
    return width / w * 100;
}

const heightCal = (height:number) => {
    // log({d:h});
    log({d:height / h * 100});
    return height / h * 100;
}




export {widthCal, heightCal};
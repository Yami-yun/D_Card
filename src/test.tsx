import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';

// import ImagePicker from 'react-native-image-picker';

import * as ImagePicker from './imagePicker/index';


function Test(){
    const [response, setResponse] = React.useState(null);

    function pickImg() { 
        ImagePicker.launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
              setResponse(response);
              console.log(response);
            },
          )
    };


  return(
    <>
        <TouchableOpacity style={{width:30, height:30}} onPress={()=>pickImg()}>
            <Text>test</Text>
        </TouchableOpacity>  
  </>
  );
  
}

                
export default Test;
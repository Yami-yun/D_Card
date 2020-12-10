import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';

import ImagePicker from 'react-native-image-picker';


function Test(){
    const [ img, setImageSource ] = useState("");  // 이미지를 img변수에 할당시킬겁니다!

    function pickImg() { 
        const options = {
            title: 'Select Avatar', //이미지 선택할 때 제목입니다 ( 타이틀 ) 
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }], // 선택 버튼을 커스텀 할 수 있습니다.
            storageOptions: {
            skipBackup: true,	// ios인 경우 icloud 저장 여부 입니다!
            path: 'images',
            },
        };
    
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
            console.log('User cancelled image picker');
            } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            } else {
            setImageSource(response.uri); // 저는 여기서 uri 값을 저장 시킵니다 !
            }
        });
    };


  return(
    <>
    {img ?
        <TouchableOpacity  onPress={()=>pickImg()}>
            <Image source={{uri: img}} />
        </TouchableOpacity>  
        :
        <TouchableOpacity  onPress={()=>pickImg()}>
            <Image source={require('./img/logo.png')} />
        </TouchableOpacity>
    }
  </>
  );
  
}

                
export default Test;
import React, {useEffect} from 'react';
import {
    useSetInstructionDataContext,
    useSetPhotoZoneDataListContext,
    useSetHealthInfoDataListContext,
    useSetEmergencyCallDataListContext,

} from './base/context';

interface Props{
    children: JSX.Element | Array<JSX.Element>;
};

// app data load after running app is complete


function DataLoad({children}:Props){

    let RNFS = require('react-native-fs');
    const baseSRC = RNFS.ExternalDirectoryPath;

    const dataPath = `${baseSRC}/data.json`;

    // console.log(`[S] : context.tsx, [F] : DataLoad, [T] : LOAD, [D] : DATA_LOAD, `);
    // RNFS.readFile(dataPath).then(res=>{
    //     appData = JSON.parse(res);
    //     initInstructionData = {...appData.INSTRUCTION_DATA};
    //     savePhotoZoneId = appData.PHOTO_DATA.photoZoneId;
    //     initPhotoZoneDataList = {...appData.PHOTO_DATA.photoZoneDataList};
    //     saveHealthInfoId = appData.HEALTH_INFO_DATA.healthInfoId;
    //     initHealthInfoList = {...appData.HEALTH_INFO_DATA.healthInfoDataList};
    //     saveEmergencyCallId = appData.EMERGENCY_DATA.emergencyCallId;
    //     initEmergencyCallList = {...appData.EMERGENCY_DATA.emergencyCallDataList};
    // })

    return(<>
    {children}
    </>);
};
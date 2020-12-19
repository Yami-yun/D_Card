import React, {
    useReducer,
    createContext,
    useContext,
    useState,
} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

// instruction data form
const initInstructionData =
{
    id:9999,
    name:"",
    birth:{
        y:"",
        m:"",
        d:"",
    },
    guardCall:{
        numFront:"",
        numMiddle:"",
        numBack:"",
    },
    myCall:{
        numFront:"",
        numMiddle:"",
        numBack:"",
    },
    address:"",
    detail:"",
    uri:"",
};

// global photo id value on photo zone Page
let savePhotoZoneId = 0;

// photo zone data form
const initPhotoZoneData = {
    id:"",
    title:"",
    description:"",
    uri:"",
    width:"",
    height:"",
};
const initPhotoZoneDataList = [];

// global photo id value on health info Page
let saveHealthInfoId = 0;

// importance : 1, 2 ,3 작을 수록 중요!
// health info data form
const initHealthInfoData = {
    id:"",
    title:"",
    importance:0,
    description:"",
    uri:"",
    width:"",
    height:"",
};
const initHealthInfoList = [];

// global photo id value on emergency call Page
let saveEmergencyCallId = 0;
// emergency call data form
const initEmergencyCallData = {
    id:"",
    title:"",
    call:{
        numFront:"",
        numMiddle:"",
        numBack:"",
    },
    importance:0,
    description:"",
};

const initEmergencyCallList = [];

let appData ={
    SETTING_DATA:{
        initApp:true,
    },
    INSTRUCTION_DATA:{
        id:9999,
        name:"",
        birth:{
            y:"",
            m:"",
            d:"",
        },
        guardCall:{
            numFront:"",
            numMiddle:"",
            numBack:"",
        },
        myCall:{
            numFront:"",
            numMiddle:"",
            numBack:"",
        },
        address:"",
        detail:"",
        uri:"",
    },
    PHOTO_DATA:{
        photoZoneId : 0,        // savePhotoZoneId
        photoZoneDataList : [], //initPhotoZoneDataList
    },
    HEALTH_INFO_DATA:{
        healthInfoId : 0,        // saveHealthInfoId
        healthInfoDataList : [], //initHealthInfoList
    },
    EMERGENCY_DATA:{
        emergencyCallId : 0,        // saveEmergencyCallId
        emergencyCallDataList : [], //initEmergencyCallList
    },
    
};

// RNFS labrary object , read, write folder
const RNFS = require('react-native-fs');
const baseSRC = RNFS.ExternalDirectoryPath;

interface dataSaveProps{
    type:string;
    data:any;
};

// app data save while running app
const DataSave = async({type, data}:dataSaveProps) =>{
    try {
        await AsyncStorage.setItem(`${type}`, JSON.stringify(data));
        console.log(`[S] : context.tsx, [F] : DataSave, [T] : ${type}, [D] : DATA_SAVE, appData}`);
        console.log(`1. appData :`);
        console.log(data);
    } catch (e) {
        // saving error
        console.log(`[S] : context.tsx, [F] : DataSave, [T] : ${type}, [D] : ${type}_DATA_SAVE_ERROR`);
        console.log(`1. appData :, `);
        console.log(data);
        console.log(`2. Error Message :, `);
        console.log(e.message);
    }
}

// saved data delete
const DataDelete = async () => {
    try {
        await AsyncStorage.removeItem('SETTING_DATA');
        await AsyncStorage.removeItem('INSTRUCTION_DATA');
        await AsyncStorage.removeItem('PHOTO_DATA');
        await AsyncStorage.removeItem('HEALTH_INFO_DATA');
        await AsyncStorage.removeItem('EMERGENCY_DATA');
    } catch(e) {
        console.log(`[S] : context.tsx, [F] : DataDelete, [T] : delete, [D] : `);
        console.log(`1. Error Message :, `);
        console.log(e.message);
    }
    console.log('Done.')
}
// DataDelete();
interface imgProcessProps{
    process:"ADD" | "MODIFY" | "DELETE";
    uri:string;
    id:number;
};

// (process : img process type, uri: img name, id: img id,)
// img add, modify, delete process function
function ImgProcss({process, uri, id}:imgProcessProps){
    if(process === "ADD"){
        const readImgPath = `${RNFS.ExternalDirectoryPath}/${uri}`;
        const imgPath = `${RNFS.ExternalDirectoryPath}/${id}_${uri}`;
        RNFS.copyFile(readImgPath, imgPath)
            .then(res => {
                console.log(`[S] : context.tsx, [F] : ImgProcss, [T] : ADD, [D] : IMG_WRITE_COMPLETE, ${imgPath}`);
            })
            .catch(err => {
                console.log(`[S] : context.tsx, [F] : ImgProcss, [T] : ADD, [D] : IMG_WRITE_ERROR`);
                console.log(`1. readImgPath :, ${readImgPath}`);
                console.log(`2. imgPath :, ${imgPath}`);
                console.log(`3. Error Message :, ${err.message}`);
            });
    }
    else if(process === "MODIFY"){
        const readImgPath = `${RNFS.ExternalDirectoryPath}/${uri}`;
        const imgPath = `${RNFS.ExternalDirectoryPath}/${id}_${uri}`;
        RNFS.copyFile(readImgPath, imgPath)
            .then(res => {
                console.log(`[S] : context.tsx, [F] : ImgProcss, [T] : MODIFY, [D] : IMG_MODIFY_COMPLETE, ${imgPath}`);
            })
            .catch(err => {
                console.log(`[S] : context.tsx, [F] : ImgProcss, [T] : MODIFY, [D] : IMG_MODIFY_ERROR`);
                console.log(`1. readImgPath :, ${readImgPath}`);
                console.log(`2. imgPath :, ${imgPath}`);
                console.log(`3. Error Message :, ${err.message}`);
            });
    }
    else if(process === "DELETE"){
        const readImgPath = `${RNFS.ExternalDirectoryPath}/${id}_${uri}`;
        RNFS.unlink(readImgPath)
            .then(res => {
                console.log(`[S] : context.tsx, [F] : ImgProcss, [T] : DELETE, [D] : IMG_DELETE_COMPLETE, ${readImgPath}`);
            })
            .catch(err => {
                console.log(`[S] : context.tsx, [F] : ImgProcss, [T] : DELETE, [D] : IMG_DELETE_ERROR`);
                console.log(`1. readImgPath: ${readImgPath}`);
                console.log(`2. Error Message :, ${err.message}`);
            });
    }
}

// (state : user InstructionData before input, action : input user data )
// instruction add, modify function (add === modify because data is single, 단일데이터라서)
function InstructionDataReducer(state, action){
    switch(action.type){
        case "MODIFY":

            if(action.data.uri !== "" && action.data.uri !== undefined){
                ImgProcss({process:"DELETE", uri:state.uri, id:state.id });
                ImgProcss({process:action.type, uri:action.data.uri, id:action.data.id });
            }
            else{
                console.log("[S] : context.tsx, [F] : InstructionDataReducer, [T] : MODIFY, [D] : No Input URI");
            }
            state = {...action.data};
            DataSave({type:"INSTRUCTION_DATA", data:state});
            console.log(`[S] : context.tsx, [F] : InstructionDataReducer, [T] : MODIFY, [D] : ${state}`);
            return state

        case "INIT":
            console.log("[S] : context.tsx, [F] : InstructionDataReducer, [T] : INIT, [D] : ");
            state = action.data;
            console.log(state);
            return state;
    }
}

// (state : user photo zone data before input, action : input user data )
// photo zone add, modify, delete function
function PhotoZoneDataListReducer(state, action){
    switch(action.type){
        case "ADD":
            state.push({...action.data, id:savePhotoZoneId});
            if(action.data.uri !== "" && action.data.uri !== undefined){
                ImgProcss({process:action.type, uri:action.data.uri, id:savePhotoZoneId});
            }
            else{
                console.log("[S] : context.tsx, [F] : PhotoZoneDataListReducer, [T] : ADD, [D] : No Input URI");
            }
            savePhotoZoneId += 1;       // id ++ after data push
            console.log("[S] : context.tsx, [F] : PhotoZoneDataListReducer, [T] : ADD, [D] : ");
            console.log(state);
            DataSave({type:"PHOTO_DATA", data:{photoZoneId:savePhotoZoneId, photoZoneDataList:state}});
            return state;

        case "MODIFY":
            if(action.data.uri !== "" && action.data.uri !== undefined){
                ImgProcss({process:"DELETE", uri:state[action.index].uri, id:state[action.index].id });
                ImgProcss({process:action.type, uri:action.data.uri, id:state[action.index].id });
            }
            else{
                console.log("[S] : context.tsx, [F] : PhotoZoneDataListReducer, [T] : MODIFY, [D] : No Input URI");
            }
            state[action.index] = {...action.data};
            console.log(state);
            DataSave({type:"PHOTO_DATA", data:{photoZoneId:savePhotoZoneId, photoZoneDataList:state}});
            
            return state;

        case "DELETE":
            let index = -1;
            let cmp = [];

            // current page number === index => delete
            state.forEach((data)=>{
                index += 1;
                if(index !== action.data){
                    cmp.push(data);
                }else{
                    ImgProcss({process:action.type, uri:data.uri, id:data.id});
                }
            });
            console.log("[S] : context.tsx, [F] : PhotoZoneDataListReducer, [T] : DELETE, [D] : ");
            console.log(cmp);
            console.log(action.data);
            //check
            DataSave({type:"PHOTO_DATA", data:{photoZoneId:savePhotoZoneId, photoZoneDataList:cmp}});
            return cmp;

        // load app data
        case "INIT":
            console.log("[S] : context.tsx, [F] : PhotoZoneDataListReducer, [T] : INIT, [D] : ");
            state = action.data.photoZoneDataList;
            savePhotoZoneId = action.data.photoZoneId;
            
            console.log(action.data);
            console.log(state);
            return state;
    }
}

// (state : user health info data before input, action : input user data )
// health info page add, modify, delete function
function HealthInfoDataListReducer(state, action){
    switch(action.type){
        case "ADD":

            state.push({...action.data, id:saveHealthInfoId});
            if(action.data.uri !== "" && action.data.uri !== undefined){
                ImgProcss({process:action.type, uri:action.data.uri, id:saveHealthInfoId});
            }
            else{
                console.log("[S] : context.tsx, [F] : HealthInfoDataListReducer, [T] : ADD, [D] : No Input URI");
            }
            saveHealthInfoId += 1;      // id ++ after data push
            console.log("[S] : context.tsx, [F] : HealthInfoDataListReducer, [T] : ADD, [D] : ");
            console.log(action.data);
            DataSave({type:"HEALTH_INFO_DATA", data:{healthInfoDataList:state, healthInfoId:saveHealthInfoId} });
            return state;

        case "MODIFY":
            if(action.data.uri !== "" && action.data.uri !== undefined){
                ImgProcss({process:"DELETE", uri:state[action.index].uri, id:state[action.index].id });
                ImgProcss({process:action.type, uri:action.data.uri, id:state[action.index].id });
            }
            else{
                console.log("[S] : context.tsx, [F] : HealthInfoDataListReducer, [T] : MODIFY, [D] : No Input URI");
            }
            state[action.index] = {...action.data};
            console.log("[S] : context.tsx, [F] : HealthInfoDataListReducer, [T] : MODIFY, [D] : ");
            console.log(state);
            DataSave({type:"HEALTH_INFO_DATA", data:{healthInfoDataList:state, healthInfoId:saveHealthInfoId} });
            return state;

        // current page number === index => delete
        case "DELETE":
            let index = -1;
            let cmp = [];
            state.forEach((data)=>{
                index += 1;
                if(index !== action.data){
                    cmp.push(data);
                }else{
                    ImgProcss({process:action.type, uri:data.uri, id:data.id});
                }
            });
            console.log("[S] : context.tsx, [F] : HealthInfoDataListReducer, [T] : DELETE, [D] : ");
            console.log(state);
            DataSave({type:"HEALTH_INFO_DATA", data:{healthInfoDataList:cmp, healthInfoId:saveHealthInfoId} });
            
            return cmp;
        case "INIT":
            console.log("[S] : context.tsx, [F] : HealthInfoDataListReducer, [T] : INIT, [D] : ");
            state = action.data.healthInfoDataList;
            savePhotoZoneId = action.data.healthInfoId;
            
            console.log(action.data);
            console.log(state);
            return state;
    }
}

// (state : user emergency call data before input, action : input user data )
// emergency call page add, modify, delete function
function EmergencyCallDataListReducer(state, action){

    switch(action.type){
        case "ADD":
            state.push({...action.data, id:saveEmergencyCallId});
            saveEmergencyCallId += 1;      // id ++ after data push
            console.log("[S] : context.tsx, [F] : EmergencyCallDataListReducer, [T] : ADD, [D] : ");
            console.log(state);
            DataSave({type:"EMERGENCY_DATA", data:{emergencyCallDataList:state, emergencyCallId:saveEmergencyCallId} });
            return state;

        case "MODIFY":
            let cmp = state.filter((data)=> data.id === action.index);
            cmp = {...action.data};
            state = state.filter((data)=> data.id !== action.index);
            state.push(cmp);
            console.log("[S] : context.tsx, [F] : EmergencyCallDataListReducer, [T] : MODIFY, [D] : ");
            console.log(state);
            DataSave({type:"EMERGENCY_DATA", data:{emergencyCallDataList:state, emergencyCallId:saveEmergencyCallId} });
            return state;

        case "DELETE":
            state = state.filter(data=>data.id !== action.data );
            console.log("[S] : context.tsx, [F] : EmergencyCallDataListReducer, [T] : DELETE, [D] : ");
            console.log(state);
            DataSave({type:"EMERGENCY_DATA", data:{emergencyCallDataList:state, emergencyCallId:saveEmergencyCallId} });
            return state;

        case "INIT":
            console.log("[S] : context.tsx, [F] : EmergencyCallDataListReducer, [T] : INIT, [D] : ");
            state = action.data.emergencyCallDataList;
            savePhotoZoneId = action.data.emergencyCallId;
            console.log(action.data);
            console.log(state);
            return state;
    }
}

// init (photo zone, health info, emergency call) page number value
const initPagingData = {
    PHOTO_MAIN:0,
    HEALTH_INFO_MAIN:0,
    EMERGENCY_CALL_MAIN:0,
};

// Screen state
const screenState = {
    screen:"MAIN",
    stage:0,
};

// side menu context
const MenuStateContext = createContext<boolean>(undefined);
const SetMenuStateContext = createContext(undefined);

// screen change context
const ScreenDisplayStateContext = createContext(undefined);
const SetScreenDisplayStateContext = createContext(undefined);

// instruction page data context
const InstructionDataContext = createContext(undefined);
const SetInstructionDataContext = createContext(undefined);

// photo zone page data context
const PhotoZoneDataListContext = createContext(undefined);
const SetPhotoZoneDataListContext = createContext(undefined);
const PhotoZoneDataContext = createContext(undefined);
const SetPhotoZoneDataContext = createContext(undefined);

// paging data context
const PagingDataContext = createContext(undefined);
const SetPagingDataContext = createContext(undefined);

// health info page data context
const HealthInfoDataContext= createContext(undefined);
const SetHealthInfoDataContext= createContext(undefined);
const HealthInfoDataListContext = createContext(undefined);
const SetHealthInfoDataListContext = createContext(undefined);

// emergency call data context
const SetEmergencyCallDataContext = createContext(undefined);
const EmergencyCallDataContext = createContext(undefined);
const SetEmergencyCallDataListContext = createContext(undefined);
const EmergencyCallDataListContext = createContext(undefined);

// app info page data context
const AppInfoPageContext= createContext(undefined);
const SetAppInfoPageContext= createContext(undefined);

const FirstAppContext= createContext(undefined);
const SetFirstAppContext= createContext(undefined);

interface Props{
    children: JSX.Element | Array<JSX.Element>;
};

export function AppStateProvider({children}:Props){

    const [menuState, setMenuState] = useState<boolean>(false);
    const [screenDisplayState, setScreenDisplayState] = useState(screenState);
    const [instructionData, setInstructinoData] = useReducer(InstructionDataReducer, initInstructionData);

    const [photoZoneDataList, setPhotoZoneDataList] = useReducer(PhotoZoneDataListReducer, initPhotoZoneDataList);
    const [photoZoneData, setPhotoZoneData] = useState(initPhotoZoneData);

    const [pagingData, setPagingData] = useState(initPagingData);

    const [healthInfoData, setHealthInfoData] = useState(initHealthInfoData);
    const [healthInfoDataList, setHealthInfoDataList] = useReducer(HealthInfoDataListReducer, initHealthInfoList);

    const [emergencyCallData, setEmergencyCallData] = useState(initEmergencyCallData);
    const [emergencyCallDataList, setEmergencyCallDataList] = useReducer(EmergencyCallDataListReducer, initEmergencyCallList);

    const [firstApp, setFirstApp] = useState(false);

    const [appInfoPage, setAppInfoPage] = useState(0);

    return(
        <MenuStateContext.Provider value={menuState}>
            <SetMenuStateContext.Provider value={setMenuState}>
                <ScreenDisplayStateContext.Provider value={screenDisplayState}>
                    <SetScreenDisplayStateContext.Provider value={setScreenDisplayState}>
                        <SetInstructionDataContext.Provider value={setInstructinoData}>
                            <InstructionDataContext.Provider value={instructionData}>
                                <PhotoZoneDataListContext.Provider value={photoZoneDataList}>
                                    <SetPhotoZoneDataListContext.Provider value={setPhotoZoneDataList}>
                                        <PhotoZoneDataContext.Provider value={photoZoneData}>
                                            <SetPhotoZoneDataContext.Provider value={setPhotoZoneData}>
                                                <PagingDataContext.Provider value={pagingData}>
                                                    <SetPagingDataContext.Provider value={setPagingData}>
                                                        <HealthInfoDataContext.Provider value={healthInfoData}>
                                                            <SetHealthInfoDataContext.Provider value={setHealthInfoData}>
                                                                <HealthInfoDataListContext.Provider value={healthInfoDataList}>
                                                                    <SetHealthInfoDataListContext.Provider value={setHealthInfoDataList}>
                                                                        <EmergencyCallDataContext.Provider value={emergencyCallData}>
                                                                            <SetEmergencyCallDataContext.Provider value={setEmergencyCallData}>
                                                                                <EmergencyCallDataListContext.Provider value={emergencyCallDataList}>
                                                                                    <SetEmergencyCallDataListContext.Provider value={setEmergencyCallDataList}>
                                                                                        <AppInfoPageContext.Provider value={appInfoPage}>
                                                                                            <SetAppInfoPageContext.Provider value={setAppInfoPage}>
                                                                                                <FirstAppContext.Provider value={firstApp}>
                                                                                                    <SetFirstAppContext.Provider value={setFirstApp}>
                                                                                                        {children}
                                                                                                    </SetFirstAppContext.Provider>
                                                                                                </FirstAppContext.Provider>
                                                                                            </SetAppInfoPageContext.Provider>
                                                                                        </AppInfoPageContext.Provider>
                                                                                    </SetEmergencyCallDataListContext.Provider>
                                                                                </EmergencyCallDataListContext.Provider>
                                                                            </SetEmergencyCallDataContext.Provider>
                                                                        </EmergencyCallDataContext.Provider>
                                                                    </SetHealthInfoDataListContext.Provider>
                                                                </HealthInfoDataListContext.Provider>
                                                            </SetHealthInfoDataContext.Provider>
                                                        </HealthInfoDataContext.Provider>
                                                    </SetPagingDataContext.Provider>
                                                </PagingDataContext.Provider>
                                            </SetPhotoZoneDataContext.Provider>
                                        </PhotoZoneDataContext.Provider>
                                    </SetPhotoZoneDataListContext.Provider>
                                </PhotoZoneDataListContext.Provider>
                            </InstructionDataContext.Provider>
                        </SetInstructionDataContext.Provider>
                    </SetScreenDisplayStateContext.Provider>
                </ScreenDisplayStateContext.Provider>
            </SetMenuStateContext.Provider>
        </MenuStateContext.Provider>
    );
}

export function useFirstAppContext(){
    const context = useContext(FirstAppContext);
    return context;
}

export function useSetFirstAppContext(){
    const context = useContext(SetFirstAppContext);
    return context;
}

export function useAppInfoPageContext(){
    const context = useContext(AppInfoPageContext);
    return context;
}

export function useSetAppInfoPageContext(){
    const context = useContext(SetAppInfoPageContext);
    return context;
}

export function useEmergencyCallDataListContext(){
    const context = useContext(EmergencyCallDataListContext);
    return context;
}

export function useSetEmergencyCallDataListContext(){
    const context = useContext(SetEmergencyCallDataListContext);
    return context;
}

export function useEmergencyCallDataContext(){
    const context = useContext(EmergencyCallDataContext);
    return context;
}

export function useSetEmergencyCallDataContext(){
    const context = useContext(SetEmergencyCallDataContext);
    return context;
}

export function useHealthInfoDataListContext(){
    const context = useContext(HealthInfoDataListContext);
    return context;
}

export function useSetHealthInfoDataListContext(){
    const context = useContext(SetHealthInfoDataListContext);
    return context;
}

export function useHealthInfoDataContext(){
    const context = useContext(HealthInfoDataContext);
    return context;
}

export function useSetHealthInfoDataContext(){
    const context = useContext(SetHealthInfoDataContext);
    return context;
}

export function usePagingDataContext(){
    const context = useContext(PagingDataContext);
    return context;
}

export function useSetPagingDataContext(){
    const context = useContext(SetPagingDataContext);
    return context;
}

export function usePhotoZoneDataContext(){
    const context = useContext(PhotoZoneDataContext);
    return context;
}

export function useSetPhotoZoneDataContext(){
    const context = useContext(SetPhotoZoneDataContext);
    return context;
}

export function usePhotoZoneDataListContext(){
    const context = useContext(PhotoZoneDataListContext);
    return context;
}

export function useSetPhotoZoneDataListContext(){
    const context = useContext(SetPhotoZoneDataListContext);
    return context;
}

export function useSetInstructionDataContext(){
    const context = useContext(SetInstructionDataContext);
    return context;
}

export function useInstructionDataContext(){
    const context = useContext(InstructionDataContext);
    return context;
}

export function useScreenDisplayStateContext(){
    const context = useContext(ScreenDisplayStateContext);
    return context;
}

export function useSetScreenDisplayStateContext(){
    const context = useContext(SetScreenDisplayStateContext);
    return context;
}

export function useMenuStateContext(){
    const context = useContext(MenuStateContext);
    return context;
}

export function useSetMenuStateContext(){
    const context = useContext(SetMenuStateContext);
    return context;
}

// 비구조 할당 배열에 값이 있는지 여부 확인
export const ChekIsEmptyData = (data) => {
    let isCheck = false;
    for (let key in data){
        if(data[key].length !== 0 && data[key].length !== undefined){
            return true;
        }
        if(data[key].length === undefined){
            isCheck = ChekIsEmptyData(data[key]);
        }

        // data에 값이 들어가 있다면 true 반환
        if(isCheck){
            return true;
        }
    }
};


export {initPhotoZoneData, initHealthInfoData, initEmergencyCallData, baseSRC, DataDelete, DataSave};
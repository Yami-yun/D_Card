import React, {
    useReducer,
    createContext,
    useContext,
    useState,
} from "react";



const initInstructionData =
{
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


function InstructionDataReducer(state, action){
    switch(action.type){
        case "MODIFY":
            let birthCmp= action.data.birth;
            let gCall = action.data.guardCall;
            let mCall = action.data.myCall;

            return state = {

                name:action.data.name,
                birth : {
                    y:birthCmp.y,
                    m:birthCmp.m,
                    d:birthCmp.d,
                },
                guardCall : {
                    numFront:gCall.numFront,
                    numMiddle:gCall.numMiddle,
                    numBack:gCall.numBack,
                },
                myCall : {
                    numFront:mCall.numFront,
                    numMiddle:mCall.numMiddle,
                    numBack:mCall.numBack,
                },
                address:action.data.address,
                detail:action.data.detail,
                uri:action.data.uri,
            };
    }
}

const initPhotoZoneData = {
    id:"",
    title:"",
    description:"",
    uri:"",
    width:"",
    height:"",
};

const initPhotoZoneDataList = [];


interface imgProcessProps{
    process:"ADD" | "MODIFY" | "DELETE";
    uri:string;
    id:number;
};
let RNFS = require('react-native-fs');
const baseSRC = RNFS.ExternalDirectoryPath;
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
                // console.log(err.message);
            });
    }
    
}

// function DataSave(){

//     const readImgPath = `${RNFS.ExternalDirectoryPath}/${uri}`;
//     const imgPath = `${RNFS.ExternalDirectoryPath}/${id}_${uri}`;
//     RNFS.copyFile(readImgPath, imgPath)
//         .then(res => {
//             console.log(`[S] : context.tsx, [F] : ImgProcss, [T] : ADD, [D] : IMG_WRITE_COMPLETE, ${imgPath}`);
//         })
//         .catch(err => {
//             console.log(`[S] : context.tsx, [F] : ImgProcss, [T] : ADD, [D] : IMG_WRITE_ERROR`);
//             console.log(`1. readImgPath :, ${readImgPath}`);
//             console.log(`2. imgPath :, ${imgPath}`);
//             console.log(`3. Error Message :, ${err.message}`);
//         });

// }
function DataLoad(){}


let savePhotoZoneId = 0;
function PhotoZoneDataListReducer(state, action){
    switch(action.type){
        case "ADD":
            
            if(action.data.uri !== "" && action.data.uri !== undefined){
                // ImgProcss({process:"DELETE", uri:action.data.uri, id:savePhotoZoneId });
                ImgProcss({process:action.type, uri:action.data.uri, id:savePhotoZoneId});
            }
            else{
                console.log("[S] : context.tsx, [F] : PhotoZoneDataListReducer, [T] : ADD, [D] : No Input URI");
            }
            state.push({...action.data, id:savePhotoZoneId});
            savePhotoZoneId += 1;
            console.log("[S] : context.tsx, [F] : PhotoZoneDataListReducer, [T] : ADD, [D] : ");
            console.log(state);

            isADD= true;
            return state;

        case "MODIFY":
            // console.log()
            if(action.data.uri !== "" && action.data.uri !== undefined){
                ImgProcss({process:"DELETE", uri:state[action.index].uri, id:state[action.index].id });
                ImgProcss({process:action.type, uri:action.data.uri, id:state[action.index].id });
            }
            else{
                console.log("[S] : context.tsx, [F] : PhotoZoneDataListReducer, [T] : MODIFY, [D] : No Input URI");
            }
            state[action.index] = {...action.data};
            console.log(state);
            return state;

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
            console.log("[S] : context.tsx, [F] : PhotoZoneDataListReducer, [T] : DELETE, [D] : ");
            console.log(state);

            return cmp;

    }
}


// importance : 1, 2 ,3 작을 수록 중요!
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

let saveHealthInfoId = 0;
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
            saveHealthInfoId += 1;
            console.log("[S] : context.tsx, [F] : HealthInfoDataListReducer, [T] : ADD, [D] : ");
            console.log(action.data);

            return state;

        case "MODIFY":
            // console.log()
            if(action.data.uri !== "" && action.data.uri !== undefined){
                ImgProcss({process:"DELETE", uri:state[action.index].uri, id:state[action.index].id });
                ImgProcss({process:action.type, uri:action.data.uri, id:state[action.index].id });
            }
            else{
                console.log("[S] : context.tsx, [F] : HealthInfoDataListReducer, [T] : MODIFY, [D] : No Input URI");
            }
            state[action.index] = {...action.data};
            console.log(state);
            return state;

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

            return cmp;

    }
}

let saveEmergencyCallId = 0;
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

let isADD = false;

function EmergencyCallDataListReducer(state, action){

    switch(action.type){
        case "ADD":
            state.push({...action.data, id:saveEmergencyCallId})
            saveEmergencyCallId += 1;
            console.log("[S] : context.tsx, [F] : EmergencyCallDataListReducer, [T] : ADD, [D] : ");
            console.log(state);

            

            return state;

        case "MODIFY":
            let cmp = state.filter((data)=> data.id === action.index);
            cmp = {...action.data};
            state = state.filter((data)=> data.id !== action.index);
            state.push(cmp);
            console.log("[S] : context.tsx, [F] : EmergencyCallDataListReducer, [T] : MODIFY, [D] : ");
            console.log(state);
            return state;

        case "DELETE":

            state = state.filter(data=>data.id !== action.data );
            console.log("[S] : context.tsx, [F] : EmergencyCallDataListReducer, [T] : DELETE, [D] : ");
            console.log(state);
            return state;

    }
}

const initPagingData = {
    PHOTO_MAIN:0,
    HEALTH_INFO_MAIN:0,
    EMERGENCY_CALL_MAIN:0,
};

const screenState = {
    screen:"MAIN",
    stage:0,
};

const MenuStateContext = createContext<boolean>(undefined);
const SetMenuStateContext = createContext(undefined);

const ScreenDisplayStateContext = createContext(undefined);
const SetScreenDisplayStateContext = createContext(undefined);

const InstructionDataContext = createContext(undefined);
const SetInstructionDataContext = createContext(undefined);

const PhotoZoneDataListContext = createContext(undefined);
const SetPhotoZoneDataListContext = createContext(undefined);
const PhotoZoneDataContext = createContext(undefined);
const SetPhotoZoneDataContext = createContext(undefined);

const PagingDataContext = createContext(undefined);
const SetPagingDataContext = createContext(undefined);

const HealthInfoDataContext= createContext(undefined);
const SetHealthInfoDataContext= createContext(undefined);
const HealthInfoDataListContext = createContext(undefined);
const SetHealthInfoDataListContext = createContext(undefined);

const SetEmergencyCallDataContext = createContext(undefined);
const EmergencyCallDataContext = createContext(undefined);
const SetEmergencyCallDataListContext = createContext(undefined);
const EmergencyCallDataListContext = createContext(undefined);

const AppInfoPageContext= createContext(undefined);
const SetAppInfoPageContext= createContext(undefined);

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
                                                                                            {children}
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

export {initPhotoZoneData, initHealthInfoData, initEmergencyCallData, baseSRC, isADD};
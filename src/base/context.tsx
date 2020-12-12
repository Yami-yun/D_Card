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

const initPhotoZoneDataList = [
    {
        id:"111",
        title:"111",
        description:"111122",
        uri:"content://media/external/images/media/12076",
        width:"200",
        height:"200",
    },
    {
        id:"112",
        title:"222",
        description:"222222",
        uri:"content://media/external/images/media/12076",
        width:"200",
        height:"200",
    },
    {
        id:"113",
        title:"333",
        description:"333333",
        uri:"content://media/external/images/media/12076",
        width:"200",
        height:"200",
    },
    {
        id:"114",
        title:"444",
        description:"444444",
        uri:"content://media/external/images/media/12076",
        width:"200",
        height:"200",
    },
    {
        id:"115",
        title:"555",
        description:"555555",
        uri:"content://media/external/images/media/12076",
        width:"200",
        height:"200",
    },
];

let savePhotoZoneId = 0;
function PhotoZoneDataListReducer(state, action){

    switch(action.type){
        case "ADD":
            state.push({...action.data, id:savePhotoZoneId})
            savePhotoZoneId += 1;
            console.log("[S] : context.tsx, [F] : PhotoZoneDataListReducer, [T] : ADD, [D] : ");
            console.log(state);

            return state;

        case "MODIFY":
            // console.log()
            state[action.index] = {...action.data};
            return state;

        case "DELETE":
            let index = -1;
            let cmp = [];
            state.forEach((data)=>{
                index += 1;
                if(index !== action.data){
                    cmp.push(data);
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
    importance:"",
    description:"",
    uri:"",
    width:"",
    height:"",
};

const initHealthInfoList = [
    {
        id:"111",
        title:"111",
        description:"111111",
        importance:"0",
        uri:"content://media/external/images/media/12076",
        width:"200",
        height:"200",
    },
    {
        id:"112",
        title:"222",
        description:"222222",
        importance:"1",
        uri:"content://media/external/images/media/12076",
        width:"200",
        height:"200",
    },
    {
        id:"111",
        title:"333",
        description:"333333",
        importance:"1",
        uri:"content://media/external/images/media/12076",
        width:"200",
        height:"200",
    },
    {
        id:"111",
        title:"444",
        description:"444444",
        importance:"2",
        uri:"content://media/external/images/media/12076",
        width:"200",
        height:"200",
    },
];

let saveHealthInfoId = 0;
function HealthInfoDataListReducer(state, action){

    switch(action.type){
        case "ADD":
            state.push({...action.data, id:saveHealthInfoId})
            savePhotoZoneId += 1;
            console.log("[S] : context.tsx, [F] : HealthInfoDataListReducer, [T] : ADD, [D] : ");
            console.log(state);

            return state;

        case "MODIFY":
            // console.log()
            state[action.index] = {...action.data};
            return state;

        case "DELETE":
            let index = -1;
            let cmp = [];
            state.forEach((data)=>{
                index += 1;
                if(index !== action.data){
                    cmp.push(data);
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
    importance:"",
    description:"",
};

const initEmergencyCallList = [
    {
        id:"1",
        title:"1",
        call:{
            numFront:"010",
            numMiddle:"1111",
            numBack:"1111",
        },
        importance:"0",
        description:"1111",
    },
    {
        id:"2",
        title:"2",
        call:{
            numFront:"010",
            numMiddle:"2222",
            numBack:"2222",
        },
        importance:"1",
        description:"2222",
    },
    {
        id:"3",
        title:"3",
        call:{
            numFront:"010",
            numMiddle:"3333",
            numBack:"3333",
        },
        importance:"2",
        description:"3333",
    },
    {
        id:"4",
        title:"4",
        call:{
            numFront:"010",
            numMiddle:"4444",
            numBack:"4444",
        },
        importance:"2",
        description:"4444",
    },
];

function EmergencyCallDataListReducer(state, action){

    switch(action.type){
        case "ADD":
            state.push({...action.data, id:saveEmergencyCallId})
            saveEmergencyCallId += 1;
            console.log("[S] : context.tsx, [F] : EmergencyCallDataListReducer, [T] : ADD, [D] : ");
            console.log(state);

            return state;

        case "MODIFY":
            state[action.index] = {...action.data};
            return state;

        case "DELETE":
            let index = -1;
            let cmp = [];
            state.forEach((data)=>{
                index += 1;
                if(index !== action.data){
                    cmp.push(data);
                }             
            });
            console.log("[S] : context.tsx, [F] : EmergencyCallDataListReducer, [T] : DELETE, [D] : ");
            console.log(state);

            return ;

    }
}

const initPagingData = {
    PHOTO_MAIN:0,
    HEALTH_INFO_MAIN:0,
    EMERGENCY_CALL_MAIN:0,
};

const MenuStateContext = createContext<boolean>(undefined);
const SetMenuStateContext = createContext(undefined);

const ScreenDisplayStateContext = createContext<string>(undefined);
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
interface Props{
    children: JSX.Element | Array<JSX.Element>;
};

export function AppStateProvider({children}:Props){

    const [menuState, setMenuState] = useState<boolean>(false);
    const [screenDisplayState, setScreenDisplayState] = useState<string>("MAIN");
    const [instructionData, setInstructinoData] = useReducer(InstructionDataReducer, initInstructionData);

    const [photoZoneDataList, setPhotoZoneDataList] = useReducer(PhotoZoneDataListReducer, initPhotoZoneDataList);
    const [photoZoneData, setPhotoZoneData] = useState(initPhotoZoneData);

    const [pagingData, setPagingData] = useState(initPagingData);

    const [healthInfoData, setHealthInfoData] = useState(initHealthInfoData);
    const [healthInfoDataList, setHealthInfoDataList] = useReducer(HealthInfoDataListReducer, initHealthInfoList);

    const [emergencyCallData, setEmergencyCallData] = useState(initEmergencyCallData);
    const [emergencyCallDataList, setEmergencyCallDataList] = useReducer(EmergencyCallDataListReducer, initEmergencyCallList);
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
                                                                                        {children}
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

export {initPhotoZoneData, initHealthInfoData, initEmergencyCallData};
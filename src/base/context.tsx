import React, {
    useReducer,
    createContext,
    useContext,
    useState,
    
  } from "react";


  
// const initCommentValue = [
//     {
//         id:1,
//         nickName:"susu",
//         date:"1920.10.02 10:19",
//         comment:"hahahahahahahahaha",
//     },
//     {
//         id:2,
//         nickName:"susu2",
//         date:"2020.10.02 10:19",
//         comment:"hahahahahahahahaha2",
//     },
//     {
//         id:3,
//         nickName:"susu",
//         date:"1920.10.02 10:19",
//         comment:"hahahahahahahahaha",
//     },
//     {
//         id:4,
//         nickName:"susu2",
//         date:"2020.10.02 10:19",
//         comment:"hahahahahahahahaha2",
//     },
//     {
//         id:5,
//         nickName:"susu",
//         date:"1920.10.02 10:19",
//         comment:"hahahahahahahahaha",
//     },
    
// ];

// const initCommentSettingState = {
//     "NEXT_COMMENT_ID":6,
//     "CUR_PAGING_NUM":1,

// };

// function CommentDataReducer(state, action){
//     switch(action.type){
//         case "COMMENT_ADD":

//             let _length = state.push(action.data);
//             console.log("#################");
//             console.log("FOLDER ADD : ");
//             console.log(state);
//             console.log("@@@@@@@@@@@@@@@@@");
//             return state;

//         case "COMMENT_DELETE":

            
//             return state.filter((data)=>(data.id !== action.id));;

//         default:
//             throw new Error(`Unhandled action type:${action.type}`);
//     }

// }

const initInstructionData =
{
    name:"",
    birth:"",
    guardCall:"",
    myCall:"",
    address:"",
    detail:""
};


function InstructionDataReducer(state, action){
    switch(action.type){
        case "MODIFY":
            let birthCmp= action.data.birth;
            let gCall = action.data.guardCall;
            let mCall = action.data.myCall;
            let gCallCmp = gCall.numFront + "-" + gCall.numMiddle + "-" + gCall.numBack;
            let mCallCmp = mCall.numFront + "-" + mCall.numMiddle + "-" + mCall.numBack;
            // 전화번호 입력 안할 시, 처리함
            if(gCallCmp === "--"){
                gCallCmp = "";
            }

            if(mCallCmp === "--"){
                mCallCmp = "";
            }
            return state = {
                name:action.data.name,
                birth:(birthCmp.y + birthCmp.m + birthCmp.d),
                guardCall:gCallCmp,
                myCall:mCallCmp,
                address:action.data.address,
                detail:action.data.detail,
            };
        //state = {...state, }
            

        case "ADD":

            return action.data;

    }
}

const MenuStateContext = createContext<boolean>(undefined);
const SetMenuStateContext = createContext(undefined);
const ScreenDisplayStateContext = createContext<string>(undefined);
const SetScreenDisplayStateContext = createContext(undefined);
const InstructionDataContext = createContext(undefined);
const SetInstructionDataContext = createContext(undefined);

interface Props{
    children: JSX.Element | Array<JSX.Element>;
};

export function AppStateProvider({children}:Props){

    const [menuState, setMenuState] = useState<boolean>(false);
    const [screenDisplayState, setScreenDisplayState] = useState<string>("MAIN");
    const [instructionData, setInstructinoData] = useReducer(InstructionDataReducer, initInstructionData);

    return(
        <MenuStateContext.Provider value={menuState}>
            <SetMenuStateContext.Provider value={setMenuState}>
                <ScreenDisplayStateContext.Provider value={screenDisplayState}>
                    <SetScreenDisplayStateContext.Provider value={setScreenDisplayState}>
                        <SetInstructionDataContext.Provider value={setInstructinoData}>
                            <InstructionDataContext.Provider value={instructionData}>
                                {children}
                            </InstructionDataContext.Provider>
                        </SetInstructionDataContext.Provider>
                    </SetScreenDisplayStateContext.Provider>
                </ScreenDisplayStateContext.Provider>
            </SetMenuStateContext.Provider>
        </MenuStateContext.Provider>
    );
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

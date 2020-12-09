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
const MenuStateContext = createContext<boolean>(undefined);
const SetMenuStateContext = createContext(undefined);

interface Props{
    children: JSX.Element | Array<JSX.Element>;
};

export function AppStateProvider({children}:Props){

    const [menuState, setMenuState] = useState<boolean>(false);

    const test = () => {console.log("Test10")};

    return(
        <MenuStateContext.Provider value={menuState}>
            <SetMenuStateContext.Provider value={setMenuState}>
                {children}
            </SetMenuStateContext.Provider>
        </MenuStateContext.Provider>
    );
}

export function useMenuStateContext(){
    const context = useContext(MenuStateContext);
    return context;
}

export function useSetMenuStateContext(){
    const context = useContext(SetMenuStateContext);
    return context;
}

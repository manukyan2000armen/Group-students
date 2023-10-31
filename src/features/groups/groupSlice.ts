import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Group = {
    id:number;
    groupName:string;
    studentCount:number
};

const initialState : { arr:Group[] , group:Group } = {
    arr:[
        {
        id:1,
        groupName:'group1',
        studentCount:4
        },
        {
        id:2,
        groupName:'group2',
        studentCount:7
        }


    ],
    group:{} as Group 
}

const groupSlice = createSlice({
    name:'[group]',
    initialState,
    reducers:{
        addGroup:(state , action) => {
            state.arr.push({...action.payload , id:Date.now()})
        }

    }

})

export const {addGroup} = groupSlice.actions;
export const selectGroup =(st:RootState) => st.group 

export default groupSlice.reducer

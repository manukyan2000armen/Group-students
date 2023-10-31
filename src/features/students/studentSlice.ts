import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Student = {
    id:number;
    name:string;
    surname:string;
    groupId:number
}
const initialState : {arrStudent:Student[] , student : Student} = {
    arrStudent:[
        {
            id:1,
            name:'Sona',
            surname:'Sahakyan',
            groupId:1
        },
        {
            id:2,
            name:'Aram',
            surname:'Tigranyan',
            groupId:2
        }
    ],
    student: {} as Student
}
const studentSlice = createSlice({
    name:'[student]',
    initialState,
    reducers:{
        addStudent:(state,action) => {
            state.arrStudent.push({...action.payload , id:Date.now()})
        },
        deleteStudent:(state,action) => {
            state.arrStudent = state.arrStudent.filter((elm) => elm.id != action.payload)
        }
    }
})

export const {addStudent , deleteStudent} = studentSlice.actions
export const selectStudent =(st:RootState) => st.student 


export default studentSlice.reducer
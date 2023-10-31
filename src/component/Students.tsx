import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Student,
  deleteStudent,
  selectStudent,
} from "../features/students/studentSlice";
import "./styles.scss";

function Students({ closeModal2 }: { closeModal2: () => void }) {
  const { arrStudent } = useSelector(selectStudent);
  const dispatch = useDispatch();
  return (
    <>
      <div className="modal">
        <div className="modalContent">
          <button className="btnForClose" onClick={closeModal2}>
            X
          </button>
          <h1>Students</h1>
            

          {arrStudent.map((elm: Student) => {
            return (
              <>
                <div className="divForStudentsData">
                  <div className="divForStudentsData2">
                    <h4>Name: {elm.name}</h4>
                    <h4>Surname: {elm.surname}</h4>
                    <button
                      className="btnDel"
                      onClick={() => dispatch(deleteStudent(elm.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Students;

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addGroup, Group, selectGroup } from "../../features/groups/groupSlice";
import './style.scss'
import Swal from 'sweetalert2'


const SignupSchema = Yup.object().shape({
  groupName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  studentCount: Yup.number()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const AddGroup = () => {
  const dispatch = useDispatch();
  const {arr} = useSelector(selectGroup)

  return <>
  <div className="forAddGroup">
    <div className="divForAddGroup">
      <h1>Add Group</h1>
      <Formik
        initialValues={{
          groupName: "",
          studentCount: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values , {resetForm}) => {
          // same shape as initial values
          console.log(values);
          const g =  arr.find((elm) => elm.groupName ==values.groupName)
          if(g){
            Swal.fire({
              position: 'top',
              icon: 'error',
              title: 'Group name has already',
              showConfirmButton: false,
              timer: 1500
            })
          }else{

            
            dispatch(addGroup(values))
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
          resetForm()
            
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="groupName" placeholder='Group-Name'/>
            {errors.groupName && touched.groupName ? (
              <div>{errors.groupName}</div>
            ) : null}
            <Field name="studentCount" placeholder='Student-Count'/>
            {errors.studentCount && touched.studentCount ? (
              <div>{errors.studentCount}</div>
            ) : null}

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
      </div>
    </div>
    </>;
};

export default AddGroup;

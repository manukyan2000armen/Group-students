import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../app/hooks';
import { addStudent } from '../features/students/studentSlice';
import './style.scss'
import Swal from 'sweetalert2'



const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  surname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
   
});

function AddStudents({ groupId , closeModal }: { groupId: number; closeModal: () => void }) {
  const dispatch = useAppDispatch();

  return <>

    <div className='modal2'>
      <div className='modalContent2'>
    <button className='btn1' onClick={closeModal}>X</button>

      
      <h2>Add Student</h2>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          
        }}
        validationSchema={SignupSchema}
        onSubmit={(values , {resetForm}) => {
          // same shape as initial values
          console.log(values);
          dispatch(addStudent(values));
          resetForm()
          
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" placeholder='Name' />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name="surname" placeholder='Surname'/>
            {errors.surname && touched.surname ? <div>{errors.surname}</div> : null}
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
      
      </div>
    </div>
    </>;
}

export default AddStudents;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddStudents from "../../component/AddStudents";
import { Group, selectGroup } from "../../features/groups/groupSlice";
import { addStudent } from "../../features/students/studentSlice";
import Students from "../../component/Students";
import './style.scss'

function Groups() {
  const { arr } = useSelector(selectGroup);
  const [groupId, setGroupId] = useState<number>(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [searchInput, setSearchInput] = useState(''); // searchi

  const dispatch = useDispatch();

  const openModal = (groupId: number) => {
    setGroupId(groupId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };


  // search-i hamar
  const forSearchInput = (event:any) => {
    setSearchInput(event.target.value);
  };
  
  const filteredGroups = arr.filter((elm: Group) => {
    return elm.groupName.toLowerCase().includes(searchInput.toLowerCase());
  });



  return <>
  <div className="forSearch">

      <h1>Groups</h1>
      <input className="input1"
        type="text"
        placeholder="Search Group"
        value={searchInput}
        onChange={forSearchInput}
      />
  </div>
    <div className="divForTable">
      
      {
        filteredGroups.map((elm:Group) => {
          return <>
          <div className="card">
  <div className="card-body">
    <h2>Group-name: {elm.groupName}</h2>
    <h4>Student-Count: {elm.studentCount}</h4>
    <button onClick={() => openModal(elm.id)}>Add Student</button>
    <button onClick={() => openModal2()}>Students</button>

  </div>
</div>
          </>
        })
      }
      {isModalOpen && groupId !== -1 && (
        <AddStudents groupId={groupId} closeModal={closeModal} />
      )}
      {isModalOpen2 && (
        <Students  closeModal2={closeModal2}/>
      )}
    </div>
    </>;
}

export default Groups;

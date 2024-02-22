import axios from "axios";
import { useEffect, useState } from "react";
import { MdFileOpen } from "react-icons/md";
import Modalshow from "../components/Modalshow";



export default function AminHome(props) {
  const [todos, setTodos] = useState([]);
  const {el} = props
  const [showIdx,setShowdx] = useState(-1)

  useEffect(() => {
    const run = async () => {
      let token = localStorage.getItem("token");
      const rs = await axios.get("http://localhost:8889/todos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(rs.data.todos);
    };
    run();
  }, []);

  const opemModal = (id) => {
    let idx = todos.findIndex(el=>el.id ===id)
    setShowdx(idx)
    document.getElementById('my_modal_5').showModal()
  }

  return (
    <>
    
  <div className="flex flex-col gap-4"> 
  <div className="text-center">รายการแจ้งซ่อมของคุณ</div>
     <Modalshow el={todos[showIdx]}/>
    <div className="w-5/6 overflow-x-auto mx-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>วันที่แจ้ง</th>
            <th>ชื่อผู้แจ้ง</th>
            <th>อุปกรณ์</th>
            <th>รายละเอียด</th>
            <th>สถานะการซ่อม</th>
            <th>รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
        {todos.map(el => ( 
          <tr key={el.id} el={el}>
            <th>{new Date (el.dueDate).toDateString()}</th>
            <td>"Jhon"</td>
            <td>{el.equiment}</td>
            <td>{el.detail}</td>
            <td>{el.status}</td>
            <td className="cursor-pointer active:shadow-none active:translate-x-2 active:translate-y-1"><MdFileOpen onClick={()=>opemModal(el.id)} /></td>

          </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>
  </div>  
    </>
  );
}

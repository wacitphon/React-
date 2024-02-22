import axios from "axios";
import {useState} from "react";

export default function NewTodoForm() {
  const [input, setInput] = useState({
    detail : '',
    dueDate : new Date().toISOString().split('T')[0],
    location : '',
    equiment : '',
    status : '',
  })

  const hdlChange = e => {
    setInput( prv => ( {...prv, [e.target.name] : e.target.value} ))
  }

  const hdlSubmit = async e => {
    try{
      e.preventDefault()
      // setInput(prv => ({...prv, dueDate: new Date(prv.dueDate) }))
      const output = { ...input, dueDate: new Date(input.dueDate) }
      const token = localStorage.getItem('token')
      const rs = await axios.post('http://localhost:8889/todos', output, {
        headers : { Authorization : `Bearer ${token}`}
      })
      alert('Create new OK')
    }catch(err) {
      alert(err.message)
    }
  }

  return (
    <form className="flex flex-col min-w-[600px] border rounded w-5/6 mx-auto p-4 gap-6"
        onSubmit={hdlSubmit}
    >
    <span className="label-text">แจ้งซ่อม</span>
      <label className="form-control w-full max-w-[220px] ">
        <div className="label">
          <span className="label-text">วันที่แจ้งซ่อม</span>
        </div>
        <input type="date" name="dueDate" value={input.dueDate} onChange={hdlChange} />
      </label>
      {/* <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">ชื่อผู้แจ้ง</span>
        </div>
        <input
          type="text"
          placeholder="Jhon"
          className="input input-bordered w-full "
          name="name"
          value={us}
          onChange={hdlChange}
        />
      </label> */}
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">ชื่ออุปกร์</span>
        </div>
        <input
          type="text"
          placeholder="สถานที่แจ้ง"
          className="input input-bordered w-full "
          name="equiment"
          value={input.equiment}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">รายละเอียด</span>
        </div>
        <input
          type="text"
          placeholder="รายละเอียด"
          className="input input-bordered w-full "
          name="detail"
          value={input.detail}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">สถานที่</span>
        </div>
        <input
          type="text"
          placeholder="สถานที่แจ้ง"
          className="input input-bordered w-full "
          name="location"
          value={input.location}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">สถานะการซ่อม</span>
        </div>
        <input
          type="text"
          placeholder="สถานะการซ่อม"
          className="input input-bordered w-full"
          name="status"
          value={input.status}
          onChange={hdlChange}
        />
      </label>

      <button className="btn btn-primary">แจ้งซ่อม</button>
    </form>
  );
}

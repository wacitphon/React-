import React from 'react'

export default function Modalshow(props) {
    const  {el} = props
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
    <div className="modal-box">
     <h1 className="label-text">รายละเอียดการแจ้งซ่อม</h1>
    <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">วันที่แจ้งซ่อม</span>
            </div>
             <p>{new Date (el?.dueDate).toDateString()}</p>
    </label> 
      <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">ชื่อผู้แจ้ง</span>
            </div>
             <p>John</p>
      </label>
    <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">อุปกรณ์ที่แจ้งซ่อม</span>
            </div>
             <p>{el?.equiment}</p>
    </label>  
    <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">รายละเอียด</span>
            </div>
             <p>{el?.detail}</p>
    </label>  
    <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">สถานะ</span>
            </div>
             <p>{el?.status}</p>
    </label> 
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
  )
}

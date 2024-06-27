import React from 'react'

export default function TvtListUsers({renderTvtListUsers}) {
    console.log("TvtListUsers:",renderTvtListUsers);
    //hien thi du lieu
    let tvtElementUsers = renderTvtListUsers.map((tvtUser,index)=>{
        return(
            <>
            <tr>
                    <td>{tvtUser.id}</td>
                    <td>{tvtUser.UserName}</td>
                    <td>{tvtUser.Password}</td>
                    <td>{tvtUser.Email}</td>
                    <td>{tvtUser.Phone}</td>
                    <td>.....</td>
                </tr>
            </>
        )
    })
  return (
    <div className='row'>
        <div className='col-md-12'>
        <table className='table table-bodered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>PassWord</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Chuc nang</th>
                </tr>
            </thead>
            <tbody>
                {tvtElementUsers}
            </tbody>
        </table>
        </div>
    </div>
  )
}

import React from 'react';
const Table = ({tableData}) => {
function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
}
// }

export default Table;
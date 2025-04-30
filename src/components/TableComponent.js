import { Table } from "antd"

function TableComponent({ columns, data }) {
    return (
        <>
            {data ? (<Table
                columns={columns}
                dataSource={data}
                pagination={false}
            >

            </Table>) : (<p>No data submitted yet.</p>)}
        </>

    )
}

export default TableComponent

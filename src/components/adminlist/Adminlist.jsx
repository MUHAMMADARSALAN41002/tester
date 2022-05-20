import React, {useEffect, useState} from 'react'
import { getDocs, collection } from 'firebase/firestore';
import {  Table } from 'antd';
import {db} from '../../firebase/Config'

const Adminlist = () => {

    const [arrdata1, setarrdata1] = useState([])

    useEffect(() => {
        getdata();

    }, [])

    let arr = [];
    const getdata =  () => {
        getDocs(collection(db, "admins")).then((querySnapshot) => {
            console.log(querySnapshot.docs)
            querySnapshot.forEach((doc) => {           
                    let dadminame = doc.data().name;
                    let dadminemail = doc.data().email;
                    console.log(dadminame, dadminemail)
                    arr.push({
                        arradminname: dadminame,
                        arradminemail: dadminemail,
                    })
            })
            setarrdata1(arr)
        }).catch((err) => {
            console.log(err)
        })
    };


    const columns = [
        { title: 'S.No', dataIndex: 'sno', key: 'sno', render: (text, object, index) => index + 1},
        { title: 'Admin Name', dataIndex: 'adminname', key: 'adminname', },
        { title: 'Admin Email', dataIndex: 'adminemail', key: 'adminemail', },
    ];


    const data = arrdata1.map((alldata, index) => {
        const userdata = {
            key: index,
            adminname: alldata.arradminname,
            adminemail: alldata.arradminemail,
        }
        return userdata;
    })

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={false} className='alldisplaytable'/>
        </div>
    )
}
export default Adminlist;
import React, {useEffect, useState} from 'react'
import { getDocs, collection } from 'firebase/firestore';
import {  Table } from 'antd';
import {db} from '../../firebase/Config'

const Userlist = () => {

    const [arrdata1, setarrdata1] = useState([])

    useEffect(() => {
        getdata();

    }, [])

    let arr = [];
    const getdata =  () => {
        getDocs(collection(db, "users")).then((querySnapshot) => {
          
            querySnapshot.forEach((doc) => {           
                    let dadminame = doc.data().username;
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
    console.log(arrdata1)

    const columns = [
        { title: 'S.No', dataIndex: 'sno', key: 'sno', render: (text, object, index) => index + 1},
        { title: 'User Name', dataIndex: 'adminname', key: 'adminname', },
        { title: 'User Email', dataIndex: 'adminemail', key: 'adminemail', },
    ];


    const data = arrdata1.map((alldata, index) => {
        const userdata = {
            key: index,
            adminname: alldata.arradminname,
            adminemail: alldata.arradminemail,
        }
        return userdata;
    })
console.log("haha")
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={false} className='alldisplaytable'/>
        </div>
    )
}
export default Userlist;
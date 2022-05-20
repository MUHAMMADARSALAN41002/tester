import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { Row, Col } from "antd";
import { getDocs, collection } from "firebase/firestore";
import { Table } from "antd";
import { db } from "../../firebase/Config";
import "./Coursetemplate.css";
import { Card } from "antd";

const Admincoursetemplate = () => {
  const [arrdata, setarrdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  let arr = [];
  const getdata = () => {
    getDocs(collection(db, "courses"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let dcoursename = doc.data().coursename;
          let dstartdate = doc.data().startingdate;
          let dlastdate = doc.data().enddate;
          // let ddescription = doc.data().coursename;

          arr.push({
            arcoursename: dcoursename,
            arrstartdate: dstartdate,
            arrlastdate: dlastdate,
          });
        });
        setarrdata(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, object, index) => index + 1,
    },
    { title: "Course Name", dataIndex: "coursename", key: "coursename" },
    {
      title: "Course Start Date",
      dataIndex: "coursestartdate",
      key: "coursestartdate",
    },
    {
      title: "Course Last Date",
      dataIndex: "courselastdate",
      key: "courselastdate",
    },
    { title: "status", dataIndex: "status", key: "status" },
  ];

  const data = arrdata.map((alldata, index) => {
    const startdate = alldata.arrstartdate;
    const lastdate = alldata.arrlastdate;
    const today = new Date().toISOString().slice(0, 10);
    const date = new Date()
    const startformated = startdate.replace(/-/g,'')
    const expireformated = lastdate.replace(/-/g,'')
    const current_formated = `${date.getFullYear()}${date.getDay()<10?"0"+date.getDay():date.getDay()}${date.getDate()}`
    let statuscompare;
    if(current_formated >= startformated && current_formated < expireformated){
      statuscompare="Active"
        console.log("active")
    }
    else if(current_formated<startformated){
      statuscompare="Pending"
        console.log("pending")
    }
    else{
      statuscompare="Expired"
        console.log("expired")
    }
    const userdata = {
      key: index,
      coursename: alldata.arcoursename,
      coursestartdate: alldata.arrstartdate,
      courselastdate: alldata.arrlastdate,
      status: statuscompare,
    };
    return userdata;
  });
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="alldisplaytable"
      />
    </div>
  );
};

const Usercoursetemplate = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {" "}
      <Card>
        <Card
        hoverable
          type="inner"
          style={{ marginTop: 16 }}
          title="Inner Card title"
          extra={
            <Button type="primary" onClick={() => setVisible(true)}>
              Enroll Now
            </Button>
          }
        >
          Inner Card content
          
          <hr />
          <h4 style={{margin:0}}>cousrse is starting from : {props.lastdate}</h4> 
          <h4>last date for apply : {props.lastdate}</h4> 
        </Card>
      </Card>
      <Modal
        title="Apply"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={800}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export { Admincoursetemplate, Usercoursetemplate };

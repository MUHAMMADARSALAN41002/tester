import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
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
    console.log(startdate, lastdate, today);
    let statuscompare;
    if (today >= startdate && lastdate >= today) {
      statuscompare = "Active";
    } else if (startdate > today) {
      statuscompare = "Pending";
    } else {
      statuscompare = "Closed";
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
  console.log(props)
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Card>
        <Card
          hoverable
          type="inner"
          style={{ marginTop: 16 }}
          title={props.coursename}
          extra={
            <Button type="primary" onClick={() => setVisible(true)}>
              Enroll Now
            </Button>
          }
        >
          {props.description}
          <hr />
          <h4 style={{ margin: 0 }}>
            cousrse is starting from : {props.startdate}
          </h4>
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

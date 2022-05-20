import { message } from "antd";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Usercoursetemplate } from "../../../components/course/Coursetemplate";
import Navbar from "../../../components/navbar/Navbar";
import { db } from "../../../firebase/Config";

const Courses = () => {
  const [arrdata, setarrdata] = useState([]);
  useEffect(() => {
    getcourses();
  }, []);
  let arr = [];
  const getcourses = () => {
    getDocs(collection(db, "courses"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let dcoursename = doc.data().coursename;
          let dstartdate = doc.data().startingdate;
          let dlastdate = doc.data().enddate;
          let ddescription = doc.data().coursedescription;

          arr.push({
            arcoursename: dcoursename,
            arrstartdate: dstartdate,
            arrlastdate: dlastdate,
            arrdescription : ddescription,
          });
        });
        setarrdata(arr);
        })

      .catch((error) => {
        const errorMessage = error.message;
        message.error(errorMessage);
      });
  };
  return (
    <>
      <Navbar />
      {/* {arrdata.map(() => { */}
        <Usercoursetemplate />
      {/* })} */}
    </>
  );
};
export default Courses;

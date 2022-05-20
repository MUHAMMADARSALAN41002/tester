import React from "react";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { auth, db } from "../../../firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

const { TextArea } = Input;

const Create = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { coursename, startingdate, enddate, coursedescription } = values;
    console.log(coursename, startingdate, enddate, coursedescription);
    const id = doc(collection(db, "courses"))._key.path.segments[1];
    setDoc(doc(db, "courses", id), {
      coursename,
      startingdate,
      enddate,
      coursedescription,
      courseId : id
    });
    message.success("Successfully account created");
    navigate("/showcourses");
  };
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() ).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  return (
    <>
      {" "}
      <div className="login">
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <h1 className="heading-login" id="sign-heading-login">
            {" "}
            Create Course{" "}
          </h1>

          <Form.Item
            label="Course Name"
            name="coursename"
            className="input-login"
            rules={[
              {
                required: true,
                message: "Please input course name!",
              },
            ]}
          >
            <Input
              className="input-here"
              type="text"
              placeholder="Course Name"
            />
          </Form.Item>
          <Form.Item
            label="Course Starting Date"
            name="startingdate"
            className="input-login"
            rules={[
              {
                required: true,
                message: "Please input starting date!",
              },
            ]}
          >
            <Input
              className="input-here"
              type="date"
              min={disablePastDate()}
              placeholder="starting Date"
            />
          </Form.Item>
          <Form.Item
            label="Course end Date"
            name="enddate"
            className="input-login"
            rules={[
              {
                required: true,
                message: "Please input your end date!",
              },
            ]}
          >
            <Input
              className="input-here"
              type="date"
              min={disablePastDate()}
              placeholder="course end date"
            />
          </Form.Item>

          <Form.Item
            label="Course Description"
            name="coursedescription"
            className="input-login"
            rules={[
              {
                required: true,
                message: "Please input course description!",
              },
            ]}
          >
            <TextArea
        placeholder="Course description"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
          </Form.Item>

          <Form.Item>
            <Button
              type="danger"
              htmlType="submit"
              className="login-form-button"
            >
              Create Course
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default Create;

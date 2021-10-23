import React, { useEffect } from "react";
import { Row, Col, Form, Input, Button, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { addTodo } from "../actions/action";
import toast from "../helpers/toast";
import { AnimatePresence, motion } from "framer-motion";

function TodoForm(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thêm công việc";
  }, []);

  const onFinish = (values) => {
    const data = {
      id: uuidv4(),
      name: values.name,
      time: moment(values.time).format("DD/MM/YYYY").toString(),
      complete: false,
    };

    dispatch(addTodo(data));
    toast.success("Thành công", "Thêm công việc thành công");
  };

  return (
    <>
      {/* <h2 className="title-Form">New todo</h2> */}
      <div className="title-Form">
        <motion.h2
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Công việc mới
        </motion.h2>
        {/* <h2 className="title-List">All todo list</h2> */}
      </div>
      <Row>
        <Col span={12}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{}}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên công viêc!",
                },
              ]}
            >
              <Input placeholder="Nhập tên công việc" />
            </Form.Item>

            <Form.Item
              name="time"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn thời gian !",
                },
              ]}
            >
              <DatePicker placeholder="Thời gian hết hạn" format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" class="button-primary">
                Thêm công việc
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default TodoForm;

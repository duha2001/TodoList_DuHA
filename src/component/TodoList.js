import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import TodoItem from "../component/TodoItem";
import { AnimatePresence, motion } from "framer-motion";

function TodoList() {
  const todos = useSelector((state) => state.todoReducer.todos);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tất cả công việc";
  }, []);
  return (
    <AnimatePresence>
      <div className="title-List">
        <motion.h2
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="title-List"
          whileHover={{ scale: 1.1 }}
        >
          Tất cả công việc cần làm
        </motion.h2>
        {/* <h2 className="title-List">All todo list</h2> */}
      </div>
      <Row>
        <Col span={24}>
          <Row>
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </Row>
        </Col>
      </Row>
    </AnimatePresence>
  );
}

export default TodoList;

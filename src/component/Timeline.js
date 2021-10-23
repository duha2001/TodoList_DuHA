import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSelector } from "react-redux";

function Timeline(props) {
  const todos = useSelector((state) => state.todoReducer.todos);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Timeline";
  }, []);

  return (
    <div
      className="App"
      // style={{ background: "#333", fontFamily: "Trebuchet Ms" }}
    >
      <h1 className="title-timeline">
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Timeline
        </motion.h1>
      </h1>
      <VerticalTimeline>
        {todos.map((todo) => (
          <VerticalTimelineElement
            className="vertical-timeline-elemeny--work"
            date={todo.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              <span>Tên việc làm:</span> {todo.name}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <span>Hạn deadline: </span>
              {todo.time}
            </h4>
            {todo.complete ? (
              <p className="vertical-timeline-element-desc success">
                Trạng thái: <span>Đã hoàn thành</span>
              </p>
            ) : (
              <p className="vertical-timeline-element-desc fail">
                Trạng thái: <span>Chưa hoàn thành</span>
              </p>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;

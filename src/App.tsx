import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { AiOutlineMenu } from "react-icons/ai";

import Contents from "./components/Contents";

import "./App.css";

const contentArr = ["Home", "Login", "SearchAPI", "Framer Motion", "Video.JS"];

function App() {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState(3);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleContent = ({ currentTarget: { id } }: React.MouseEvent) => {
    setContent(parseInt(id));
    onClose();
  };
  return (
    <div>
      <Contents content={content} />
      <Button className="drawer-btn" onClick={showDrawer}>
        <AiOutlineMenu />
      </Button>
      <Drawer
        title="Practice List"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        {contentArr.map((content, index) => (
          <div key={index}>
            <Button type="link" id={`${index}`} onClick={handleContent}>
              {content}
            </Button>
          </div>
        ))}
      </Drawer>
    </div>
  );
}

export default App;

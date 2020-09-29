import React,{useEffect, useState} from "react";
import { Button,message,Card } from 'antd';
import "./scss/joinstyle.scss";

import "./styles.scss";

export default function App() {
  const [css, setCss] = useState('')
  const [count, setCount] = useState(0)

  const getCss = () => {
    // let newCss = document.getElementsByTagName('style')[0].innerText;
    let newCss = document.getElementsByTagName('title')[0].nextElementSibling.innerText;
    if(css !== newCss){
      setCss(newCss)
      setCount(count + 1)
    }

  }

  const copyCss = () => {
    let textarea = document.getElementById('cssValue');
    textarea.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    message.info("已复制到剪切板！")

  }

  useEffect(()=>{
    // getCss()
    setInterval(() =>{
      getCss()
    },2000)
  })

  return (
    <div className="col">
      <Card title={<><Button onClick={copyCss} type="primary">复制代码</Button> 已经刷新 {count} 次</>} style={{ width: "100%" }}>
        <h4>需要修改文件位置</h4>
        <h4>/src/scss/joinstyle.scss</h4>
        <textarea id='cssValue' defaultValue={css} style={{width:"100%", height:"300px",marginTop:10}}>
        </textarea>
      </Card>
    </div>
  );
}

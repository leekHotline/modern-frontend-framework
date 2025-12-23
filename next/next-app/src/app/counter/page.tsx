'use client'; // 告诉 next 组件不在服务器而是在浏览器运行

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick= {() => { setCount(count+1) }}>+1</button>
        </div>
    );
}
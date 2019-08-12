import React, { useState, useEffect } from "react";

interface People {
  name: string;
  age: number;
  country?: string;
}

function Apple() {
  // 声明一个叫 "count" 的 state 变量
  const [owner, setOwner] = useState<People>({ name: "rrd_fe", age: 5 });
  useEffect(() => {
    document.title = "你爱我吗";
  });

  return (
    <div>
      <p>
        {owner.name} {owner.age}
      </p>
      <a onClick={() => setOwner({ name: "菲菲", age: 9 })}>click me</a>
    </div>
  );
}

export default Apple;

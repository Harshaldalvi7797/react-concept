import React from "react";
function MemoComponent({ name }) {
  console.log("rendering Memo component");
  return <div>Welcome</div>;
}
export default React.memo(MemoComponent);
//export default MemoComponent;

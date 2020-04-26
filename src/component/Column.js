import React from "react";
//instead of React.fragment we use empty tag <> </> but cant provide key
function Columns() {
  const items = [];
  return (
    <React.Fragment>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>{" "}
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Harshal</td>
    </React.Fragment>
  );
}
export default Columns;

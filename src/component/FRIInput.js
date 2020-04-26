import React from "react";
// function FRIInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }

const FRIInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
export default FRIInput;

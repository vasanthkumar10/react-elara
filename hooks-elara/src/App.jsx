// import React, { useState } from "react";
// import { Forms } from "./components/Forms";
// // import { Counter } from "./components/Counter";
// import { ComponentA } from "./components/ComponentA";
// import { ComponentD } from "./components/ComponentD";

// export const UserContext = React.createContext();
// export const AgeContext = React.createContext();

// function App() {
//   const [user, setUser] = useState("vasanth");
//   const [age, setAge] = useState(10);

//   return (
//     <div>
//       {/* <Forms /> */}
//       {/* <Counter /> */}
//       <h1>{user}</h1>
//       <AgeContext.Provider value={age}>
//         <UserContext.Provider value={user}>
//           <ComponentA />
//         </UserContext.Provider>
//       </AgeContext.Provider>
//       <ComponentD />
//     </div>
//   );
// }

// export default App;

import React from "react";
// import { ObjectDemo } from "./components/ObjectDemo";
// import { UseMemoDemo } from "./components/UseMemoDemo";
import { UseReducerDemo } from "./components/UseReducerDemo";

export function App() {
  return (
    <div>
      {/* <ObjectDemo /> */}
      {/* <UseMemoDemo /> */}
      <UseReducerDemo />
    </div>
  );
}

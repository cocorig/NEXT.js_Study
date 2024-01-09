// // List.tsx

// import React from "react";
// import Language from "../languages/Language";

// type ListItem = {
//   _id: string;
//   name: string;
// };

// type ListProps = {
//   items: ListItem{};
// };

// const List: React.FC<ListProps> = ({ items }) => {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item._id}>
//           <Language name={item.name} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default List;

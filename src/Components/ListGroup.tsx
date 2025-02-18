import { MouseEvent, useState } from "react";

interface ListGroupProps{
  items:string[];
  heading:string;
}

function ListGroup({items , heading} : Props) {
  
  // let selectedIndex = 0;
  // Hook
  // useState (-1);

  const [selectedIndex ,setSelectedIndex] = useState(-1);

  // const [name , setName ] = useState ('');


  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function 

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  //items = [];
  // const getmessage = () => {

  //  return ;
  //}

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1> </h1> <p>No item found</p>
  //     </>
  //   );

  /*  if (items.length === 0)
    return (
      <>
        {" "}
        <h1> List </h1>
        <p> No item found</p>
      </>
    );
 */
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found </p> : null } */}
      {items.length === 0 && <p> No item found </p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

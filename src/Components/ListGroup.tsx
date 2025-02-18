import { MouseEvent } from "react";

function ListGroup() {
  let items: string[]= [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];
//event handler
  const handleClick = (event :MouseEvent) => console.log(event)
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
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found </p> : null } */}
      {items.length === 0 && <p> No item found </p>}

      <ul className="list-group">
        {items.map((item , index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={ handleClick }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

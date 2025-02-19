

// const Alert = () => {
//   return (
//     <div>Alert</div>
//   )
// }
// interface Props{
//     text: string;
//   }
  
//   const Alert = ({ children }:Props) => {
//     return (
//       <div className="alert alert-primary"><text/>
  
//       </div>
//     );
//   }
  

// export default Alert

interface Props {
    text: string;
  }
  
  const Alert = ({ text }: Props) => {
    return (
      <div className="alert alert-primary">
        {text}  {/* ✅ Correctly display the text */}
      </div>
    );
  }
  
  export default Alert;
  
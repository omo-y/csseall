export const StyledJsx = () => {
  return (
    <>
    <div className="container">
      <p className="title">-- StyledJsx --</p>
      <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
      .container {
        border: solid 3px #392eff;
         border-radius: 8px;
         margin: 8px;
         padding: 8px;
         display: flex;
             justify-content: space-around;
         align-items: center;
       }
       .title{
        font-weight:bold;
        margin: 0;
        color: #ff0000;
      }
      .button{
        background-color: #000000;
        color: white;
        border: none;
        padding: 8px;
        border-radius: 8px;
        &:hover{
          background-color: #46cdcf;
          color:#ff0000;
          cursor:pointer;
        }
      `}</style>
    </>
  );
};

function ComplexComment(props) {
  // complex component which displays different elements of a comment
  return (
    <div className="Comment componentBox">
      
      <div className="Comment-text">
        {" "}
        {/* the actual comment text is another aspect */}
        {props.text}
      </div>
    
    </div>
  );
}



export default ComplexComment;



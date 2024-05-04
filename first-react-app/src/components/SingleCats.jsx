function SingleCats({ name, latinName, image }) {
    return (
      <div className="catDiv">
        <li className="catList">
          <h3>{name}</h3> <p>{latinName}</p>
          <img src={image} alt={`Picture of ${name}`} className="catImage" />
        </li>
      </div>
    );
  }


  export default SingleCats
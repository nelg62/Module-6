function SingleCats({id, name, latinName, image, onDelete }) {

const handleDelete = () => {
  onDelete(id)
}

    return (
      <div className="catDiv">
        <li className="catList">
          <h3>{name}</h3> <p>{latinName}</p>
          <img src={image} alt={`Picture of ${name}`} className="catImage" />
          <button onClick={handleDelete}>Delete</button>
        </li>
      </div>
    );
  }


  export default SingleCats
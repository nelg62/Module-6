function BigCats() {
  const cats = [
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cheetah_at_Working_with_Wildlife.jpg/1200px-Cheetah_at_Working_with_Wildlife.jpg",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/640px-Standing_jaguar.jpg",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/800px-African_leopard_male_%28cropped%29.jpg",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      image:
        "https://img.freepik.com/free-photo/view-wild-lion-nature_23-2150460851.jpg",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image:
        "https://c02.purpledshub.com/uploads/sites/62/2014/10/GettyImages-164854094-85c87f5.jpg",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image:
        "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_full/77ic6i4qdj_Medium_WW226365.jpg",
    },
  ];

  const catItems = cats.map((cat) => <SingleCats key={cat.id} {...cat} />);

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

  return catItems;
}

export default BigCats;

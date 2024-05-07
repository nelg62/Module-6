import { useState } from "react";
import SingleCats from "./SingleCats";

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

  const [currentCats, setCurrentCats] = useState(cats);
  const [sortOrder, setSortOrder] = useState("asc");

  const catItems = currentCats.map((cat) => (
    <SingleCats key={cat.id} {...cat} />
  ));

  const sortCatsAsending = () => {
    let newCats = [...currentCats];
    newCats.sort((a, b) => a.name.localeCompare(b.name));
    console.log(newCats);
    setCurrentCats(newCats);
  };

  const sortCatsDecending = () => {
    let newCats = [...currentCats];
    newCats.sort((a, b) => b.name.localeCompare(a.name));
    console.log(newCats);
    setCurrentCats(newCats);
  };

  const sortCats = () => {
    let newCats = [...currentCats];
    newCats.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    console.log(newCats);
    setCurrentCats(newCats);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  function pantheraFilter(name) {
    let newCats = [...currentCats];
    console.log(name);
    newCats = newCats.filter((cat) =>
      cat.latinName.toLowerCase().includes(name.toLowerCase())
    );
    console.log(newCats);
    setCurrentCats(newCats);
  }

  const ResetCats = () => {
    setCurrentCats(cats);
  };

  return (
    <>
      <div>
        <h3>Big Cats Sort</h3>
        <button onClick={sortCatsAsending}>Sort List A-Z</button>
        <button onClick={sortCatsDecending}>Sort List Z-A</button>
        <button onClick={sortCats}>Sort List A-Z Z-A</button>
        <button onClick={() => pantheraFilter("panthera")}>
          Filter Show Panthera Cats
        </button>
        <button onClick={ResetCats}>Reset cats view</button>
      </div>
      {catItems}
    </>
  );
}

export default BigCats;

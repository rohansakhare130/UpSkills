import React from "react";
import "./App.css";
import Cards from "./component/Cards";

const image1 = "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600";
const image2 = "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600";
const image3 = "https://images.pexels.com/photos/24356055/pexels-photo-24356055/free-photo-of-silhouette-of-a-person-in-the-mountains-of-north-wales.jpeg?auto=compress&cs=tinysrgb&w=600";
const image4 = "https://images.pexels.com/photos/27200316/pexels-photo-27200316/free-photo-of-small-sparrow-on-wall.jpeg?auto=compress&cs=tinysrgb&w=600";
const image5 = "https://images.pexels.com/photos/27169204/pexels-photo-27169204/free-photo-of-an-otter-in-water.jpeg?auto=compress&cs=tinysrgb&w=600";
const image6 = "https://images.pexels.com/photos/24507154/pexels-photo-24507154/free-photo-of-wild-turkeys-on-grass.jpeg?auto=compress&cs=tinysrgb&w=600";
const image7 = "https://images.pexels.com/photos/24513196/pexels-photo-24513196/free-photo-of-portrait-of-peacock.jpeg?auto=compress&cs=tinysrgb&w=600";
const image8 = "https://images.pexels.com/photos/24507053/pexels-photo-24507053/free-photo-of-common-wood-pigeon.jpeg?auto=compress&cs=tinysrgb&w=600";
const image9 = "https://images.pexels.com/photos/24454157/pexels-photo-24454157/free-photo-of-buck-on-swamp.jpeg?auto=compress&cs=tinysrgb&w=600";

function App() {
  return (
    <div className="bg-neutral-950 w-full h-full pb-8">
      <h1 className="text-indigo-600 text-center text-3xl pt-7 ">
        All the cards are here.
      </h1>
      <div className="flex justify-evenly flex-wrap gap-x-56 gap-y-10 mt-10">
        <Cards
          Cardimg={image1}
          Cardtitle="Card1"
          Cardtext="This is card 1 description"
        />

        <Cards
        Cardimg={image2}
        Cardtitle="Card2"
        Cardtext="This is card 2 description"
      />

      <Cards
      Cardimg={image3}
      Cardtitle="Card3"
      Cardtext="This is card 3 description"
    />

    <Cards
      Cardimg={image4}
      Cardtitle="Card4"
      Cardtext="This is card 4 description"
    />

    <Cards
      Cardimg={image5}
      Cardtitle="Card5"
      Cardtext="This is card 5 description"
    />

    <Cards
      Cardimg={image6}
      Cardtitle="Card6"
      Cardtext="This is card 6 description"
    />

    <Cards
      Cardimg={image7}
      Cardtitle="Card7"
      Cardtext="This is card 7 description"
    />

    <Cards
      Cardimg={image8}
      Cardtitle="Card8"
      Cardtext="This is card 8 description"
    />

    <Cards
      Cardimg={image9}
      Cardtitle="Card9"
      Cardtext="This is card 9 description"
    />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import "../App.css";

function Cards(props) {
  const { Cardimg, Cardtitle, Cardtext } = props;
  return (
    <div className="card1 w-72 h-80 bg-slate-500 flex flex-col justify-center items-center text-blue-600">
      <img src={Cardimg} alt="img1" className="w-40 h-40" />
      <h1 className="mt-5 mb-4">{Cardtitle}</h1>
      <p className="text-blue-800">{Cardtext}</p>
    </div>
  );
}

export default Cards;
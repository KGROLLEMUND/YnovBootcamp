import React from "react";
import Card from "./Img.js"

const App = () => {
  const [getBob, setBob] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => {
        return res.json();
      })
      .then((obj) => setBob(obj.data.memes));
  }, []);

  

  return (
    <div className="App">
      {getBob.map((x) =>{
        return (
        <Card key={x.id} name={x.name} url={x.url}  alt=""></Card>
      );
      })}
    </div>
  );
};

export default App;
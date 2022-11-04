import React, { useState, useEffect } from "react";
function Home() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchLocation = async () => {
      await fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    };
    fetchLocation();
  }, []);

  if (!data.length) return <div>Loading...</div>;
  return (
    <div>
      <div className="App">
        Name: {data[0].name}
        <br />
        Email: {data[0].email}
        <br />
        Phone: {data[0].phone}
        <br />
        Address: {data[0].address.street}
      </div>
    </div>
  );
}

export default Home;

import { useEffect } from "react";

const Card = () => {
  const cardstyles = `rounded-md hover:bg-blue-300`;

  const apiData = () => {
    fetch("https://randomuser.me/api")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <div>
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
      />
    </div>
  );
};

export default Card;

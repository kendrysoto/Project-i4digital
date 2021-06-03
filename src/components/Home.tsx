import React, { ReactElement } from "react";
import "../style/Home.css";

interface HomeProps {
  text?: string;
}

const Home = ({ text }: HomeProps): ReactElement => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello, welcome to I4DIGITAL!</h1>
      <div className="boxImg">
        <img src="https://itmastersmag.com/wp-content/uploads/2021/01/shutterstock_1078387013-scaled.jpg" />
        <img src="https://dev-res.thumbr.io/libraries/26/02/34/lib/1473078000859_1.jpg?size=854x493s&ext=jpg" />
        <img src="https://lh3.googleusercontent.com/proxy/USiey_emUHypIlQJzbuDsp3qMsUx7a18r7e4Bk1qAe8a77oLRLCshgUqXpw3dcQfPSUQDVZmiq2E0NK3_9ItfbKick1Tthlo32_P0DD8oCIdozAuHuNGJfVwwQ" />
      </div>
    </div>
  );
};



export default Home;

import Head from "next/head";
import Image from "next/image";
import teamPD from "../assets/image/PDSolutions.jpeg";

export default function Home() {
  return (
    <div id="app">
      <Head>
        <title>PD Solutions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="title">
        <div className="title-inner">
          <div className="cafe">
            <div className="cafe-inner">PD Solutions</div>
          </div>
          <div className="mozart">
            <div className="mozart-inner">Comming soon </div>
          </div>
        </div>
      </div>

      <div className="image">
        <Image src={teamPD} alt="teampd" />
      </div>
    </div>
  );
}

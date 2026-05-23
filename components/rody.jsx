import Carousel from "./Carousel";

export default function Rody() {
  return (
    <section className="container-inner card">

          <Carousel 
            images={[
              "./rody.jpg", 
              "./1.jpeg",
              "./2.jpeg",
              "./3.jpeg"
            ]} 
          />

          <h1 className="title">Welcome, I&apos;m Rody!</h1>

          <p className="kicker">
       
            Every two weeks I deliever goodie bags to Baltimore residents in need. 
            Donations, hygiene products, clothing, and more are all welcome.
            <br/><br/>
           Help me bridge the gap for those in need by donating or sharing my mission with others.
          </p>
          <br/>
          <p className=" small-this">
          
          *All images used are consented and permitted for use.*
          </p>

    </section>
  );
}
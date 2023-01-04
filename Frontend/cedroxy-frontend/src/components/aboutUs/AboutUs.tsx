import "./AboutUs.css";
//pics
import AboutUsPic from "../../assets/About_us.png";
function AboutUs() {
  return (
    <>
      {/* <h2 className="about-us-header"> About Us </h2> */}
      <div className="about-us-container" id="aboutus">
        <img className="about-us-pic" src={AboutUsPic} alt="About us pic" />
        <div className="about-us-text">
          Cedroxy team are convinced that a change will be led in the near
          future. We, as young graduates, are aiming to enhance the artistic
          local production through a leading example, simultaneously involving
          the local community by creating job opportunities in the handmade
          artistic field (sculpture, carpenter, cartographer, draftsman,etc...)
          but also in different fields such as marketing, architecture, design
          and branding.
          <br />
          Regarding the epoxy resin, we aim to have a rich experience in this
          field, to be the pioneers in the production, manufacturing and
          environmental specificities of the resin. Our project started as a
          dream that is now becoming reality. Cedroxy will be reflecting, in
          each unique piece, Lebanese beauty using different species of trees
          that grow around this region.
        </div>
      </div>
    </>
  );
}

export default AboutUs;

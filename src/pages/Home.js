import React from "react";
import "../styles/Home.css";
import LogoInsta from "../assets/instagram-color.svg";
import LogoTikTok from "../assets/tiktok.svg";
import mail from "../assets/mail.svg";

const Home = () => {
  return (
    <div>
      <div className="text">
        <h1>Celebrate African Tennis</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          perferendis voluptatibus quam qui accusantium inventore dolorem
          exercitationem ex in dignissimos minima eveniet quidem cupiditate,
          fuga aliquam, autem ut at magni, nam ipsam provident quos tempore.
          Tempore doloremque corporis impedit id iste, aut suscipit saepe
          perferendis voluptatem, consequatur reiciendis error fugiat dolorem?
          Porro quisquam doloremque fugit ad eaque corporis nihil, enim illo
          aperiam nam. Voluptates, officiis quis! Facilis illo odit officia
          labore adipisci illum, perferendis mollitia autem ab repudiandae at
          dicta expedita doloribus? Vel tempore illum alias doloribus eaque
          necessitatibus? Reiciendis quis accusantium temporibus delectus ab!
          Officia nostrum fuga esse odit.
        </p>
      </div>
      <div className="extern-link">
        <h1>Follow us on</h1>
        <div className="social">
          <a
            href="https://www.instagram.com/afrotennis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoInsta} alt="Instagram" className="svg-link-icons" />
          </a>
          <a
            href="https://www.tiktok.com/@afrotennis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoTikTok} alt="TikTok" className="svg-link-icons" />
          </a>
        </div>
        <div className="contact">
          Contact us
          <a href="">
            <img src={mail} alt="image" className="svg-link-icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

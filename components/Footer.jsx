<<<<<<< HEAD
=======
//renders footer section for the webpage
>>>>>>> 11c8edc9dd8ac1a8163bec0d56faccd193272507
import css from "../styles/Footer.module.css";
import { UilTwitter, UilGithub, UilInstagram } from "@iconscout/react-unicons";
import Image from "next/image";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHTS RESERVED</span>
      <div className={css.social}>
        <UilTwitter size={45} />
        <UilGithub size={45} />
        <UilInstagram size={45} />
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Fudo</span>
      </div>
    </div>
  );
}

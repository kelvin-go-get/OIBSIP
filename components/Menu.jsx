import Image from "next/image";
import css from "../styles/Menu.module.css";
import { urlFor } from "../lib/client";
import Link from "next/link";

export default function Menu({ pizzas }) {
  return (
    <div className={css.container} id="Menu">
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make You Fall In Love</span>
      </div>

      {/* pizzas */}
      <div className={css.menu}>
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.ImageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </div>
              </Link>
              <span>{pizza.name}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>$ </span>{" "}
                {pizza.price[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

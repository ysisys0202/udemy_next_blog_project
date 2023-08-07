import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/pika.jpeg"
          alt="An Image showing Pika"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm yun</h1>
      <p>
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        facere tempora dolorum sint soluta modi sed, tempore voluptatem
        consectetur incidunt, ipsa aspernatur? Et harum quidem dolore modi esse,
        quibusdam quia?
      </p>
    </section>
  );
};

export default Hero;

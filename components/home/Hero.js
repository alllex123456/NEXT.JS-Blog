import classes from './Hero.module.css';

import Image from 'next/image';

const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.png" alt="" width={300} height={300} />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>I blog about popular frameworks like Angular or React</p>
    </section>
  );
};

export default Hero;

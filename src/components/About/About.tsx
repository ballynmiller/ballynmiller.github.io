import { fraunces } from "@/app/fonts";

const About = () => {
  return (
    <div id="about" className="p-8">
      <h1 className={`text-4xl text-charcoal py-5 ${fraunces.className}`}>
        About
      </h1>
      <p className="text-xl font-thin">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Nec amet elit
        pharetra nisi arcu. Malesuada litora mattis curabitur sed vel luctus.
        Mus risus cras urna, sem faucibus diam conubia eleifend. Curae tempus
        porttitor lectus cras nisl netus. Conubia sapien amet integer rutrum sed
        class aliquet. Sit integer ante enim litora diam ex scelerisque
        lobortis. Luctus varius consectetur donec elit senectus, sagittis rutrum
        quis. Feugiat natoque vivamus hac vulputate sagittis. Alectus ipsum
      </p>
    </div>
  );
};

export default About;

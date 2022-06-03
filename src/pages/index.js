import Marquee from "react-fast-marquee";
import Text from "../components/text";

export default function Home() {
  return (
    <>
      <section className="hero" data-scroll-section>
        <Marquee gradient={false} speed={120}>
          <Text caption size="main">
            Fronend
          </Text>
          <Text caption size="main">
            Developer
          </Text>
          <Text caption size="main">
            &
          </Text>
          <Text caption size="main">
            Digital
          </Text>
          <Text caption size="main">
            Designer
          </Text>
        </Marquee>
        <video autoPlay muted loop>
          <source src="/images/05.mp4" />
        </video>
      </section>
    </>
  );
}

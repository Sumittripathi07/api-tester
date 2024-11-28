import Container from "../global/container";
import Images from "../global/images";
import { Particles } from "../ui/particles";
import { SectionBadge } from "../ui/section-bade";

const Connect = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-8 md:py-12">
      <Container>
        <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
          <SectionBadge title="Methods" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Test GET, POST, PUT, and DELETE requests.
          </h2>
          <p className="mt-6 text-base text-center md:text-lg text-accent-foreground/80">
            Customize headers, and analyze responses—all in a stunning, animated
            interface.
          </p>
        </div>
      </Container>
      <Container>
        <div className="relative w-full mt-12">
          <Images.connect className="w-full h-auto" />
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={80}
            color="#e4e4e7"
            refresh
          />
        </div>
      </Container>
    </div>
  );
};

export default Connect;

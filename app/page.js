import Hero from "@/components/marketing/hero";
import Companies from "@/components/marketing/companies";
import Features from "@/components/marketing/features";
import Connect from "@/components/marketing/connect";
import Perks from "@/components/marketing/perks";
import Pricing from "@/components/marketing/pricing";
import Reviews from "@/components/marketing/reviews";
import CTA from "@/components/marketing/cta";
import Background from "@/components/global/background";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";

import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <Background>
      <Wrapper className="relative py-20">
        <Container className="relative">
          <Spotlight
            className="left-0 -top-40 md:left-60 md:-top-20"
            fill="rgba(255, 255, 255, 0.5)"
          />
          <Hero />
        </Container>
        <Container className="py-8 lg:py-20">
          <Companies />
        </Container>
        <Connect />
        <Features />
        <Perks />
        <Pricing />
        <Reviews />
        <CTA />
      </Wrapper>
    </Background>
  );
}

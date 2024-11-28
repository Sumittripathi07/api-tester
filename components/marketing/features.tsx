"use client";

import Container from "../global/container";
import Icons from "../global/icons";
import Images from "../global/images";
import MagicCard from "../ui/magic-card";
import { Ripple } from "../ui/ripple";
import { SectionBadge } from "../ui/section-bade";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-12 md:py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
          <SectionBadge title="Features" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Get quicker and
            <br /> faster response
          </h2>
          <p className="mt-6 text-base text-center md:text-lg text-accent-foreground/80">
            🌟 Real-Time API Request Testing: Send requests with customizable
            headers and payloads.
          </p>
        </div>
      </Container>
      <div className="w-full mt-16">
        <div className="flex flex-col items-center w-full gap-5 lg:gap-5">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-5 lg:gap-5">
              <MagicCard
                particles={true}
                className="flex flex-col items-start size-full bg-primary/[0.08]"
              >
                <div className="flex items-center justify-center bento-card min-h-72">
                  <span className="relative mx-auto text-muted-foreground group-hover:text-foreground">
                    <Icons.stars className="w-20 h-20" />
                  </span>
                  <Ripple />
                </div>
              </MagicCard>
              <MagicCard
                particles={true}
                className="flex flex-col items-start w-full bg-primary/[0.08]"
              >
                <div className="flex-row w-full gap-6 bento-card">
                  <div className="w-full h-40">
                    <Images.analytics className="w-full h-full" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-medium font-heading heading ">
                      Detailed Response Insights
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground">
                      View response codes, time, size, and data all at a glance.
                    </p>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container>
          <Container>
            <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-5">
              <MagicCard
                particles={true}
                className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]"
              >
                <div className="flex-row w-full gap-6 bento-card">
                  <div className="relative w-full h-52">
                    <Images.ideation className="w-full h-full" />
                    <div className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl -z-10 top-1/2 left-1/2"></div>
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-medium font-heading heading">
                      Copy with a Click
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground">
                      Easily copy response data to the clipboard for your
                      development needs.
                    </p>
                  </div>
                </div>
              </MagicCard>
              <div className="grid gap-5 grid-rows lg:gap-5">
                <MagicCard
                  particles={true}
                  className="flex flex-col items-start w-full row-span- row-start-[0.5] h-32 bg-primary/[0.08]"
                >
                  <div className="relative items-center justify-center w-full bento-card">
                    <div className="absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <p className="text-base text-muted-foreground text-justify [mask-image:radial-gradient(50%_50%_at_50%_50%,#BAB3FF_0%,rgba(186,179,255,0)_90.69%)]">
                        We use AI to help you create content that resonates with
                        your audience. Our tools are designed to optimize your
                        content creation and engagement like never before.
                        Transform your social media strategy with Luro AI&apos;s
                        cutting-edge features. Reach your audience with the
                        right message at the right time. Create content faster
                        and smarter with Luro AI. Transform your social media
                        strategy with Luro AI&apos;s cutting-edge features.
                        Create content faster and smarter with Luro AI.
                        Transform your social media strategy with Luro AI&apos;s
                        cutting-edge features. Create content faster and smarter
                        with Luro AI.
                      </p>
                    </div>
                    <div className="relative w-full h-16">
                      <Images.centeral className="w-full h-full" />
                      <div className="absolute z-10 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl top-1/2 left-1/2"></div>
                    </div>
                  </div>
                </MagicCard>
                <MagicCard
                  particles={true}
                  className="flex flex-col items-start w-full row-start-2 !h-max bg-primary/[0.08]"
                >
                  <div className="relative w-full gap-6 bento-card">
                    <div className="relative w-full h-48">
                      <Images.rings className="absolute inset-0 w-full h-full" />
                      <Images.rings className="absolute w-56 h-56 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                      <Icons.icon className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-80" />
                      <Images.circlePallete className="w-full h-full opacity-30" />
                    </div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full w-28 h-28 bg-primary/10 blur-3xl -z-10 top-1/2 left-1/2"></div>
                  </div>
                </MagicCard>
              </div>
              <MagicCard
                particles={true}
                className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]"
              >
                <div className="flex-row w-full gap-6 bento-card">
                  <div className="flex flex-col mb-auto">
                    <h4 className="text-xl font-medium font-heading heading ">
                      Responsive Design
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground">
                      Perfectly optimized for desktop, tablet, and mobile
                      screens.
                    </p>
                  </div>
                  <div className="relative w-full h-28">
                    <Images.integration className="w-full h-full" />
                    <div className="absolute -translate-x-1/2 -translate-y-full rounded-full w-28 h-28 bg-primary/10 blur-3xl -z-10 top-1/2 left-1/2"></div>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container>
          {/* <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[.40fr_1fr] w-full gap-5 lg:gap-5">
              <MagicCard
                particles={true}
                className="flex flex-col items-start w-full bg-primary/[0.08]"
              >
                <div className="flex-row w-full gap-6 bento-card">
                  <div className="w-full">
                    <Images.image className="w-full h-40 lg:h-auto" />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-medium font-heading heading ">
                      Image generation with AI
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground">
                      Create stunning images with AI-powered tools in seconds.
                    </p>
                  </div>
                </div>
              </MagicCard>
              <MagicCard
                particles={true}
                className="flex flex-col items-start w-full bg-primary/[0.08]"
              >
                <div className="flex-row w-full gap-6 bento-card">
                  <div className="w-full">
                    <Images.hash className="w-full h-40 lg:h-52" />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-medium font-heading heading ">
                      Hashtags suggestions
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground">
                      Get hashtag suggestions based on your content and audience
                      to increase your reach and engagement.
                    </p>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container> */}
        </div>
      </div>
    </div>
  );
};

export default Features;

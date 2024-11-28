import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../global/container";

const Hero = () => {
  return (
    <div className="relative z-40 flex flex-col items-center w-full max-w-5xl mx-auto my-24 text-center">
      <Container delay={0.0}>
        <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
          <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
            <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <Link href={"https://github.com/Sumittripathi07"} target="_blank">
            <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent">
              Explore other applicatons
              <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
                What&apos;s new
                <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
              </span>
            </span>
          </Link>
        </div>
      </Container>
      <BlurText
        word={"Simplified API Testing Experience"}
        className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading"
      />
      <Container delay={0.1}>
        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base lg:text-lg text-accent-foreground/60">
          This API Testing application combines functionality and beauty to
          provide a seamless experience for developers.
          {/* <span className="hidden sm:inline">
            This API Testing application combines functionality and beauty to
            provide a seamless experience for developers.
          </span> */}
        </p>
      </Container>
      <Container delay={0.2}>
        <div className="flex items-center justify-center mt-8 md:gap-x-6">
          <Button asChild size="lg">
            <Link href="/testapi">Test API</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="hidden md:flex"
          >
            <Link href="/about">How it works</Link>
          </Button>
        </div>
      </Container>
      <Container delay={0.3}>
        <div className="relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-4 mt-12">
          <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

          <div className="rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black">
            <Image
              src="/images/dashboard.png"
              alt="dashboard"
              width={1920}
              height={1080}
              className="rounded-lg lg:rounded-[20px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
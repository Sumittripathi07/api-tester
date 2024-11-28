import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";

const Footer = () => {
  return (
    <footer className="relative w-full py-10">
      <Container>
        <Wrapper className="relative flex flex-col justify-between pb-40 overflow-hidden md:flex-row footer">
          <Particles
            className="absolute inset-0 w-full -z-10"
            quantity={40}
            ease={10}
            color="#d4d4d8"
            refresh
          />
          <div className="flex flex-col items-start max-w-48">
            <div className="flex items-center gap-2">
              <Icons.icon className="w-5 h-5" />
              <span className="text-xl font-medium">RapidReq</span>
            </div>
            <p className="mt-4 text-base max-w">Simplify your API Testing</p>
            <Button className="mt-8">
              <Link href="/app">Start for free</Link>
            </Button>
          </div>
          <div className="grid w-full max-w-lg grid-cols-2 gap-8 mt-10 lg:grid-cols-4 md:mt-0">
            {FOOTER_LINKS?.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h4 className="text-sm font-medium">{section.title}</h4>
                <ul className="w-full space-y-4">
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className="w-full text-sm transition-all text-muted-foreground hover:text-foreground"
                    >
                      <Link href={link.href} className="w-full">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper className="relative flex items-center justify-between pt-10">
          <p className="text-sm text-secondary-foreground">
            &copy; {new Date().getFullYear()} RapidReq. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/sumittripathi07/"
              target="_blank"
              className="p-1"
            >
              <Icons.instagram className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <Link
              href="https://x.com/iamSumit076"
              target="_blank"
              className="p-1"
            >
              <Icons.twitter className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <Link
              className="p-1"
              href="mailto:sumit.tpt07@gmail.com"
              target="_blank"
            >
              <Icons.gmail className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
          </div>
        </Wrapper>
      </Container>
    </footer>
  );
};

export default Footer;

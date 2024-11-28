"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PLANS } from "@/constants";
import { cn } from "@/functions";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import NumberTicker from "../ui/number-ticker";
import { SectionBadge } from "../ui/section-bade";

type Plan = "monthly" | "yearly";

const Pricing = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-12 md:py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center max-w-xl mx-auto text-center">
          <SectionBadge title="Choose your plan" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Simple and transparent pricing
          </h2>
          <p className="mt-6 text-base text-center md:text-lg text-accent-foreground/80">
            Choose the plan that suits your needs. No hidden fees, no surprises.
          </p>
        </div>
      </Container>
      <div className="relative flex flex-col items-center justify-center w-full mt-8">
        <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10"></div>
        <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10"></div>
        <Container>
          <Tabs
            defaultValue="monthly"
            className="flex flex-col items-center justify-center w-full"
          >
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-14">
                {PLANS.map((plan, index) => (
                  <Plan key={index} index={index} {...plan} plan="monthly" />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-14">
                {PLANS.map((plan, index) => (
                  <Plan key={index} index={index} {...plan} plan="yearly" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </div>
    </div>
  );
};

const Plan = ({
  id,
  title,
  desc,
  monthlyPrice,
  yearlyPrice,
  buttonText,
  features,
  index,
  plan,
}: {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number;
  yearlyPrice: number;
  buttonText: string;
  features: string[];
  index: number;
  plan: Plan;
}) => {
  const getDisplayedPrice = (
    plan: string,
    monthlyPrice: number,
    yearlyPrice: number
  ) => {
    if (plan === "monthly") {
      return monthlyPrice === 0 ? 0 : monthlyPrice;
    } else if (plan === "yearly") {
      const discountedPrice = Math.round((yearlyPrice * 0.8) / 12);
      return yearlyPrice === 0 ? 0 : discountedPrice;
    }
    return 0;
  };

  const displayedPrice = getDisplayedPrice(plan, monthlyPrice, yearlyPrice);

  return (
    <div
      key={index}
      className="relative flex flex-col w-full saturate-150 rounded-2xl"
    >
      <div
        className={cn(
          "flex flex-col size-full border rounded-2xl relative p-3 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]",
          id === "pro" ? "border-primary/80" : "border-border/60"
        )}
      >
        {id === "pro" && (
          <div className="absolute inline-flex items-center px-1 -translate-x-1/2 rounded-full select-none max-w-fit min-w-min whitespace-nowrap h-7 bg-gradient-to-r from-primary to-violet-500 -top-3 left-1/2">
            <span className="flex-1 text-sm px-2 font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent bg-[length:250%_100%] animate-background-shine">
              Most Popular
            </span>
          </div>
        )}
        <div className="flex flex-col w-full p-3">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="mt-2 text-sm break-words text-muted-foreground">
            {desc}
          </p>
        </div>
        <hr
          className="w-full h-px border-none shrink-0 bg-border"
          role="separator"
        />
        <div className="relative flex flex-col flex-1 w-full h-full gap-4 p-3 text-left break-words align-top">
          <div className="flex items-end gap-2">
            <div className="flex items-end w-40 gap-1">
              <span className="text-3xl font-bold md:text-4xl">
                $
                {displayedPrice === 0 ? (
                  0
                ) : (
                  <NumberTicker value={displayedPrice} />
                )}
              </span>
              {/* In here 120 * 0.8 = 96 and /12 to get monthly price */}
              <span className="text-lg font-medium text-muted-foreground font-headin">
                per {plan === "monthly" ? "month" : "month"}
              </span>
            </div>
            <AnimatePresence>
              {id !== "free" && plan === "yearly" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                  className="text-xs px-2 py-0.5 rounded mb-1 text-foreground bg-primary font-medium"
                >
                  -20%
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <ul className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckIcon
                  aria-hidden="true"
                  className="w-5 h-5 text-primary"
                />
                <p className="text-sm md:text-base text-muted-foreground">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center w-full h-auto p-3 mt-">
          <Button
            asChild
            variant={id === "pro" ? "default" : "tertiary"}
            className="w-full shadow-none hover:scale-100 hover:translate-y-0"
          >
            <Link href={""}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

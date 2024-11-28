import { Icons } from "@/components";
import { ZapIcon, ChartSplineIcon, LifeBuoyIcon, PaletteIcon, ShieldCheckIcon, WaypointsIcon, BrainCircuitIcon, SparklesIcon } from "lucide-react";
import React from "react";

export const PERKS = [
    {
        icon: ZapIcon,
        title: "Fast and Efficient",
        description: "Experience quick and seamless response."
    },
    {
        icon: ChartSplineIcon,
        title: "Response Time Tracking",
        description: "Measure the time taken to process requests and responses in milliseconds."
    },
    {
        icon: LifeBuoyIcon,
        title: "24/7 Support",
        description: "Our team is available around the clock to assist with any issues or questions."
    },
    {
        icon: PaletteIcon,
        title: "Dynamic Request Body",
        description: "Support for raw JSON, form data, and other payload formats for POST and PUT requests."
    },
    {
        icon: ShieldCheckIcon,
        title: "Secure and Reliable",
        description: "Trust our platform to keep your data safe and ensure consistent performance."
    },
    {
        icon: WaypointsIcon,
        title: "HTTP Methods Support",
        description: "Test all major HTTP methods, including GET, POST, PUT, DELETE, PATCH, and more."
    },
];
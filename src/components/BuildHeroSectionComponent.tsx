```tsx
// components/Hero.tsx
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary text-white py-24 md:py-36 lg:py-48"
    >
      <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Unlock Your Potential
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-xl mx-auto">
            Join our community and access the resources you need to achieve your
            goals. We offer a supportive environment and expert guidance to
            help you succeed.
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
```
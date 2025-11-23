```tsx
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Welcome to Our Awesome Product
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Your solution to making amazing apps with a great UI.
        </p>
        <Button>
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
```
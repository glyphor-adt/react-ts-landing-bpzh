```tsx
import React from 'react';
import { Rocket, ShieldCheck, Users, LayoutDashboard } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const featuresData: Feature[] = [
  {
    title: 'Blazing Fast Performance',
    description: 'Experience unparalleled speed and efficiency with our optimized platform.',
    icon: <Rocket className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Unbreakable Security',
    description: 'Rest easy knowing your data is protected by state-of-the-art security measures.',
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Collaborative Teamwork',
    description: 'Effortlessly collaborate with your team and achieve more together.',
    icon: <Users className="h-6 w-6 text-primary" />,
  },
    {
    title: 'Intuitive Dashboard',
    description: 'Get a clear overview of your key metrics and manage your workflow with ease.',
    icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary-foreground">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                      {feature.icon}
                      <span>{feature.title}</span>
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
```
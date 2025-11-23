```tsx
// components/Pricing.tsx
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";

interface FeatureItemProps {
  feature: string;
  included: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, included }) => {
  return (
    <div className="flex items-center space-x-2">
      {included ? (
        <CheckCircle className="h-4 w-4 text-green-500" />
      ) : (
        <XCircle className="h-4 w-4 text-red-500" />
      )}
      <span>{feature}</span>
    </div>
  );
};


interface PlanProps {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: { feature: string; included: boolean; }[];
}

const plans: PlanProps[] = [
  {
    name: "Basic",
    priceMonthly: 9,
    priceYearly: 99,
    description: "Essential features to get started.",
    features: [
      { feature: "1 User", included: true },
      { feature: "Limited Storage", included: true },
      { feature: "Basic Support", included: true },
      { feature: "Custom Domains", included: false },
    ],
  },
  {
    name: "Pro",
    priceMonthly: 19,
    priceYearly: 199,
    description: "Advanced features for professionals.",
    features: [
      { feature: "5 Users", included: true },
      { feature: "Unlimited Storage", included: true },
      { feature: "Priority Support", included: true },
      { feature: "Custom Domains", included: true },
    ],
  },
  {
    name: "Enterprise",
    priceMonthly: 49,
    priceYearly: 499,
    description: "Custom solutions for large teams.",
    features: [
      { feature: "Unlimited Users", included: true },
      { feature: "Unlimited Storage", included: true },
      { feature: "24/7 Support", included: true },
      { feature: "Custom Domains", included: true },
    ],
  },
];



const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Choose the plan that's right for you
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Simple, transparent pricing. No hidden fees.
        </p>
        <div className="mt-4 flex items-center justify-center space-x-2">
          <Label htmlFor="pricing-toggle" className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Monthly
          </Label>
          <Switch id="pricing-toggle" checked={isMonthly} onCheckedChange={setIsMonthly} />
          <Label htmlFor="pricing-toggle" className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Yearly
          </Label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${isMonthly ? plan.priceMonthly : plan.priceYearly}
                <span className="text-sm text-gray-500">/{isMonthly ? "month" : "year"}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <FeatureItem feature={feature.feature} included={feature.included} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
```
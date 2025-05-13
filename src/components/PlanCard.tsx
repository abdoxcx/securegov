
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Language, getTranslation } from "./LanguageSelector";

interface PlanCardProps {
  name: string;
  targetAudience: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  recommended?: boolean;
  language: Language;
  ctaKey: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  targetAudience,
  monthlyPrice,
  yearlyPrice,
  features,
  recommended = false,
  language,
  ctaKey,
}) => {
  const monthlySaving = Math.round((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12) * 100);
  
  return (
    <Card className={`border ${recommended ? 'border-green-emerald border-2' : 'border-gray-light'} h-full flex flex-col relative overflow-hidden`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-green-emerald text-white py-1 px-4 rounded-bl-lg text-sm font-medium">
          {getTranslation(language, "recommended")}
        </div>
      )}
      
      <div className={`absolute top-0 left-0 w-full h-1 ${recommended ? 'bg-green-emerald' : 'bg-blue-royal'}`}></div>
      
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold text-blue-royal">{name}</h3>
        <p className="text-sm text-gray-dark">{targetAudience}</p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-3xl font-bold text-blue-royal">{monthlyPrice}</span>
            <span className="ml-1 text-gray-dark"> MAD / {getTranslation(language, "monthAbbr")}</span>
          </div>
          <div className="mt-1 text-sm text-gray-dark">
            <span className="font-medium">{yearlyPrice} MAD / {getTranslation(language, "yearAbbr")}</span>
            <Badge variant="outline" className="ml-2 bg-green-emerald bg-opacity-10 text-green-emerald border-green-emerald">
              -{monthlySaving}%
            </Badge>
          </div>
        </div>
        
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-2 mt-0.5">
                <Check size={16} className="text-green-emerald" />
              </div>
              <span className="text-sm text-gray-dark">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-6">
        <Button
          className={`w-full ${recommended ? 'bg-green-emerald hover:bg-green-emerald hover:opacity-90' : 'bg-blue-royal hover:bg-blue-royal hover:opacity-90'}`}
        >
          {getTranslation(language, ctaKey)}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;

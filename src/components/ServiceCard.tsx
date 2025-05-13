
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Language, getTranslation } from "./LanguageSelector";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  language: Language;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  language,
}) => {
  return (
    <Card className="border border-gray-light h-full flex flex-col">
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold text-blue-royal">{title}</h3>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-dark mb-4">{description}</p>
        <div className="font-semibold text-blue-royal">{price}</div>
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" className="w-full border-blue-royal text-blue-royal hover:bg-blue-royal hover:text-white">
          {getTranslation(language, "requestQuote")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;

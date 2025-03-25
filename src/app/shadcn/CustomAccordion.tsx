import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function CustomAccordion() {
  return (
    <div className="w-[200px]">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Coded Design?</AccordionTrigger>
        <AccordionContent>
          Thank you for subscribing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Coded UI?</AccordionTrigger>
        <AccordionContent>
          Learn figma from Moa'az.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
}

export default CustomAccordion;

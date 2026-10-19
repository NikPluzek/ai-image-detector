import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"

const items = [
  {
    value: "Functionality",
    trigger: "How does it work?",
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime. All plans include automatic backups, 24/7 support, and unlimited team members.",
  },
  {
    value: "security",
    trigger: "Is my data secure?",
    content:
      "Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits. All data is encrypted at rest and in transit using industry-standard protocols.",
  },
  {
    value: "integration",
    trigger: "What integrations do you support?",
    content:
      "We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more. You can also build custom integrations using our REST API and webhooks.",
  },
]

export default function App() {
  return (
    <div className="p-8 min-h-screen flex flex-col">
      <header className="flex justify-end">
        <ModeToggle />
      </header>
      <div className="flex-1 justify-center items-center flex flex-col ">
        <h1 className="text-3xl font-bold mb-4">AI Detector</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Upload</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Field>
                  <FieldLabel htmlFor="picture">Picture</FieldLabel>
                  <Input id="picture" type="file" />
                  <FieldDescription>Select a picture to upload.</FieldDescription>
                </Field>
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <footer className="w-full max-w-md mx-auto min-h-64">
        <Accordion
          type="single"
          collapsible
          className="max-w-lg rounded-lg border"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b px-4 last:border-b-0"
            >
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </footer>
    </div>
  )
}
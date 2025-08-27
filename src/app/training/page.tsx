import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const trainingContent = [
  {
    id: 'item-1',
    title: 'Getting Started with VR',
    content:
      'To get started, ensure your VR headset is properly connected and calibrated. Launch the EduImmerse Ghana application and select a module from the dashboard. You can navigate menus using the controllers. We recommend completing the introductory tutorial first.',
  },
  {
    id: 'item-2',
    title: 'Navigating Modules',
    content:
      'Inside a VR module, you can typically move around using the joystick on your controller. To interact with objects, point your controller and press the trigger button. Look for highlighted objects or text prompts for clues on what to do next.',
  },
  {
    id: 'item-3',
    title: 'Safety Protocols',
    content:
      "For your safety, please ensure you are in a clear, open space before starting a VR session. We recommend taking a 15-minute break for every hour of use to prevent eye strain or dizziness. If you feel any discomfort, remove the headset immediately.",
  },
  {
    id: 'item-4',
    title: 'What is Adaptive Difficulty?',
    content:
      "Our adaptive difficulty feature uses AI to personalize your learning path. After completing a module, you can submit your score and time taken. Based on your performance, the AI will adjust the module's difficulty to keep you challenged but not overwhelmed.",
  },
  {
    id: 'item-5',
    title: 'How to Provide Feedback?',
    content:
      "Your feedback is valuable! On each module's page, you'll find a feedback form. You can rate the module, report any technical issues, or share your thoughts. This helps us improve the learning experience for everyone.",
  },
];

export default function TrainingPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Training & Support</h1>
        <p className="text-muted-foreground">
          Find answers to common questions and learn how to get the most out of
          EduImmerse.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {trainingContent.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger className="text-lg">{item.title}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { modules } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Check, Bot } from 'lucide-react';
import { AdaptiveDifficultyForm } from './_components/adaptive-difficulty-form';

export default function ModuleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const module = modules.find((m) => m.id === params.id);

  if (!module) {
    notFound();
  }

  return (
    <div className="mx-auto grid max-w-6xl flex-1 auto-rows-max gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge variant="outline">{module.difficulty}</Badge>
                <CardTitle className="mt-2 text-3xl">{module.title}</CardTitle>
                <CardDescription className="mt-1">
                  {module.longDescription}
                </CardDescription>
              </div>
              <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={module.image}
                  alt={module.title}
                  fill
                  className="object-cover"
                  data-ai-hint={module.imageHint}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {module.videoUrl ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <video
                  key={module.videoUrl} // Key ensures the video element re-renders on source change
                  src={module.videoUrl}
                  controls
                  className="h-full w-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-muted">
                <p className="text-muted-foreground">No video available</p>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot /> Adaptive Learning
            </CardTitle>
            <CardDescription>
              Submit your performance to let our AI adapt the module difficulty
              for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AdaptiveDifficultyForm moduleName={module.title} />
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Learning Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {module.learningObjectives.map((obj, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Module Content</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {module.content.map((item, index) => (
                <li key={index}>
                  <div className="flex justify-between">
                    <span>{item.title}</span>
                    <span className="text-muted-foreground">
                      {item.duration} min
                    </span>
                  </div>
                  {index < module.content.length - 1 && (
                    <Separator className="my-2" />
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

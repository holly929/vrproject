import type { Module } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
}

export function ModuleCard({ module }: ModuleCardProps) {
  const totalDuration = module.content.reduce(
    (acc, item) => acc + item.duration,
    0
  );

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/modules/${module.id}`} className="block">
        <Image
          alt={module.title}
          className="aspect-video w-full object-cover"
          height="337"
          src={module.image}
          width="600"
          data-ai-hint={module.imageHint}
        />
      </Link>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="leading-tight">
            <Link href={`/modules/${module.id}`}>{module.title}</Link>
          </CardTitle>
          <Badge
            variant={
              module.difficulty === 'Easy'
                ? 'secondary'
                : module.difficulty === 'Medium'
                  ? 'outline'
                  : 'default'
            }
            className="shrink-0"
          >
            {module.difficulty}
          </Badge>
        </div>
        <CardDescription>{module.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          {totalDuration} mins &middot; {module.content.length} parts
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="outline">
          <Link href={`/modules/${module.id}`}>
            Start Module <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

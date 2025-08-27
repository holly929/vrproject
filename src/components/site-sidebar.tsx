'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Box, BookOpen, Home, Settings, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/modules', label: 'Modules', icon: Box },
  { href: '/training', label: 'Training', icon: BookOpen },
];

const bottomLinks = [{ href: '/settings', label: 'Settings', icon: Settings }];

export function SiteSidebar() {
  const pathname = usePathname();

  const renderLink = (link: {
    href: string;
    label: string;
    icon: React.ElementType;
  }) => {
    const { href, label, icon: Icon } = link;
    const isActive =
      href === '/' ? pathname === href : pathname.startsWith(href);
    return (
      <Tooltip key={href}>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
              isActive && 'bg-accent text-accent-foreground'
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Tooltip>
    );
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-14 flex-col border-r bg-background sm:flex">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <GraduationCap className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">EduImmerse Ghana</span>
          </Link>
          {navLinks.map(renderLink)}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          {bottomLinks.map(renderLink)}
        </nav>
      </TooltipProvider>
    </aside>
  );
}

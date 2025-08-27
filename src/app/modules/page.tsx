import { ModuleCard } from '@/components/module-card';
import { modules } from '@/lib/data';

export default function ModulesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Modules</h1>
        <p className="text-muted-foreground">
          Explore our library of immersive VR learning experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
}

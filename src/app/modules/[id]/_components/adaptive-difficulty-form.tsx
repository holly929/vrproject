'use client';

import { useActionState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getAdaptedDifficulty } from '../actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Terminal } from 'lucide-react';
import { SubmitButton } from './submit-button';

const initialState = {
  message: null,
  errors: {},
  data: null,
};

export function AdaptiveDifficultyForm({
  moduleName,
}: {
  moduleName: string;
}) {
  const [state, formAction] = useActionState(getAdaptedDifficulty, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'Invalid form data. Please check your inputs.') {
      toast({
        title: state.message.startsWith('Success') ? 'Success!' : 'Error',
        description: state.message,
        variant: state.message.startsWith('Success') ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction}>
      <input type="hidden" name="moduleName" value={moduleName} />
      <div className="grid gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="score">Your Score (%)</Label>
            <Input
              id="score"
              name="score"
              type="number"
              placeholder="e.g., 85"
              required
            />
            {state.errors?.score && (
              <p className="text-sm font-medium text-destructive">
                {state.errors.score[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="timeTaken">Time Taken (minutes)</Label>
            <Input
              id="timeTaken"
              name="timeTaken"
              type="number"
              placeholder="e.g., 20"
              required
            />
            {state.errors?.timeTaken && (
              <p className="text-sm font-medium text-destructive">
                {state.errors.timeTaken[0]}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="feedback">Feedback (Optional)</Label>
          <Textarea
            id="feedback"
            name="feedback"
            placeholder="Any thoughts on the module? Was it too easy or too hard?"
            className="min-h-[100px]"
          />
        </div>
        <SubmitButton />
      </div>

      {state.data && (
        <Alert className="mt-6 bg-primary/5 border-primary/20">
          <Lightbulb className="h-4 w-4 text-primary" />
          <AlertTitle className="text-primary">
            Difficulty Adjusted to: {state.data.adjustedDifficulty}
          </AlertTitle>
          <AlertDescription>{state.data.reason}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}

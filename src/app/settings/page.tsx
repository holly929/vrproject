import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { user } from '@/lib/data';

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Update your personal information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue={user.name} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={user.email} />
              </div>
            </form>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Manage how you receive notifications from us.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label className="text-base">New Module Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when new learning modules are released.
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label className="text-base">Weekly Progress Reports</Label>
                <p className="text-sm text-muted-foreground">
                  Receive a summary of your learning activity every week.
                </p>
              </div>
              <Switch defaultChecked />
            </div>
             <div className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label className="text-base">System Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Be informed about new features and system maintenance.
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

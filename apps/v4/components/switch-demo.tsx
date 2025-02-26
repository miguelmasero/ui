import { Label } from "@/registry/new-york-v4/ui/label"
import { Switch } from "@/registry/new-york-v4/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-6">
     
      <Label className="flex items-center gap-6 rounded-lg border p-4 has-[[data-state=checked]]:border-blue-600">
        <div className="flex flex-col gap-1">
          <div className="font-medium">On the way</div>
          <div className="text-muted-foreground text-sm font-normal">
            Notify you&apos;re on the way
          </div>
        </div>
        <Switch
          id="switch-demo-focus-mode"
          className="data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600"
        />
      </Label>
    </div>
  )
}

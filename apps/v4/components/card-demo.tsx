import { ArrowRightCircleIcon, BathIcon, BedIcon } from "lucide-react"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Switch } from "@/registry/new-york-v4/ui/switch"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Card } from "@/registry/new-york-v4/ui/card"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/new-york-v4/ui/alert-dialog"

export function CancelBooking() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Cancel</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will mark the booking as cancelled.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Miguel</CardTitle>
        <CardDescription>Viva Bahriya 9, 1705</CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center gap-2">
        <Badge variant="outline">
          <BedIcon /> 2
        </Badge>
        <Badge variant="outline">
          <BathIcon /> 3
        </Badge>
        <Badge variant="outline">
          12:00 <ArrowRightCircleIcon /> 15:00
        </Badge>
        <div className="ml-auto font-medium tabular-nums">130 QAR</div>
      </CardFooter>

      <CardContent className="px-4">
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
      </CardContent>

      <CardFooter className="flex gap-4 justify-between">
        <CancelBooking />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size="lg">
              Start
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Start booking?</AlertDialogTitle>
            
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Confirm</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
            <Button variant="outline" size="lg" > Complete
        </Button>
      </CardFooter>

      <CardHeader>
        <CardTitle>Recent notes</CardTitle>
        <CardDescription>
          Latest notes you might want to know
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm gap-0">
        <p>
          Miguel requested booking Thursday at 2pm
        </p>
      </CardContent>
    </Card>
  )
}

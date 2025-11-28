import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";

interface TestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TestDialog({ open, onOpenChange }: TestDialogProps) {
  console.log("TestDialog rendering, open:", open);
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Test Dialog</DialogTitle>
          <DialogDescription>
            This is a test dialog to check if dialogs are working.
          </DialogDescription>
        </DialogHeader>
        <div className="p-4">
          <p>If you can see this, the dialog is working!</p>
          <Button onClick={() => onOpenChange(false)} className="mt-4">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}


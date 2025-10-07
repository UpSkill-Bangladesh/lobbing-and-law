import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";

const UnderConstructionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup on first load
    const hasSeenPopup = sessionStorage.getItem("hasSeenConstructionPopup");
    if (!hasSeenPopup) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenConstructionPopup", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <Construction className="h-16 w-16 text-gold animate-pulse" />
          </div>
          <DialogTitle className="text-center text-2xl">
            Under Construction
          </DialogTitle>
          <DialogDescription className="text-center text-base mt-4">
            Our website is currently being developed to serve you better. Some features may not be fully functional yet. Thank you for your patience!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button onClick={handleClose} variant="gold" size="lg">
            I Understand
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UnderConstructionPopup;

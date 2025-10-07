import { useState, useEffect } from "react";
import { X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const UnderConstructionPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenBanner = sessionStorage.getItem("hasSeenConstructionBanner");
    if (hasSeenBanner) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenConstructionBanner", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gold/90 to-gold/80 backdrop-blur-sm border-b border-gold/30 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Info className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-sm md:text-base text-primary font-medium">
              <span className="font-semibold">Welcome!</span> Our website is fully functional. We're continuously adding new features to serve you better.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="flex-shrink-0 h-8 w-8 p-0 hover:bg-primary/10"
            aria-label="Close notification"
          >
            <X className="h-4 w-4 text-primary" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionPopup;

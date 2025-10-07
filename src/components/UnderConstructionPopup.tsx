import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const UnderConstructionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const hasSeenBanner = sessionStorage.getItem("hasSeenConstructionBanner");
    if (!hasSeenBanner) {
      // Delay the popup appearance for a more natural feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenConstructionBanner", "true");
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleExpand = () => {
    setIsMinimized(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Minimized floating button */}
      {isMinimized ? (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <Button
            onClick={handleExpand}
            className="h-14 w-14 rounded-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <MessageCircle className="h-6 w-6 text-primary" />
          </Button>
        </div>
      ) : (
        /* Expanded chat bubble */
        <div className="fixed bottom-6 right-6 z-50 animate-slide-in-right">
          <div className="bg-gradient-to-br from-background to-background/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gold/20 max-w-sm w-80 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-gold to-gold/80 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-gold" />
                </div>
                <span className="font-semibold text-primary text-sm">Support Team</span>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleMinimize}
                  className="h-7 w-7 p-0 hover:bg-primary/10"
                  aria-label="Minimize"
                >
                  <span className="text-primary text-lg leading-none">−</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="h-7 w-7 p-0 hover:bg-primary/10"
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-primary" />
                </Button>
              </div>
            </div>

            {/* Message Content */}
            <div className="p-5">
              <div className="bg-gold/10 rounded-lg p-4 mb-3 border border-gold/20">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-semibold text-gold">Welcome! 👋</span>
                  <br />
                  <span className="text-muted-foreground">
                    Our website is fully functional. We're continuously adding new features to serve you better.
                  </span>
                </p>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Need help? Feel free to reach out to us!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UnderConstructionPopup;

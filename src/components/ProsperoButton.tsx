import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import prosperoLogo from "@/assets/images/Logo Prosperofood.png";

export const ProsperoButton = () => {
  const handleClick = () => {
    // Placeholder URL - you can replace this with the actual Prospero website
    const url = "https://prospero.example.com";
    window.open(url, "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            onClick={handleClick}
            className="fixed bottom-[120px] right-8 rounded-full w-[60px] h-[60px] bg-white hover:bg-gray-50 shadow-xl flex items-center justify-center z-50 p-0 overflow-hidden border-2 border-amber-600 transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <img 
              src={prosperoLogo} 
              alt="Prospero Food"
              className="w-full h-full object-contain p-2"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent 
          side="left" 
          className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-xl border border-gray-100"
          sideOffset={5}
        >
          <p className="text-sm font-medium text-gray-800">Visit Prospero Website ✨</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

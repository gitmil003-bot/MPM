import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hello! I'm interested in your chocolates." 
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    const formattedNumber = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            onClick={handleClick}
            className="fixed bottom-8 right-8 rounded-full w-[60px] h-[60px] bg-[#25D366] hover:bg-[#128C7E] shadow-xl flex items-center justify-center z-50 transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <FaWhatsapp className="w-7 h-7 text-white" />
          </Button>
        </TooltipTrigger>
        <TooltipContent 
          side="left" 
          className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-xl border border-gray-100"
          sideOffset={5}
        >
          <p className="text-sm font-medium text-gray-800">For more information, please contact us here! 👋</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
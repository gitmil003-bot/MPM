import { Button } from "@/components/ui/button";
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
    // Remove any non-numeric characters from the phone number
    const formattedNumber = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center z-50"
      size="icon"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </Button>
  );
};

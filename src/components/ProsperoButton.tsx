import { Button } from "@/components/ui/button";
import prosperoLogo from "@/assets/images/Logo Prosperofood.png";

export const ProsperoButton = () => {
  const handleClick = () => {
    // Replace with actual Prospero website URL
    const url = "https://prospero-food.com";
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-24 right-6 rounded-full w-16 h-16 bg-white hover:bg-gray-100 shadow-lg flex items-center justify-center z-50"
      size="icon"
    >
      <img 
        src={prosperoLogo} 
        alt="Prospero Food" 
        className="w-10 h-10 object-contain"
      />
    </Button>
  );
};

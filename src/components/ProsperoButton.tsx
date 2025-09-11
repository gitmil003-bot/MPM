import { Button } from "@/components/ui/button";
import prosperoLogo from "@/assets/images/Logo Prosperofood.png";

export const ProsperoButton = () => {
  const handleClick = () => {
    // Placeholder URL - you can replace this with the actual Prospero website
    const url = "https://prospero.example.com";
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-24 right-6 rounded-full w-16 h-16 bg-white hover:bg-gray-100 shadow-lg flex items-center justify-center z-50 p-0 overflow-hidden border-2 border-amber-600"
      size="icon"
      title="Visit Prospero"
    >
      <img 
        src={prosperoLogo} 
        alt="Prospero Food"
        className="w-full h-full object-contain p-2"
      />
    </Button>
  );
};

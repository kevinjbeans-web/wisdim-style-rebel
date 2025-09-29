import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "THE COMPANY" },
    { path: "/styles", label: "PICK YOUR STYLE" },
    { path: "/app", label: "COMING SOON" },
    { path: "/contact", label: "CONTACT US" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-gothic border-b border-border backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-gothic text-2xl font-bold text-primary hover:text-accent transition-colors">
            WISDIM
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-punk text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="md:hidden bg-card border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            MENU
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
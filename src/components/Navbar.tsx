import { Link } from "react-router-dom";
import { Store, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground hover:text-primary transition-colors">
            <Store className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nashik LocalConnect
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/vendors">
              <Button variant="ghost" size="sm" className="gap-2">
                <Search className="h-4 w-4" />
                Find Vendors
              </Button>
            </Link>
            <Button variant="default" size="sm">
              List Your Business
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

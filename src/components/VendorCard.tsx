import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Phone } from "lucide-react";

interface VendorCardProps {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  hours: string;
  phone: string;
  image?: string;
  isOpen?: boolean;
}

const VendorCard = ({
  id,
  name,
  category,
  location,
  rating,
  reviewCount,
  hours,
  phone,
  image,
  isOpen = true,
}: VendorCardProps) => {
  return (
    <Link to={`/vendor/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-border bg-card">
        {image && (
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-card-foreground line-clamp-1">{name}</h3>
              <Badge variant="secondary" className="mt-1 text-xs">
                {category}
              </Badge>
            </div>
            <Badge variant={isOpen ? "default" : "secondary"} className="text-xs">
              {isOpen ? "Open" : "Closed"}
            </Badge>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-medium text-card-foreground">{rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({reviewCount})</span>
          </div>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span className="line-clamp-1">{location}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-secondary" />
              <span>{hours}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" />
              <span>{phone}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default VendorCard;

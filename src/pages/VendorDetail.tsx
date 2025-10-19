import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Phone, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { mockVendors } from "@/data/mockVendors";
import vendorIcon from "@/assets/vendor-icon.png";

const VendorDetail = () => {
  const { id } = useParams();
  const vendor = mockVendors.find((v) => v.id === id);

  if (!vendor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Vendor not found</h1>
          <Link to="/vendors">
            <Button variant="default">Back to Vendors</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/vendors">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Vendors
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vendor Header */}
            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <img 
                    src={vendorIcon} 
                    alt={vendor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h1 className="text-3xl font-bold text-card-foreground mb-2">
                        {vendor.name}
                      </h1>
                      <Badge variant="secondary" className="text-sm">
                        {vendor.category}
                      </Badge>
                    </div>
                    <Badge variant={vendor.isOpen ? "default" : "secondary"}>
                      {vendor.isOpen ? "Open Now" : "Closed"}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${
                            i < Math.floor(vendor.rating) 
                              ? 'fill-primary text-primary' 
                              : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-card-foreground">
                      {vendor.rating.toFixed(1)}
                    </span>
                    <span className="text-muted-foreground">
                      ({vendor.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <p className="text-muted-foreground leading-relaxed">
                {vendor.description}
              </p>
            </Card>

            {/* Reviews Section */}
            <Card className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-6 text-card-foreground">
                Customer Reviews
              </h2>
              
              {vendor.reviews && vendor.reviews.length > 0 ? (
                <div className="space-y-4">
                  {vendor.reviews.map((review) => (
                    <div key={review.id} className="pb-4 border-b border-border last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-card-foreground">
                          {review.author}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < review.rating 
                                ? 'fill-primary text-primary' 
                                : 'text-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  No reviews yet. Be the first to review!
                </p>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="p-6 border-border bg-card">
              <h2 className="text-xl font-bold mb-4 text-card-foreground">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">{vendor.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">{vendor.hours}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <a 
                      href={`tel:${vendor.phone}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {vendor.phone}
                    </a>
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <Button className="w-full" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-6 border-border bg-card">
              <h2 className="text-xl font-bold mb-4 text-card-foreground">Location</h2>
              <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Map integration coming soon</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetail;

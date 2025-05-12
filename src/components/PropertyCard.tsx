
import React from 'react';
import { Button } from '@/components/ui/button';
import { Building, MapPin, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  imageUrl: string;
  type: 'rent' | 'sale' | 'land';
  featured?: boolean;
}

const PropertyCard = ({ 
  title, 
  location, 
  price, 
  bedrooms, 
  bathrooms, 
  area, 
  imageUrl,
  type,
  featured
}: PropertyCardProps) => {
  return (
    <div className={`property-card bg-white rounded-lg overflow-hidden shadow-md ${featured ? 'border-2 border-gold' : ''}`}>
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <Badge className={`absolute top-2 right-2 ${type === 'rent' ? 'bg-accent text-white' : type === 'sale' ? 'bg-secondary text-white' : 'bg-primary text-white'}`}>
          {type === 'rent' ? 'À louer' : type === 'sale' ? 'À vendre' : 'Terrain'}
        </Badge>
        {featured && (
          <Badge className="absolute top-2 left-2 bg-gold text-white">
            Coup de cœur
          </Badge>
        )}
        <button className="absolute bottom-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-gold/10">
          <Heart className="h-5 w-5 text-gold" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        
        {(bedrooms || bathrooms || area) && (
          <div className="flex items-center justify-between mt-3 text-sm text-gray-700 border-t border-b border-gray-100 py-2">
            {bedrooms && (
              <div className="flex items-center">
                <span className="font-medium">{bedrooms}</span>
                <span className="ml-1">Chambres</span>
              </div>
            )}
            
            {bathrooms && (
              <div className="flex items-center">
                <span className="font-medium">{bathrooms}</span>
                <span className="ml-1">SDB</span>
              </div>
            )}
            
            {area && (
              <div className="flex items-center">
                <span className="font-medium">{area}</span>
                <span className="ml-1">m²</span>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold text-gold">{price}</span>
          <Button size="sm" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
            Détails
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, LandPlot, Home, Building2, MapPin } from 'lucide-react';

const PropertyTypes = () => {
  const types = [
    {
      id: 1,
      title: "Appartements",
      count: 24,
      icon: <Building className="h-8 w-8 text-gold" />,
      description: "Appartements modernes et luxueux dans les quartiers prisés"
    },
    {
      id: 2,
      title: "Maisons",
      count: 18,
      icon: <Home className="h-8 w-8 text-gold" />,
      description: "Villas et maisons familiales avec jardin et sécurité"
    },
    {
      id: 3,
      title: "Terrains",
      count: 32,
      icon: <LandPlot className="h-8 w-8 text-gold" />,
      description: "Terrains constructibles dans des zones stratégiques"
    },
    {
      id: 4,
      title: "Bureaux",
      count: 9,
      icon: <Building2 className="h-8 w-8 text-gold" />,
      description: "Espaces professionnels pour entreprises et commerces"
    }
  ];

  return (
    <section id="types" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos <span className="text-gold">Services</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous proposons une large gamme de propriétés pour répondre à tous vos besoins immobiliers au Cameroun.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type) => (
            <Card key={type.id} className="hover:shadow-lg transition-shadow property-card border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                <div className="text-gold font-semibold mt-auto">
                  {type.count} propriétés disponibles
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-beige/50 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-lg">
              <h3 className="text-2xl font-bold mb-2">Vous cherchez une <span className="text-gold">propriété spécifique</span>?</h3>
              <p className="text-gray-600">
                Notre équipe d'experts est à votre disposition pour vous accompagner dans votre recherche personnalisée.
              </p>
            </div>
            <div className="flex items-center text-base bg-white px-6 py-3 rounded-full shadow-sm">
              <MapPin className="h-5 w-5 text-gold mr-2" />
              <span>Bureaux à Douala et Yaoundé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;

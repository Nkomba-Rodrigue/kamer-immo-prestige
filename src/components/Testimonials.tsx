
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialProps {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
  imageUrl?: string;
}

const Testimonial = ({ name, position, content, rating, imageUrl }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <Avatar className="h-14 w-14 border-2 border-gold">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback className="bg-gold text-white">{name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-sm text-gray-500">{position}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < rating ? 'text-gold fill-gold' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">"{content}"</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Ngono",
      position: "Propriétaire à Douala",
      content: "J'ai vendu mon appartement en un temps record grâce à Kameroun Prestige Immo. Leur expertise et leur professionnalisme ont fait toute la différence.",
      rating: 5,
      imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      id: 2,
      name: "Jean-Paul Mbarga",
      position: "Investisseur immobilier",
      content: "Une équipe sérieuse qui connaît parfaitement le marché camerounais. Mes investissements immobiliers sont en de bonnes mains.",
      rating: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Sophie Etonde",
      position: "Locataire à Yaoundé",
      content: "J'ai trouvé l'appartement de mes rêves en seulement deux visites. L'équipe a vraiment pris le temps de comprendre mes besoins.",
      rating: 4,
      imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-beige/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce Que Disent <span className="text-gold">Nos Clients</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui nous ont fait confiance pour leurs projets immobiliers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="p-6 bg-gold/5 inline-block rounded-lg max-w-xl mx-auto">
            <p className="text-xl font-playfair text-gold font-semibold italic">
              "Votre satisfaction est notre priorité absolue. Nous mettons notre expertise à votre service pour concrétiser vos projets immobiliers au Cameroun."
            </p>
            <p className="mt-4 font-bold text-gray-800">Alexandre Fouda</p>
            <p className="text-sm text-gray-600">Fondateur & Directeur, Kameroun Prestige Immo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

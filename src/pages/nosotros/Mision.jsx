import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import MisionCard from '../../components/identidad/MisionCard';
import ValorItem from '../../components/identidad/ValorItem';
import { mision, valores } from '../../constants/identidad';
import { Target } from 'lucide-react';

export default function Mision() {
  return (
    <>
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Nuestra **Misión**"
            subtitle="El propósito que guía día a día la formación de nuestros maestros."
            center
          />
          <div className="max-w-3xl mx-auto mt-12">
            <MisionCard
              title="Nuestra Misión"
              description={mision}
              icon={<Target className="w-8 h-8 text-gold" />}
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Nuestros **Valores**"
            subtitle="Principios que guían a nuestra comunidad universitaria."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-w-6xl mx-auto">
            {valores.map((valor, idx) => (
              <ValorItem key={idx} valor={valor} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

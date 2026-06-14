import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import MisionCard from '../../components/identidad/MisionCard';
import { vision } from '../../constants/identidad';
import { Telescope } from 'lucide-react';

export default function Vision() {
  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Nuestra **Visión**"
          subtitle="La meta hacia la que avanzamos como Escuela de Educación Primaria."
          center
        />
        <div className="max-w-3xl mx-auto mt-12">
          <MisionCard
            title="Nuestra Visión"
            description={vision}
            icon={<Telescope className="w-8 h-8 text-gold" />}
          />
        </div>
      </div>
    </div>
  );
}

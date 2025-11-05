import React from 'react';

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  title: string;
  description: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
      <img
        src={imageUrl}
        alt={`Foto de ${name}`}
        className="w-24 h-24 rounded-full object-cover ring-2 ring-brand-accent/50 p-1 flex-shrink-0"
      />
      <div>
        <h3 className="text-lg font-bold text-brand-primary">{name}</h3>
        <p className="text-brand-secondary font-semibold text-sm">{title}</p>
        <p className="text-brand-muted text-sm mt-1 max-w-md mx-auto sm:mx-0">
          {description}
        </p>
      </div>
    </div>
  );
};
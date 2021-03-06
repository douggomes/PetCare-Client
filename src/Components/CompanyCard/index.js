import React from 'react';

import PawLogo from '../../Assets/PawLogo';
// import PetShopDogLogo from '../../Assets/PetShopCompanyLogo.svg';
import PetShopDogLogo from '../../Assets/CompanyLogoDefault2.png';

import './styles.css';

export default function CompanyCard({ company }) {
  return (
    <a href={`/pet-shops/${company.id}`} className="link-company">
      <div className="box-company">
        <div className="image-area">
          <img src={company.avatar ? (company.avatar) : (PetShopDogLogo)} alt="Company Logo" />
        </div>
        <div className="company-information">
          <div className="name-petshop">
            <h1>{company.companyName}</h1>
          </div>
          <div className="description-petshop">
            <span>{company.description}</span>
          </div>
          <div className="paws-status">
            <div className="rate-paw">
              <span>{company.rate.toFixed(1)}</span>
              <PawLogo height="16" width="16" />
            </div>
            <div className="transition-dot" />
            <div className="status">
              <span>{company.status}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

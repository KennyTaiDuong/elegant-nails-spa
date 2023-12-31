import styled from "styled-components";
import jsonData from "../../data.json";
import { ServicesComponent } from "../components/ServicesComponent";

const ServicesContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 60rem;
  
  @media screen and (min-width: 1024px) {
    gap: 1rem;
    padding: 2rem 6rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 2rem;
  }
`;
const PricingHeader = styled.h2`
  color: #000;
  font-family: Jost;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  border-bottom:0.2rem solid #f9b698;
  padding:1rem;

  @media screen and (max-width: 540px) {
    font-size: 2.5rem;
  }
`;
const FancyFont = styled.h5`
  color: #f9b698;
  text-align: center;
  font-family: Euphoria Script;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: 540px) {
    font-size: 2.5rem;
  }
`;
const ServiceHeadingContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 15rem;
  padding: 2rem;
  justify-content: space-around;
`;
const ServiceLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const Services = () => {
  console.log(jsonData);

  const mappedManicure = jsonData.manicure.map((data: any, index) => {
    return <ServicesComponent key={index} {...data} />;
  });

  const mappedPedicure = jsonData.pedicure.map((data: any, index) => {
    return <ServicesComponent key={index} {...data} />;
  });
  
  const mappedWaxing = jsonData.waxing.map((data: any, index) => {
      return <ServicesComponent key={index} {...data} />;
  });
    
  const mappedKids = jsonData.kids.map((data: any, index) => {
      return <ServicesComponent key={index} {...data} />;
  });

  const mappedAdditionalServices = jsonData["additional services"].map((data: any, index) => {
      return <ServicesComponent key={index} {...data} />;
  })

  return (
    <ServicesContainer>
      <ServiceHeadingContainer>
        <FancyFont>Services</FancyFont>
        <PricingHeader>Manicure</PricingHeader>
      </ServiceHeadingContainer>
      <ServiceLayoutContainer>{mappedManicure}</ServiceLayoutContainer>

      <ServiceHeadingContainer>
        <PricingHeader>Pedicure</PricingHeader>
      </ServiceHeadingContainer>
      <ServiceLayoutContainer>{mappedPedicure}</ServiceLayoutContainer>

      <ServiceHeadingContainer>
        <PricingHeader>Waxing</PricingHeader>
      </ServiceHeadingContainer>
      <ServiceLayoutContainer>{mappedWaxing}</ServiceLayoutContainer>

      <ServiceHeadingContainer>
        <PricingHeader>Kids</PricingHeader>
      </ServiceHeadingContainer>
      <ServiceLayoutContainer>{mappedKids}</ServiceLayoutContainer>

      <ServiceHeadingContainer>
        <PricingHeader>Additional Services</PricingHeader>
      </ServiceHeadingContainer>
      <ServiceLayoutContainer>{mappedAdditionalServices}</ServiceLayoutContainer>
    </ServicesContainer>
  );
};

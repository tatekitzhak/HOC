import * as React from 'react';

import Pricing from './Pricing';
import Services from '@/components/pricing/Services';

import withPricingLayout from '@/hoc/pricing/withMainLayout';

const service_content = { // `someData` argument
  headline: 'Our Services',
  content: `Quickly build an effective pricing table for your potential customers with
this layout. It&apos;s built with default MUI components with little
customization.`,
};
const PricingLayout = withPricingLayout(Pricing)

const ServicesLayout = withPricingLayout(Services, service_content);

export default function MainLayout(props) {
  return (
    <>
      <ServicesLayout>
        {console.log(props)}
      </ServicesLayout>
    </>
  );
}
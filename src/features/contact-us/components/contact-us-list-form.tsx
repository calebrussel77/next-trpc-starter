import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

import { Field } from '@components/lib/Field/Field';
import { Button } from '@components/lib/button/button';
import { RadioCardOption } from '@components/lib/radio-card-option/radio-card-option';
import { RadioGroup } from '@components/lib/radio-group/radio-group';

import { formatPhoneNumber } from '@utils/misc';

const DOUALA_PHONE = '+237699597296';
const YAOUNDE_PHONE = '+237694431762';

const options = [
  {
    value: DOUALA_PHONE,
    label: `Agence Douala (${formatPhoneNumber(DOUALA_PHONE)})`,
    description: "Je souhaite contacter un responsable de l'agence de Douala.",
  },
  {
    value: YAOUNDE_PHONE,
    label: `Agence Yaoundé (${formatPhoneNumber(YAOUNDE_PHONE)})`,
    description: "Je souhaite contacter un responsable de l'agence de Yaoundé.",
  },
];

const ContactUsListForm = () => {
  const [value, setValue] = useState<string>(options[0].value);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    window.location.href = `https://wa.me/${value}`;
  };

  return (
    <>
      <form onSubmit={onSubmit} className="w-full space-y-6">
        <Field required>
          <RadioGroup
            name="contact-us"
            renderOption={RadioCardOption}
            controlled={true}
            onChange={handleChange}
            value={value}
            className="flex flex-col"
            options={options}
          />
        </Field>
        <div className="flex justify-end items-end w-full">
          <Button disabled={!value} className="w-auto">
            <span>Continuer</span>
            <BsArrowRight />
          </Button>
        </div>
      </form>
    </>
  );
};

export { ContactUsListForm };

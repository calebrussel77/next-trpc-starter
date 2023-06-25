import React, { type FC, type ReactElement } from 'react';

import { Animate } from '@/components/ui/animate';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { SectionMessage } from '@/components/ui/section-message';

import { useOnboardingSubscriber } from '../services';
import { FormSubscription } from './form-subscription';

interface FormSubscriptionModalProps {
  className?: string;
  children?: ReactElement;
}

const FORM_SUBSCRIPTION_ID = 'onboarding_subsciption';

const FormSubscriptionModal: FC<FormSubscriptionModalProps> = ({
  children,
}) => {
  const { onSubscribe, isLoading, isSuccess } = useOnboardingSubscriber();

  return (
    <Dialog>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Content className="sm:max-w-[525px]">
        <Animate>
          <Dialog.Header>
            <Dialog.Title>
              S'inscrire pour le lancement d'Agorasafe
            </Dialog.Title>
            <Dialog.Description>
              Nous sommes en cours de développement. Si vous souhaitez
              bénéficier d'une exclusivité inédite et être parmi les premiers à
              découvrir nos fonctionnalités avant tout le monde, remplissez le
              formulaire d'inscription ci-dessous.
            </Dialog.Description>
          </Dialog.Header>
          {isSuccess ? (
            <SectionMessage
              title="Inscription réussie"
              hasCloseButton={false}
              appareance="success"
            >
              <p className="text-sm md:text-base">
                Merci d'avoir souscrit à l'enregistrement ! Un mail vous a été
                envoyé à votre adresse email afin de confirmer votre
                inscription.
              </p>
            </SectionMessage>
          ) : (
            <div className="p-6">
              <FormSubscription
                formId={FORM_SUBSCRIPTION_ID}
                onSubmit={onSubscribe}
              />
            </div>
          )}
          {!isSuccess && (
            <Dialog.Footer>
              <Button
                type="submit"
                disabled={isLoading}
                form={FORM_SUBSCRIPTION_ID}
              >
                {isLoading ? 'Chargement...' : "M'inscrire"}
              </Button>
            </Dialog.Footer>
          )}
        </Animate>
      </Dialog.Content>
    </Dialog>
  );
};

export { FormSubscriptionModal };

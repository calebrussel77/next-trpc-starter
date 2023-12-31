import { useMutation } from '@tanstack/react-query';
import { useKeenSlider } from 'keen-slider/react';
import React, { type FC } from 'react';

import { Animate } from '@/components/ui/animate';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { Image } from '@/components/ui/image';
import { SectionMessage } from '@/components/ui/section-message';

import { FormSubscription } from '@/features/onboarding-souscription';
import { FormSubscriptionModal } from '@/features/onboarding-souscription/components/form-subscription-modal';
import { useOnboardingSubscriber } from '@/features/onboarding-souscription/services';

interface HeroSectionProps {
  className?: string;
}

const images = [
  '/images/coiffeur-homme-salon.jpg',
  '/images/femme-menage.jpg',
  '/images/coiffure-femme.jpg',
  '/images/cordonnier-africain-02.jpg',
];

const DURATION_MS = 8_000;

const HeroSection: FC<HeroSectionProps> = ({}) => {
  const [opacities, setOpacities] = React.useState<number[]>([]);

  // TODO : Refactor this, by using custom hook
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: images.length,
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          slide => slide.portion
        );
        setOpacities(new_opacities);
      },
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, DURATION_MS);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="relative isolate overflow-hidden bg-brand-900 md:pb-10">
        <div ref={sliderRef} className="absolute inset-0 -z-20">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="fader__slide"
              style={{ opacity: opacities[idx] }}
            >
              <Image
                src={src}
                alt="Images banner"
                className="absolute inset-0 -z-20 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 -z-10 bg-opacity-70 bg-gray-900 h-full w-full object-cover" />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-yellow-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl pt-32 pb-16 lg:pb-24">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-white/30 hover:ring-white/40">
                Enregistrez-vous dès aujourd'hui pour être parmi les premiers à
                profiter des services exceptionnels sur Agorasafe.
                <FormSubscriptionModal>
                  <button className="ml-0.5 font-semibold text-brand-400">
                    <span className="absolute inset-0" aria-hidden="true" />{' '}
                    Inscrivez-vous maintenant{' '}
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </FormSubscriptionModal>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Découvrez des services exceptionnels à des prix abordables
              </h1>
              <p className="mt-6 text-base md:text-lg leading-8 text-gray-200">
                Que vous ayez besoin d'un photographe, d'un mécanicien, d'un
                designer graphique, d'un frigoriste, et bien plus encore,
                Agorasafe vous offre un accès facile à une communauté de talents
                qualifiés, transparente et fiable à travers le cameroun.
              </p>
              <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-y-3 md:gap-y-0 md:gap-x-6">
                <FormSubscriptionModal>
                  <Button>Commencez maintenant</Button>
                </FormSubscriptionModal>
                <Button variant="link" className="text-white">
                  Live demo <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-500 to-yellow-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div id="home__changer" />
      </div>
    </>
  );
};

export { HeroSection };

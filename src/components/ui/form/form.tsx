/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from '@hookform/resolvers/zod';
import { type VariantProps, cva } from 'class-variance-authority';
import { type ComponentProps } from 'react';
import {
  type FieldValues,
  FormProvider,
  type SubmitHandler,
  type UseFormProps,
  type UseFormReturn,
  useForm,
} from 'react-hook-form';
import { type z } from 'zod';

interface Props<T extends FieldValues>
  extends Omit<ComponentProps<'form'>, 'onSubmit'>,
    VariantProps<typeof formToken> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

const formToken = cva(['disabled:opacity-70 disabled:cursor-not-allowed'], {
  variants: {
    gap: {
      sm: ['space-y-3'],
      md: ['space-y-6'],
      lg: ['space-y-9'],
      xl: ['space-y-12'],
    },
  },
  compoundVariants: [{ gap: 'md' }],
  defaultVariants: {
    gap: 'md',
  },
});

const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  gap,
  className,
  ...props
}: Props<T>) => (
  <FormProvider {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
      {/* <fieldset> passes the form's 'disabled' state to all of its elements,
            allowing us to handle disabled style variants with just className */}
      <fieldset
        disabled={form?.formState?.isSubmitting}
        className={formToken({
          gap,
          class: className,
        })}
      >
        {children}
      </fieldset>
    </form>
  </FormProvider>
);

export default Form;

interface UseZodFormProps<S extends z.ZodSchema>
  extends Exclude<UseFormProps<z.infer<S>>, 'resolver'> {
  schema?: S;
}

export const useZodForm = <S extends z.ZodSchema>({
  schema,
  ...formProps
}: UseZodFormProps<S>) =>
  useForm({
    ...formProps,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: schema ? zodResolver(schema) : undefined,
  });

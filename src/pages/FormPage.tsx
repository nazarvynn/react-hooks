import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'primereact/button';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormModel {
  firstName: string;
  lastName: string;
  phone: string;
}

const schema = yup
  .object({
    firstName: yup.string().required('First Name is required').default(''),
    lastName: yup.string().required('Last Name is required').default(''),
    phone: yup.string().required('Last Name is required').default(null),
  })
  .required();

function FormPage() {
  const defaultValues: FormModel = schema.getDefault();
  const form = useForm<FormModel>({ defaultValues, resolver: yupResolver(schema) });
  const { control, handleSubmit, reset, formState } = form;
  const { errors } = formState;

  const onSubmit = (formData: FormModel) => {
    console.log('formData', formData);
    reset();
  };
  const getFormErrorMessage = (name: keyof typeof errors) => {
    return errors[name] && <small className="p-error">{errors[name]?.message}</small>;
  };

  return (
    <div className="App">
      <h1>Prime React App</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <span className="p-float-label">
            <Controller
              name="firstName"
              control={control}
              render={({ field, fieldState }) => (
                <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
              )}
            />
            <label htmlFor="firstName" className={classNames({ 'p-error': errors.firstName })}>
              First Name
            </label>
          </span>
          {getFormErrorMessage('firstName')}
        </div>

        <div className="field">
          <span className="p-float-label">
            <Controller
              name="lastName"
              control={control}
              render={({ field, fieldState }) => (
                <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
              )}
            />
            <label htmlFor="lastName" className={classNames({ 'p-error': errors.lastName })}>
              Last Name
            </label>
          </span>
          {getFormErrorMessage('lastName')}
        </div>

        <div className="field">
          <span className="p-float-label">
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <InputMask
                  id={field.name}
                  {...field}
                  mask="(999) 999-9999"
                  className={classNames({ 'p-invalid': fieldState.invalid })}
                />
              )}
            />
            <label htmlFor="phone" className={classNames({ 'p-error': errors.phone })}>
              Phone
            </label>
          </span>
          {getFormErrorMessage('phone')}
        </div>
        <div className="mt-2">
          <Button type="submit" label="Submit" className="mr-2" />
          <Button
            label="Reset"
            onClick={() => {
              reset();
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default FormPage;

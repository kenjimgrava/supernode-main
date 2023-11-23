import styles from './FormComponent.module.scss'
import { ErrorMessage as FormikErrorMessage, Field } from "formik";

export const FieldLabel = ({
    label,
    name,
    required,
    optionalText,
  }: {
    label: string;
    name: string;
    className?: string;
    required?: boolean;
    optionalText?: string;
  }) => (
    <label htmlFor={name} className={styles.FieldLabel}>
      {label}
      {required && <span className={styles.Required}> *</span>}
      {optionalText && (
        <span className={`${styles.OptionalColor} text-dark`}>
          {" "}
          {optionalText}
        </span>
      )}
    </label>
);

export const GrErrorMessage = ({ name }: { name: string }) => (
    <FormikErrorMessage
      component="p"
      className={styles.ErrorMessage}
      name={name}
    />
);

export const TextArea = ({
    className = "",
    readonly = false,
    label,
    name,
    rows = 1,
    placeholder = "",
    subName,
  }: {
    className?: string;
    readonly?: boolean;
    label?: string;
    name: string;
    rows?: number;
    placeholder?: string;
    subName?: string;
  }) => (
    <div className={styles.FieldContainer}>
      {label && <FieldLabel label={label} name={name} />}
      {subName && <div className={styles.SubName}>{subName}</div>}
      <Field
        name={name}
        id={name}
        as="textarea"
        readOnly={readonly}
        rows={rows}
        className={`${styles.TextField} ${className}`}
        placeholder={placeholder}
      />
    </div>
);

export const TextField = ({
    className = "",
    readonly = false,
    type = "text",
    prefix = null,
    label,
    name,
    placeholder = "",
    required = false,
    optionalText = "",
    validate = "",
    maxLength,
  }: {
    className?: string;
    readonly?: boolean;
    type?: string;
    label?: string;
    name: string;
    prefix?: React.ReactNode;
    placeholder?: string;
    required?: boolean;
    optionalText?: string;
    validate?: any;
    maxLength?: number;
  }) => (
    <div className={styles.FieldContainer}>
      {label && (
        <FieldLabel
          label={label}
          name={name}
          required={required}
          optionalText={optionalText}
        />
      )}
      <Field
        name={name}
        id={name}
        readOnly={readonly}
        className={`${styles.TextField} ${className}`}
        type={type}
        prefix={prefix}
        placeholder={placeholder}
        validate={validate}
        maxLength={maxLength}
      />
      <GrErrorMessage name={name} />
    </div>
);



export const GrFormSubmission = ({
  isLoading,
  submitButton,
}: {
  isLoading: boolean;
  submitButton: React.ReactNode;
}) => <div>{submitButton}</div>;

export const GrTextField = ({
  className = "",
  readonly = false,
  type = "text",
  prefix = null,
  label,
  name,
  placeholder = "",
  required = false,
  optionalText = "",
  validate = "",
  maxLength,
}: {
  className?: string;
  readonly?: boolean;
  type?: string;
  label?: string;
  name: string;
  prefix?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  optionalText?: string;
  validate?: any;
  maxLength?: number;
}) => (
  <div className={styles.FieldContainer}>
    {label && (
      <FieldLabel
        label={label}
        name={name}
        required={required}
        optionalText={optionalText}
      />
    )}
    <Field
      name={name}
      id={name}
      readOnly={readonly}
      className={`${styles.TextField} ${className}`}
      type={type}
      prefix={prefix}
      placeholder={placeholder}
      validate={validate}
      maxLength={maxLength}
    />
    <GrErrorMessage name={name} />
  </div>
);


export const FormSubmission = ({
    isLoading,
    submitButton,
  }: {
    isLoading: boolean;
    submitButton: React.ReactNode;
  }) => <div>{submitButton}</div>;
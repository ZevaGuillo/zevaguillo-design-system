import { PropsWithChildren, ReactNode } from "react";

export interface FormProps extends PropsWithChildren {
  onSubmit?: (e: React.FormEvent) => void;
}

export const Form = ({ children, onSubmit }: FormProps) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export interface FormFieldProps extends PropsWithChildren {
  label?: string;
  error?: string;
}

export const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      {children}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

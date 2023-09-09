import React from "react";
import { useForm } from "react-hook-form";
import "./logInForm.css";

export default function LogInForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className="formWrap">
      <form className="logInForm" onSubmit={handleSubmit(handleFormSubmit)}>
        <FormInput
          label="User Name"
          name="userName"
          register={register}
          required
          minLength={4}
          pattern={/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm}
          placeholder="Enter your username"
          errors={errors} 
        />
        <FormInput
          label="Email"
          name="email"
          register={register}
          required
          pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
          placeholder="Enter your email"
          errors={errors} // Передайте errors как пропс
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function FormInput({ label, name, register, required, minLength, pattern, placeholder, errors }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="userInput"
        {...register(name, {
          required: required && "This field is required",
          minLength: minLength && {
            value: minLength,
            message: `Must be at least ${minLength} characters long`,
          },
          pattern: pattern && {
            value: pattern,
            message: "Invalid format",
          },
        })}
        type={name === "email" ? "email" : "text"}
        placeholder={placeholder}
      />
      {required && errors[name] && <p>{errors[name].message}</p>}
    </>
  );
}








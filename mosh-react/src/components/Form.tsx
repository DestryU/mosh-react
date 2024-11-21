import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);

//   const person = { name: "", age: 0 };

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     if (nameRef.current !== null) {
//       person.name = nameRef.current.value;
//     }
//     if (ageRef.current !== null) {
//       person.age = parseInt(ageRef.current.value);
//     }
//     console.log(person);
//   };

const schema = z.object({
  name: z.string().min(3, { message: "Tally Hoe!" }),
  age: z.number({ invalid_type_error: "Age field is required" }).min(18),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
      </div>

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

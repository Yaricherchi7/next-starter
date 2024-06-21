"use client";

import React, { useRef } from "react";

import { addTodo } from "@/actions/form";

function Form() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        await addTodo(formData);
      }}
    >
      <input type="text" name="title" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default Form;

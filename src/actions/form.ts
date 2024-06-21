"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

export const addTodo = async (formData: FormData) => {
  const title = formData.get("title");
  await prisma.todoList.create({
    data: {
      title: title as string
    }
  });
  revalidatePath("/todo");
};

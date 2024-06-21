// eslint-disable-next-line prettier/prettier

import Form from "@/components/form/form";
import prisma from "@/lib/prisma";

export default async function TodoPage() {
  const todos = await prisma.todoList.findMany();

  return (
    <main className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
      <Form />
      <ul>
        {todos?.map((todo: { id: string; title: string }) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  );
}

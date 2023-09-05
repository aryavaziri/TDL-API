"use client";
import Image from "next/image";

export default function Home() {
  const fetchData = async () => {
    await fetch(`http://localhost:3000/api/lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjMzM2VmODg1ZjljNmVkZTM1ODk4YyIsImlhdCI6MTY5Mzg0NTkwNCwiZXhwIjoxNjk0NzA5OTA0fQ.MC7OgffHGeWXH69jPByFO4WovqxaRm970IByyYwk6O0`,
      },
      body: JSON.stringify({ title: "ARYA" }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not OK");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border border-1 border-slate-200 grow">
      <p className="font-bold text-2xl">Hello, Welcome to ToDoList app!</p>
      <button onClick={fetchData}>fetch</button>
    </div>
  );
}

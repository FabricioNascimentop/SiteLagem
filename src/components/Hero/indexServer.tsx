import { prisma } from "@/lib/prisma";

export default async function Page() {
  const dashboards = await prisma.dashboards.findMany();
    console.log(dashboards)
  return (
    <main>
      a
    </main>
  );
}
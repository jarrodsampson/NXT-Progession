import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  return getItem(params.id);
}

const getItem = async (id: string) => {
  try {
    const userSearch = await prisma.superstars.findUnique({
      where: {
        id,
      },
    });
    if (userSearch) {
      return NextResponse.json(userSearch, { status: 200 });
    } else {
      return NextResponse.json({ error: "Superstar not found" }, { status: 404 });
    }
  } catch (e: unknown) {
    return NextResponse.json(
      {
        error: "An error occurred while processing your request" + e,
      },
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect();
  }
};

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 10;

export async function GET(req: NextRequest) {
  return searchItems(req);
}

const searchItems = async (req: NextRequest) => {
  const limit = req.nextUrl.searchParams.get("limit");
  const offset = req.nextUrl.searchParams.get("offset");
  const search = req.nextUrl.searchParams.get("search");

  try {
    let list: any = [];
    let total: Number = 0;
    let where = {
      name: {
        contains: `${search}`,
      },
    };

    if (search) {
      list = await prisma.superstars.findMany({
        skip: Number(offset) || DEFAULT_OFFSET,
        take: Number(limit) || DEFAULT_LIMIT,
        where,
      });
      total = await prisma.superstars.count({
        where,
      });
    } else {
      list = await prisma.superstars.findMany({
        skip: Number(offset) || DEFAULT_OFFSET,
        take: Number(limit) || DEFAULT_LIMIT,
      });
      total = await prisma.superstars.count();
    }
    let payload = { list, total };

    return NextResponse.json(payload, {
      status: 200,
    });
  } catch (e: unknown) {
    return NextResponse.json(
      {
        error: `An error occurred while processing your request ${e}`,
      },
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect();
  }
};

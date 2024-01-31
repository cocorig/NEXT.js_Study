import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { ParamsProps } from "@/types/Post";

export async function GET(req: Request, context: ParamsProps) {
  try {
    const { params } = context;
    console.log(params.id);
    const posts = await db.post.findFirst({
      where: {
        id: params.id,
      },
      include: {
        tag: true,
      },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "게시물을 가져올 수 없습니다." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, context: ParamsProps) {
  try {
    const { params } = context;
    console.log(params);
    await db.post.delete({
      where: {
        id: params.id,
      },
    });
    return new Response(null, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "게시물을 삭제할 수 없습니다." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, context: ParamsProps) {
  try {
    const { params } = context;
    const body = await req.json();

    await db.post.update({
      where: {
        id: params.id,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });
    return NextResponse.json(
      { message: "게시물을 성공적으로 갱신했습니다." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "게시물을 갱신할 수 없습니다." },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import User from '@/app/models/user';

import { connectMongoDB } from '@/lib/mongodb';

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();

    const user = await User.findOne({ email }).select('_id');

    return NextResponse.json({ user });
  } catch (error) {
    console.error(error);
  }
}

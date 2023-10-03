export const runtime = 'edge'; // 'nodejs' is the default

import { NextResponse } from 'next/server';
import { connect } from '@planetscale/database';

// const mysql = require('mysql2/promise');
// const conn = mysql.createConnection(process.env.DATABASE_URL);
const conn = connect({
  url: process.env.DATABASE_URL
});
export const GET = async (req: Request, res: Response) => {
  try {
    // get site query param
    const searchParams = new URL(req.url).searchParams;

    const collectionId = searchParams.get('collectionId');
    const bookId = searchParams.get('bookId');

    if (!collectionId || !bookId)
      return NextResponse.json({ errors: 'incorrect params' }, { status: 400 });

    //Get Hadith

    const hadith = await conn.execute(
      `SELECT id, collectionId, bookId, hadithNumber, label, arabic, englishTrans, primaryNarrator FROM hadith WHERE collectionId = ? AND bookId = ?`,
      [collectionId, bookId]
    );

    return NextResponse.json(hadith?.rows || []);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ errors: 'Server Error' }, { status: 500 });
  }
};

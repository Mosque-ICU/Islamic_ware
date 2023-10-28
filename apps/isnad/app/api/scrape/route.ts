export const runtime = 'edge';
import { NextResponse } from 'next/server';

var cheerio = require('cheerio');

export const GET = async (req: Request, res: Response) => {
  // get site query param
  const searchParams = new URL(req.url).searchParams;
  const site = searchParams.get('site');
  const currentBook = searchParams.get('currentBook');
  const collectionId = searchParams.get('collectionId');
  let lastHadithNumber = searchParams.get('lastHadithNumber') || 0;

  //@ts-ignore
  lastHadithNumber = parseInt(lastHadithNumber);

  if (!site || !currentBook || !collectionId)
    return NextResponse.json({ error: 'incorrect params' }, { status: 400 });

  // fetch site html
  const html = await fetch(site).then((res) => res.text());

  // load html into cheerio
  const $ = cheerio.load(html);

  let data = [] as any;

  //get label

  $('.hadith_reference_sticky').each(function (i: number, elem: any) {
    data[i] = { ...data[i], label: $(this).text() };
    data[i] = { ...data[i], bookId: currentBook };
    data[i] = { ...data[i], collectionId: collectionId };
  });

  // get arabic hadith
  $('.arabic_hadith_full').each(function (i: number, elem: any) {
    data[i] = { ...data[i], arabic: $(this).html().replaceAll('"', "'") };

    data[i] = {
      ...data[i],
      hadithNumber: lastHadithNumber + 1
    };

    lastHadithNumber++;
  });

  // get english translation
  $('.text_details').each(function (i: number, elem: any) {
    data[i] = { ...data[i], englishTrans: $(this).html().replaceAll('"', "'") };
  });

  //get narrator
  $('.hadith_narrated').each(function (i: number, elem: any) {
    data[i] = { ...data[i], primaryNarrator: $(this).text() };
  });

  return NextResponse.json(data);
};

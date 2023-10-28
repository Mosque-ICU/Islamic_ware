'use client';
import { Title, Card, Text, Badge } from '@tremor/react';
import { usePathname } from 'next/navigation';

import React, { Suspense } from 'react';
// import Search from '../../search';
// import UsersTable from '../../table';
import IsnadViewer from '../IsnadViewer/IsnadViewer';
import Loading from './loading';
import { addCacheValue, getCacheValue } from '../../_lib/cache';

function HadithView() {
  const path = usePathname();

  const [currentSelection, setCurrentSelection] = React.useState<any>(null);
  const [showIsnadView, setShowIsnadView] = React.useState(false);
  const [currentBook, setCurrentBook] = React.useState<any>(null);
  const [currentData, setCurrentData] = React.useState<any>([]) as any;
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!path) return setLoading(false);
    const urlSplit = path.split('/');
    const collectionId = urlSplit[1];
    const bookId = urlSplit[2];
    if (!collectionId && !bookId) return setLoading(false);
    setCurrentBook(bookId);
    fetchHadith(collectionMap[collectionId], bookId);
  }, [path]);

  const fetchHadith = async (collectionId: string, bookId: string) => {
    try {
      const url = `/api/hadith?collectionId=${collectionId}&bookId=${bookId}`;

      const cachedReq = await getCacheValue(url);
      if (cachedReq) {
        setLoading(false);
        return setCurrentData(cachedReq);
      }

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      setLoading(false);
      if (!data.errors) {
        setCurrentData(data);
        addCacheValue(data, url);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <main className="mx-auto w-full ">
        <div className="flex flex-row w-full">
          <div className=" p-5 w-full overflow-y-auto max-h-[calc(100vh-50px)]">
            {currentData && currentData.length !== 0 && (
              <Title className="mb-4 font-semibold">
                ({currentBook})باب كَيْفَ كَانَ بَدْءُ الْوَحْىِ إِلَى رَسُولِ
                اللَّهِ صلى الله عليه وسلم
              </Title>
            )}
            {currentData.map((hadith) => (
              <HadithContent
                hadith={hadith}
                setShowIsnadView={setShowIsnadView}
                key={hadith.hadithNumber}
              />
            ))}
          </div>
          {showIsnadView && (
            <Suspense fallback={<div>Loading...</div>}>
              <IsnadViewer close={() => setShowIsnadView(false)} />
            </Suspense>
          )}
        </div>
        {/* <Card className="mt-6">
          <UsersTable users={[]} />
        </Card> */}
      </main>
    </>
  );
}

const HadithContent = ({ hadith, setShowIsnadView }: any) => {
  const [showCommentaries, setShowCommentaries] = React.useState(false);
  return (
    <Card
      key={hadith.id}
      className="w-full mb-5"
      // onClick={() => setShowIsnadView(!showIsnadView)}
    >
      <p>
        {hadith.primaryNarrator} ( {hadith?.primaryNarratorEn} )
        {/* narrates: */}
      </p>
      <div className="flex md:flex-row flex-col justify-between mt-3">
        <p
          dangerouslySetInnerHTML={{ __html: hadith.englishTrans }}
          className="text-gray-700 mr-2"
        ></p>{' '}
        <p
          className="text-gray-700 text-[21px] md:ml-0 ml-3 mt-5 md:mt-0"
          dir="rtl"
          dangerouslySetInnerHTML={{ __html: hadith.arabic }}
        ></p>
      </div>

      <div className="flex flex-row  mt-2">
        <div>
          <p className="text-gray-700   text-sm">
            Hadith{' '}
            <span className="text-blue-500 cursor-pointer hover:underline">
              {hadith.hadithNumber}
            </span>
          </p>
          <p className="text-gray-700  mt-1 text-sm">
            Book{' '}
            <span className="text-blue-500 cursor-pointer hover:underline">
              {hadith.bookId} : {hadith.hadithNumber}
            </span>
          </p>
        </div>
        <div className="ml-12 flex flex-row mt-5">
          <p
            className="text-gray-700   text-sm hover:text-blue-500 cursor-pointer hover:shadow-sm rounded-md p-1"
            onClick={() => setShowIsnadView((prev) => !prev)}
          >
            Explore Isnad{' '}
          </p>
          <p
            onClick={() => setShowCommentaries(!showCommentaries)}
            className="text-gray-700  ml-3  text-sm hover:text-blue-500 cursor-pointer hover:shadow-sm rounded-md p-1"
          >
            Commentaries
          </p>

          <p
            title="Placeholder for grading of hadith. Only show for hadith not in Sahih Bukhari or muslim with multiple grading"
            className="text-gray-700  ml-3  text-sm hover:text-blue-500 cursor-pointer hover:shadow-sm rounded-md p-1"
          >
            Gradings
          </p>
        </div>
      </div>
      {showCommentaries && (
        <div className="slideInDown">
          <hr className="my-2" />

          <div className="flex flex-row">
            <Badge className="mr-2 cursor-pointer hover:shadow-sm" color="blue">
              Fathul Bari
            </Badge>
          </div>

          <div className="w-full h-[300px] flex justify-center items-center border border-gray-200 mt-3">
            Placeholder for commentary
          </div>
        </div>
      )}
    </Card>
  );
};

const collectionMap: any = {
  'sahih-bukhari': '1',
  'sahih-muslim': '2'
};

export default HadithView;

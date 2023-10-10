'use client';

import {
  Bars3Icon,
  MegaphoneIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import React from 'react';

import collectionsList from '../../_json/collectionsList.json';

function LeftSideBar({ children, setCurrentSelection }: any) {
  const [showSidebar, setShowSidebar] = React.useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = React.useState(false);
  const router = useRouter();

  //hide sidebar on mobile
  return (
    <>
      <div className=" h-[calc(100vh-53px)] hidden md:flex">
        <div
          className="w-[410px] card bg-white shadow-sm min-h-full border border-gray-100  mt-[1px] flex flex-row relative slideLeft"
          style={{ display: showSidebar ? 'flex' : 'none' }}
        >
          <Bars3Icon
            className="absolute top-2 right-2 w-5 h-5 text-gray-600 cursor-pointer z-50"
            onClick={() => setShowSidebar(false)}
          />
          <div
            className="  w-[50px] border border-gray-100 
            "
          ></div>

          <div className="flex flex-col w-full p-3 mt-2">
            <p
              className="mb-4  text-lg  text-underline
          "
            >
              Hadith Collections
            </p>
            {collectionsList.map((hadith) => (
              <HadithCollection
                key={hadith.id}
                hadith={hadith}
                setCurrentSelection={setCurrentSelection}
                navigate={(slug, bookId) =>
                  router.push(`/${hadith.slug}/${bookId}`)
                }
              />
            ))}
          </div>
        </div>
        {!showSidebar && (
          <Bars3Icon
            className="fixed top-[50px] left-2 w-5 h-5 text-gray-600 z-50 cursor-pointer "
            onClick={() => setShowSidebar(true)}
          />
        )}
        {children}
      </div>

      <div className="md:hidden relative  h-[calc(100vh-53px)]">
        {showMobileSidebar ? (
          <div className="absolute top-0 left-0 w-full h-full bg-white shadow-sm z-50 slieLeft">
            <XMarkIcon
              className="absolute top-2 right-2 w-5 h-5 text-gray-600"
              onClick={() => setShowSidebar(false)}
            />

            <div className="w-[400px] card bg-white shadow-sm min-h-full border border-gray-100  mt-[1px] flex flex-row  ">
              <div
                className="  w-[60px] border border-gray-100 
            "
              ></div>

              <div className="flex flex-col max-w-[100%]  mt-2 overflow-y-scroll p-3">
                <p
                  className="mb-4 font-semibold text-lg
          "
                >
                  Hadith Collections
                </p>
                {collectionsList.map((hadith) => (
                  <HadithCollection
                    key={hadith.id}
                    hadith={hadith}
                    setCurrentSelection={setCurrentSelection}
                    navigate={(slug, bookId) => {
                      router.push(`/${hadith.slug}/${bookId}`);
                      setShowMobileSidebar(false);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Bars3Icon
            className="fixed top-[50px] left-2 w-5 h-5 text-gray-600 z-50"
            onClick={() => setShowMobileSidebar(true)}
          />
        )}

        {children}
      </div>
    </>
  );
}

const HadithCollection = ({ hadith, navigate }: any) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [filter, setFilter] = React.useState('');

  const filteredBooks = () => {
    if (filter === '') return hadith.books;
    return hadith.books.filter((book: any) => {
      return book.title.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <div
      className="cursor-pointer    mb-1 hover:border-gray-500 hover:border-b"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <span className=" text-gray-700 hover:text-blue-500">
        {hadith.title}
        {isExpanded && <span className="text-gray-500"> (⬇️)</span>}
      </span>
      {isExpanded && (
        <div className="slideInDown">
          <input
            onClick={(e) => e.stopPropagation()}
            className="w-full p-1 mt-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-blue-500"
            placeholder="Search Books"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <div className="flex flex-col max-h-[65vh] overflow-y-auto ">
            {filteredBooks().map((book: any) => (
              <div
                className="flex flex-row hover:bg-blue-100 p-[2px] px-2 rounded-md hover:shadow-md text-sm cursor-pointer"
                key={book.id}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(hadith.slug, book.id);
                }}
              >
                <span>{book.id})</span> <p className="ml-2"> {book.title}</p>
                <p className="text-gray-500 ml-2">{book.numberOfHadith}</p>
              </div>
            ))}
          </div>
          {/* <hr className="my-1 border-gray-500" /> */}
        </div>
      )}
    </div>
  );
};

export default LeftSideBar;

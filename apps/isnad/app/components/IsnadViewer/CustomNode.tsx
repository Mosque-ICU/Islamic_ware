import React, { Fragment, memo } from 'react';
import { Handle, Position } from 'reactflow';
import {
  Button,
  Card,
  Flex,
  Text,
  TextInput,
  BarList,
  Badge
} from '@tremor/react';
import { Dialog, Transition } from '@headlessui/react';
import {
  ArrowRightIcon,
  MagnifyingGlassCircleIcon
} from '@heroicons/react/24/outline';

function CustomNode({ data }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="px-2 py-1 shadow-md rounded-md bg-white border-2 border-stone-300 relative">
        <div className="flex">
          <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
            {data.icon}
          </div>
          <div className="ml-2">
            <div className="text-lg font-bold">{data.name}</div>
            <div className="text-gray-500">{data.designation}</div>
          </div>
        </div>
        <Handle
          type="target"
          position={Position.Top}
          className="w-16 !bg-blue-500"
        />
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-16 !bg-blue-500"
        />
        <MagnifyingGlassCircleIcon
          className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700 absolute  right-2 bottom-1 hover:scale-110 transform transition-all hover:rotate-12 duration-300"
          onClick={openModal}
        />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-xl transform overflow-hidden ring-tremor bg-white
                                    p-6 text-left align-middle shadow-tremor transition-all rounded-xl"
                >
                  <Flex alignItems="center" justifyContent="between">
                    <Text className="text-base text-gray-700 font-medium">
                      Details
                    </Text>
                    <Text className="uppercase">{data.name}</Text>
                  </Flex>{' '}
                  <Button
                    className="mt-2 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300 md:hidden block"
                    onClick={closeModal}
                  >
                    Go back
                  </Button>
                  <TextInput
                    icon={ArrowRightIcon}
                    placeholder="Search..."
                    className="mt-6"
                  />
                  <div className="relative mt-4 h-[700px] overflow-y-scroll">
                    <Text>
                      Date of Birth - Date of Death (Age) - Place of Birth
                    </Text>
                    <div className="w-full h-[400px] flex justify-center items-center border border-gray-200 mt-3">
                      Placeholder for Bio
                    </div>
                    <Text className="mt-4 mb-2">Loacations</Text>
                    <Badge
                      className="mr-2 cursor-pointer hover:shadow-sm"
                      color="blue"
                    >
                      Medina al-Munawwarah
                    </Badge>

                    <Text className="mt-4 mb-2">Placeholer metrics</Text>
                    {data?.id !== 1 && (
                      <BarList
                        data={hadithData}
                        className="mr-4" // to give room for scrollbar
                        showAnimation={false}
                        valueFormatter={(value) => `${value} hadiths related`}
                      />
                    )}
                    <div className="sticky inset-x-0 bottom-0 p-6 bg-gradient-to-t from-white to-transparent h-20" />
                  </div>
                  <Button
                    className="mt-2 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300 md:block hidden"
                    onClick={closeModal}
                  >
                    Go back
                  </Button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const hadithData = [
  {
    name: 'Bukhari',
    value: 300
  },
  //...
  {
    name: 'Nasai',
    value: 30
  },
  {
    name: 'Tirmidhi',
    value: 57
  }
];

export default memo(CustomNode);

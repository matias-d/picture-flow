import { Dialog, Transition } from "@headlessui/react";
import { IconClose } from "../../icons/IconClose.jsx";
import { Fragment } from "react";

export function ModalPin({ onModal, isOpen, pinImage }) {
  return (
    
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[102]" onClose={onModal}>
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-black/80" />
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
                <Dialog.Panel className="w-full max-w-md lg:max-w-xl transform overflow-hidden rounded-2xl  p-6 text-left align-middle shadow-xl transition-all">
                   <img src={pinImage} className='rounded-3xl object-cover'/>
                   <div className="absolute top-8 right-12">
                    <button onClick={onModal}  className="bg-white/40 p-1 rounded-full text-white"><IconClose /></button>
                    </div>
                </Dialog.Panel>

         
            </Transition.Child>
            </div>
        </div>
        </Dialog>
    </Transition>
  )
}

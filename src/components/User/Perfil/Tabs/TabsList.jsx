import { classNames } from "../../../../utils/classNames.js";
import { Tab } from "@headlessui/react";
import { Created } from "./Created.jsx";
import { Saves } from "./Saves.jsx";
import { Actions } from "../Actions.jsx";

export function TabsList () {
    return (
        <Tab.Group>
                <Tab.List className="flex items-center gap-x-4 mb-6">
                    <Tab
                        className={({ selected }) =>
                            classNames(
                            'font-semibold  px-4 py-2 rounded-3xl hover:bg-gray-200 relative',
                            selected ? 'border-b-2 border-black' : 'border-none'
                            )
                        }
                        >
                        Creados
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            classNames(
                            'font-semibold  px-4 py-2 rounded-3xl hover:bg-gray-200 relative',
                            selected ? 'border-b-2 border-black' : 'border-none'
                            )
                        }
                        >
                        Guardados
                    </Tab>
                </Tab.List>
                <Actions />
                <Tab.Panels className="mt-2">
                    <Tab.Panel>
                        <Created />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Saves />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
    )
}
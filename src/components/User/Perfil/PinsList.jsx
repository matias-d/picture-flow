import { usePins } from "../../../store/pins/pins.store.js"
import { Pin } from "./Pin.jsx"

export function PinsList () {

    const pins = usePins(state => state.pins)

    return (
        <section className="px-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                pins.map(pin => (
                    <Pin key={pin.id} image={pin.image}/>
                ))
            }
        </section>
    )
}
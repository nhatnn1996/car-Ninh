import { useEffect, useRef, useState } from 'react'
export default function useOnClickOutside(ref: any, handler: (event: any) => void) {
    const inside = useRef(false)
    useEffect(
        () => {
            const listener = (event: any) => {
                // console.log(ref.current.contains(event.target))

                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    inside.current = true
                    return
                }
                if (inside.current) {
                    inside.current = false
                    handler(event)
                }
            }
            document.addEventListener('mousedown', listener)
            document.addEventListener('touchstart', listener)
            return () => {
                document.removeEventListener('mousedown', listener)
                document.removeEventListener('touchstart', listener)
            }
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    )
}

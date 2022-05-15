import { ReactNode, useEffect } from "react"
import { useLocation } from "react-router-dom"

interface Props {
    children: ReactNode
}

export default function AnchorScroller(props: Props) {
    let location = useLocation()

    useEffect(() => {
        if (location.hash !== "") {
            let elementId = location.hash.substring(1)

            let element = document.getElementById(elementId)
            if (element === null) {
                return
            }

            element.scrollIntoView()
        }
    }, [location.hash])

    return props.children as JSX.Element
}
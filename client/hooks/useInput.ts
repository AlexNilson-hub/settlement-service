import {useState} from "react"


const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange=(event: any, newValue: string | null) => {
        setValue(newValue);
    }

    return {
        value, onChange
    }
}

export default useInput;

















// import {useState} from "react"
//
//
// export default function useInput(initialValue) {
//     const [value, setValue] = useState(initialValue);
//
//     const onChange = e => {
//         setValue(e.target.value)
//     }
//     return {
//         value, onChange
//     }
// }
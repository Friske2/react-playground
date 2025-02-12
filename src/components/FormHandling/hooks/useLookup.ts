import { useState } from "react";
import { Gender,Skill } from '../types';
function useLookup() {
    const [genders] = useState<Gender[]>([
        {
            value: 'M',
            label: "Male"
        },
        {
            value: 'F',
            label: 'Female'
        }
    ])
    const [skills] = useState<Skill[]>([
        {
            value: 'JS',
            label: 'Javascript'
        },
        {
            value: 'TS',
            label: 'Typescript'
        },
        {
            value: 'PY',
            label: 'Python'
        },
        {
            value: 'JAVA',
            label: 'Java'
        },
        {
            value: 'C#',
            label: 'C#'
        }
    ])

    return {genders,skills}
}

export default useLookup;
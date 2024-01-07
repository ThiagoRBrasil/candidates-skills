'use client'

import React, { useState } from 'react'
import { HiPlus } from "react-icons/hi";
import ButtonAction from "@component/ButtonAction";
import Input from "@component/Input";
import { SlMagnifier } from 'react-icons/sl';

export default function FormSearch() {
  const [skills, setSkills] = useState<string[]>([])
  const [typeSkill, setTypeSkill] = useState('')
  const [showMessageErrorToSearch, setShowMessageErrorToSearch] = useState(false)

  function handleAddSkill() {
    setSkills(state => [...state, typeSkill])
    setShowMessageErrorToSearch(false)
    setTypeSkill(() => '')
  }

  function handleSearchCandidate() {
    if (skills.length == 0 || typeSkill.length != 0) {
      setShowMessageErrorToSearch(true)
      return 0;
    }
    console.log(JSON.stringify(skills))
  }

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col self-end gap-2">
          {skills.map((skill, index) => (
            <Input key={`skill-added-${index}`} value={skill} />
          ))}
          <Input value={typeSkill} onChange={item => {
            setTypeSkill(() => item.target.value)
            setShowMessageErrorToSearch(false)
          }} />
        </div>
        <div className="flex self-end ms-4">

          <ButtonAction type="secondary" label="" icon={HiPlus} onClick={handleAddSkill} />
        </div>
      </div>

      <div className='mt-6 flex flex-col justify-center items-center'>
        {showMessageErrorToSearch && (
          <p className='text-red-600'>Adicione a skill antes de buscar</p>
        )}
        <ButtonAction type="primary" label="Buscar" icon={SlMagnifier} onClick={handleSearchCandidate} />
      </div>
    </>
  );
}
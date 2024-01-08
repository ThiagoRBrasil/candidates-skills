'use client'

import React, { useState } from 'react'
import api from '@service/api'
import ButtonAction from "@component/ButtonAction";
import Input from "@component/Input";
import Urls from '@helpers/address'
import { HiPlus } from "react-icons/hi";
import { IoSendSharp } from "react-icons/io5";

interface ICandidate {
  id: string;
  name: string;
  skills: string[];
}

export default function FormSearch() {
  const [name, setName] = useState('')
  const [skills, setSkills] = useState<string[]>([])
  const [typeSkill, setTypeSkill] = useState('')
  const [showMessageErrorToSearch, setShowMessageErrorToSearch] = useState(false)
  const [customMessage, setCustomMessage] = useState('')

  function handleAddSkill() {
    if (typeSkill.length == 0) {
      return 0;
    }

    setSkills(state => [...state, typeSkill])
    setShowMessageErrorToSearch(false)
    setTypeSkill(() => '')
  }

  async function handleSearchCandidate() {
    if (skills.length == 0 || typeSkill.length != 0) {
      setShowMessageErrorToSearch(true)
      setCustomMessage('')
      return 0;
    }

    try {
      const response = await api.post(Urls.candidates.POST, {
        name,
        skills
      })

      switch (response.status) {
        case 201:
          setCustomMessage('Candidato cadastrado com sucesso!')
          setName('')
          setSkills([])
          break;
        default:
          setCustomMessage('Erro interno no servidor!')
          setSkills([])
          break;
      }
    } catch (error) {
      setCustomMessage('Erro interno no servidor!')
    }
  }

  return (
    <>
      <div>
        <div className="flex flex-row justify-between mb-6 items-center gap-2">
          <Input label='Nome' value={name} onChange={item => {
            setName(() => item.target.value)
            setShowMessageErrorToSearch(false)
            setCustomMessage('')
          }} />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col self-end gap-2">
            {skills.map((skill, index) => (
              <Input key={`skill-added-${index}`} defaultValue={skill} />
            ))}
            <Input label='Skill' value={typeSkill} onChange={item => {
              setTypeSkill(() => item.target.value)
              setShowMessageErrorToSearch(false)
              setCustomMessage('')
            }} />
          </div>
          <div className="flex self-end ms-4">

            <ButtonAction type="secondary" label="" icon={HiPlus} onClick={handleAddSkill} />
          </div>
        </div>

        <div className='mt-6 flex flex-col justify-center items-center'>
          {showMessageErrorToSearch && (
            <p className='text-red-600'>Preencha o nome e/ou clique para adicionar a skill</p>
          )}

          {customMessage && customMessage.length != 0 && (
            <p className='text-orange-600'>{customMessage}</p>
          )}
          <ButtonAction type="primary" label="Cadastrar" icon={IoSendSharp} onClick={handleSearchCandidate} />
        </div>
      </div>

    </>
  );
}
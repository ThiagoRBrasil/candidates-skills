'use client'

import React, { useState } from 'react'
import { HiPlus } from "react-icons/hi";
import ButtonAction from "@component/ButtonAction";
import Input from "@component/Input";
import { SlMagnifier } from 'react-icons/sl';
import Urls from '@helpers/address'
import api from '@service/api'
import { AxiosError } from 'axios';

interface ICandidate {
  id: string;
  name: string;
  skills: string[];
}

export default function FormSearch() {
  const [skills, setSkills] = useState<string[]>([])
  const [typeSkill, setTypeSkill] = useState('')
  const [showMessageErrorToSearch, setShowMessageErrorToSearch] = useState(false)
  const [customMessage, setCustomMessage] = useState('')

  const [candidate, setCandidate] = useState<ICandidate | null>(null)

  function handleAddSkill() {
    if (typeSkill.length == 0) {
      return 0;
    }

    setSkills(state => [...state, typeSkill])
    setShowMessageErrorToSearch(false)
    setCustomMessage('')
    setTypeSkill(() => '')
  }

  async function handleSearchCandidate() {
    if (skills.length == 0 || typeSkill.length != 0) {
      setShowMessageErrorToSearch(true)
      setCustomMessage('')
      return 0;
    }

    try {
      const { data } = await api.get(Urls.candidates.GET, { params: { skills: skills.join() } })
      setCandidate(data)
      setSkills([])
    } catch (error) {
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 400:
            setCustomMessage('Nenhum candidato encontrado com essa(s) habilidade(s)')
            setSkills([])
            setCandidate(null)
            break;
          default:
            setCustomMessage('Erro interno no servidor')
            setSkills([])
            setCandidate(null)
            break;
        }
      }
      setCandidate(null)
    }
  }

  return (
    <>
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col self-end gap-2">
            {skills.map((skill, index) => (
              <Input key={`skill-added-${index}`} defaultValue={skill} />
            ))}
            <Input value={typeSkill} onChange={item => {
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
            <p className='text-red-600'>Clique para adicionar a skill</p>
          )}

          {customMessage && customMessage.length != 0 && (
            <p className='text-orange-600'>{customMessage}</p>
          )}

          <ButtonAction type="primary" label="Buscar" icon={SlMagnifier} onClick={handleSearchCandidate} />
        </div>

        {!!candidate && (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skills</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">{candidate.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{candidate.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{candidate.skills.join(', ')}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
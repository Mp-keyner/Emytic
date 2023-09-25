import React, { use, useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, arrayMove, horizontalListSortingStrategy, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Image from 'next/image'


const Usert = ({ user }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: user.id
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className='p-[1pc] flex items-center justify-center '
    >
      <span className=' p-[1pc] border border-black rounded-md Nene'>{user.name}</span>
    </div>
  )
}




const Dnd = ({ initialState, FinalState }) => {
  const [people, setPeople] = useState(initialState)
  const HandleDragEnd = (event) => {
    const { active, over } = event
    console.log('Drag End')
    const oldIndex = people.findIndex((person) => person.id == active.id)
    const newIndex = people.findIndex((person) => person.id == over.id)
    console.log('Active', active)
    console.log('Over', over)
    const NewOder = arrayMove(people, oldIndex, newIndex)
    setPeople(NewOder)
    console.log(people)
  }
  return (
    <div className='flex flex-col gap-[1pc]'>
      <div className='border border-black  flex items-center justify-center w-[60pc]'>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={HandleDragEnd}
        >
          <SortableContext
            items={people}
            strategy={horizontalListSortingStrategy}
          >
            {
              people.map((user) => (
                <Usert user={user} key={user.id} />
              ))
            }
          </SortableContext>
        </DndContext>
      </div>
      <div className='flex items-center gap-[1pc]'>
        <button className='text-[#ffca09] border border-[#ffca09] rounded-md p-[0.7pc] flex items-center reiniciar' onClick={() => setPeople(initialState)}>
          <Image
            className='w-[1.5pc]'
            src='https://finances-roan.vercel.app/static/media/repeat.293fa1b1ce3c7a1759e23dd071251a70.svg'
            width={300}
            height={300}
            alt='imagen de reset'
          />
          Rreiniciar
        </button>
        <button className='text-[#fff] border border-[#fff] rounded-md p-[0.7pc] flex items-center reiniciar' onClick={() => setPeople(FinalState)}>
          <Image
            className='w-[1.5pc]'
            src='/img/Resolver.svg'
            width={300}
            height={300}
            alt='imagen de reset'
          />
          Resolver
        </button>
      </div>
    </div>
  )
}

export default Dnd
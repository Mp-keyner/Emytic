import React, { use, useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


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
      className=' h-[5pc] w-[8pc] m-[1pc]'
    >
      <span className='text-white p-[1pc] border border-white'>{user.name}</span>
    </div>
  )
}




const Dnd = () => {
  const initialState = [
    { name: 'keyner', id: 1 },
    { name: 'oswaldo', id: 2 },
    { name: 'pedro', id: 3 },
  ]
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
  }
  return (
    <>
      <div >
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={HandleDragEnd}
        >
          <SortableContext
            items={people}
            strategy={verticalListSortingStrategy}
          >
            {
              people.map((user) => (
                <Usert user={user} key={user.id} />
              ))
            }
          </SortableContext>
          <p className='text-white'>Hello pedro</p>
        </DndContext>
      </div>
      <button className='text-white border border-white rounded-md p-[0.7pc]' onClick={() => setPeople(initialState)}>
        CLick
      </button>
    </>
  )
}

export default Dnd
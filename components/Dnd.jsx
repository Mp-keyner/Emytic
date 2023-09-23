import React, { use, useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
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
  const [people, setPeople] = useState([
    { name: 'keyner', id: 1 },
    { name: 'oswaldo', id: 2 },
    { name: 'pedro', id: 3 },
  ])
  const HandleDragEnd = (event) => {
    const { active, over } = event
    console.log('Drag End')
    console.log('Active', active)
    console.log('Over', over)
  }
  return (
    <>
      <div className='h-[10pc]'>
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
    </>
  )
}

export default Dnd
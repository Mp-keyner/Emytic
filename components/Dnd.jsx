import React, { use, useState } from 'react'
import { DndContext } from '@dnd-kit/core'

const Dnd = () => {
    const [people, setPeople] = useState([
        {name: 'keyner', id: 1},
        {name: 'oswaldo', id: 2},
        {name: 'pedro', id: 3},
    ])
  return (
    <>
        <DndContext>

        </DndContext>
    </>
  )
}

export default Dnd
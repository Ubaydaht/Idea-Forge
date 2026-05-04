import React from 'react'
import IdeaCard from '../components/IdeaCard'

const IdeaHero = () => {
  return (
    <>
        <div className='w-100'>
            <h1 className='text-center'>Ideas</h1>
            <div>
                <IdeaCard title='Hotel management' description= 'Build a website to manage hotel clients' subtle='Website' subtlee='React' posterName = 'Adeola' day='2'/>
            <IdeaCard title='Hotel management' description= 'Build a website to manage hotel clients' subtle='Website' subtlee='React' posterName = 'Adeola' day='2'/>
            <IdeaCard title='Hotel management' description= 'Build a website to manage hotel clients' subtle='Website' subtlee='React' posterName = 'Adeola' day='2'/>
            </div>
        </div>
    </>
  )
}

export default IdeaHero
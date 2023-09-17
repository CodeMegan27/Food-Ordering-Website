import React from 'react'
import './Tags.module.css'
import { Link } from 'react-router-dom'

export default function Tags({tags, forFoodPage}) {
  return (
    <div className="flex flex-wrap"
        style={{
            justifyContent: forFoodPage ? 'start' : 'center'
        }}
    >
        {
            tags.map((tag) => (
                <Link className='bg-slate-400 text-slate-600 m-3 p-3 hover:bg-slate-700 hover:text-white rounded-xl text-xs' key={tag.name} to={`/tag/${tag.name}`}>
                    {tag.name}
                    {!forFoodPage && `(${tag.count})`}
                </Link>
            )
            )
        }
    </div>
  )
}

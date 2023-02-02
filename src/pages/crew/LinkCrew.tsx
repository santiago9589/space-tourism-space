import React from 'react'
import { LinksUrl } from '../../types/LinkUrl'
import { Link} from "react-router-dom"

interface propsCrewLink{
    active:boolean
    handleCrew:()=>void
}

const LinkComponentCrew = ({active,handleCrew}: propsCrewLink) => {

  return (
      <section onClick={handleCrew} className= {`${!active ? ("opacity-50 "):("")} bg-whiteReq w-4 h-4 rounded-full`}></section>
  )
}

export default LinkComponentCrew


import { FunctionComponent } from 'react'
import { Category } from '../types'

export const NavItem: FunctionComponent<{
  value: Category | 'All'
  handlerFilterCategory: Function
  active: string
}> = ({ value, handlerFilterCategory, active }) => {
  let className = 'capitalize cursor-pointer hover:text-orange'
  if (active === value) className += ' text-orange'

  return (
    <li
      className={className}
      onClick={() => handlerFilterCategory(value)}
    >
      {value}
    </li>
  )
}

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function
  active: string
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="All" {...props} />
      <NavItem value="Web" {...props} />
      <NavItem value="Mobile" {...props} />
    </div>
  )
}

export default ProjectsNavbar

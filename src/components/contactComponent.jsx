import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

const ContactComponent = ({contact, remove, conect}) => {

 

return (
  <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li key={contact.email} className="col-span-2 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h2 className="truncate text-sm font-medium text-gray-900">{contact.name}</h2>
              <p className="mt-1 truncate text-sm text-gray-500">{contact.lastName}</p>
              <p className="mt-1 truncate text-sm text-gray-500">{contact.email}</p>
              <i className="inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium">
               {contact.conect ?
               (<i onClick={() => conect(contact)} className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
               Línea </i>): 
               (<i onClick={() => conect(contact)} className="inline-block flex-shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
               ocupado </i>)}
              </i>
            </div>
          </div>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <i
                onClick={() => remove(contact)} onPointerEnter={{color:'tomato'}}
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <span className="ml-3">Borrar</span>
              </i>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={`tel:${contact.phone}`}
                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <span className="ml-3">Call</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    
  </ul>
)
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    remove: PropTypes.func.isRequired,
    conect: PropTypes.func.isRequired
}

export default ContactComponent
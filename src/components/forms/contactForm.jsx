import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class';
const ContactForm = ({add}) => {
    const nameRef=useRef('');
    const lastNameRef=useRef('');
    const emailRef=useRef('');
    const phoneRef=useRef('');
    const conectRef=useRef(false);

    function addContac(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            conectRef.current.value,
            phoneRef.current.value
        );
        add(newContact);
    }
    return (
        <form onSubmit={addContac} className="space-y-6">
    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
      </div>
      <div className="mt-5 md:col-span-2 md:mt-0">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label ref={nameRef} htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              ref={nameRef}
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label ref={lastNameRef} htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              ref={lastNameRef}
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-4">
            <label  ref={emailRef} htmlFor="email-address" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              ref={emailRef}
              type="text"
              name="email-address"
              id="email-address"
              autoComplete="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label  ref={conectRef} htmlFor="country" className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <select
              ref={conectRef}
              id="conect"
              name="conect"
              autoComplete="conect-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value={false}>No Disponible</option>
              <option  value={true}>Linea</option>
            </select>
          </div>

          

          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label  ref={phoneRef} htmlFor="city" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              ref={phoneRef}
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          

         
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-end">
        <button
          type="submit"
          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add
        </button>
      </div>
  </form>
)}

ContactForm.propTypes = {
    add:PropTypes.func.isRequired
}



export default ContactForm;

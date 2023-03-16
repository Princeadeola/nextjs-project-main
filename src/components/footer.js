import React from 'react'

const footer = () => {
  return (
    <div className='flex sm:flex-col md:flex-col flex-row justify-around bg-orange-200 py-24 px-10'>
        <div className='sm:pb-10 md:pb-10'>
          <h2 className='text-black text-4xl font-mono capitalize'>
            nutrition stuff
          </h2>
          <p className='text-black text-md'>some other stuff</p>
        </div>
        <table className="border-collapse w-1/2 text-left">
  <thead>
    <tr className="border-b-2 border-gray-500">
      <th className="px-12 py-2 ">Ctrl</th>
      <th className="px-4 py-2">100ml</th>
      <th className="px-4 py-2">300ml</th>
    </tr>
    <tr>
      <td colSpan="3" className="py-2">
        <hr className="border-0" />
      </td>
    </tr>
  </thead>
  <tbody className='text-black'>
    <tr className="border-0 ">
      <td className="px-12 py-2">Row 1, Column 1</td>
      <td className="px-4 py-2">Row 1, Column 2</td>
      <td className="px-4 py-2">Row 1, Column 3</td>
    </tr>
    <tr className="border-0 ">
      <td className="px-12 py-2">Row 2, Column 1</td>
      <td className="px-4 py-2">Row 2, Column 2</td>
      <td className="px-4 py-2">Row 2, Column 3</td>
    </tr>
    <tr className="border-0 ">
      <td className="px-12 py-2">Row 2, Column 1</td>
      <td className="px-4 py-2">Row 2, Column 2</td>
      <td className="px-4 py-2">Row 2, Column 3</td>
    </tr>
    <tr className="border-0 ">
      <td className="px-12 py-2">Row 2, Column 1</td>
      <td className="px-4 py-2">Row 2, Column 2</td>
      <td className="px-4 py-2">Row 2, Column 3</td>
    </tr>
    <tr className="border-0 ">
      <td className="px-12 py-2">Row 2, Column 1</td>
      <td className="px-4 py-2">Row 2, Column 2</td>
      <td className="px-4 py-2">Row 2, Column 3</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}

export default footer
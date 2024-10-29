import React from 'react'

const User = () => {
  return (
    <>
        <div className='flex justify-between items-center p-5 rounded-md bg-[#ffffff] shadow-sm'>
            <div>
                <h1 className='text-2xl font-semibold'>User List</h1>
            </div>
            <div>
                <button type="button">Add User</button>
            </div>
        </div>
    </>
  )
}

export default User
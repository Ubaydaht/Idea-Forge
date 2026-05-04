import React from 'react';

const Form = () => {
  return (
    <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
      <h2 className="text-2xl text-sky-900 font-bold mb-6">Update Your Profile</h2>
      <form method="post" action="#">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="name">Full Name</label>
          <input className="mt-1 p-2 w-full border rounded-md" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email Address</label>
          <input className="mt-1 p-2 w-full border rounded-md" name="email" id="email" type="email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="bio">Bio</label>
          <textarea className="mt-1 p-2 w-full border rounded-md" rows={3} name="bio" id="bio" defaultValue={""} />
        </div>
        <div className="flex justify-end">
          <button className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80" type="submit">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

import React, { use, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const ProfileUpdate = () => {
    const { user } = use(AuthContext);
    
      const [name, setName] = useState(user?.displayName || '');
      const [photo, setPhoto] = useState(user?.photoURL || '');
      const [message, setMessage] = useState('');
    
      const handleUpdate = async (e) => {
        e.preventDefault();
        try {
          await updateProfile(user, {
            displayName: name,
            photoURL: photo
          });
          setMessage('Profile updated successfully!');
        } catch (err) {
          setMessage('Error updating profile: ' + err.message);
        }
      };
    return (
        <div className='w-full max-w-md mx-auto my-10 p-6 border shadow-md rounded-lg bg-white'>
             <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="label-text font-medium">Display Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label-text font-medium">Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Update Profile
        </button>

        {message && (
          <p className="text-sm text-center text-green-600 mt-2">{message}</p>
        )}
      </form>
        </div>
    );
};

export default ProfileUpdate;
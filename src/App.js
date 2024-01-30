// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RegisterForm from './components/RegisterForm';
// import UserTable from './components/UserTable';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/edit/:index" element={<RegisterForm/>} />
//         <Route path="/" element={<RegisterForm/>} />
//         <Route path="/user-data" element={<UserTable/>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;














// src/App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    location: '',
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const storedData = localStorage.getItem('registeredUsers');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.location) {
      alert('Please fill in all fields');
      return;
    }

    if (editingIndex !== null) {
      const updatedUsers = [...registeredUsers];
      updatedUsers[editingIndex] = formData;
      setRegisteredUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setRegisteredUsers((prevUsers) => [...prevUsers, formData]);
    }

    setFormData({ username: '', email: '', location: '' });
  };

  const handleEdit = (index) => {
    setFormData(registeredUsers[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...registeredUsers];
    updatedUsers.splice(index, 1);
    setRegisteredUsers(updatedUsers);
    setEditingIndex(null);
  };

  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit} style={{ margin: '20px', maxWidth: '300px', display: 'inline-block' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
          />
        </label>
        <button type="submit" style={{ background: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {editingIndex !== null ? 'Update' : 'Register'}
        </button>
      </form>

      {registeredUsers.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Registered Users</h2>
          <table style={{ borderCollapse: 'collapse', width: '80%', margin: 'auto', textAlign: 'center', border: '1px solid #ddd' }}>
            <thead style={{ background: '#4CAF50', color: 'white', border: '1px solid #ddd' }}>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
           
            <tbody style={{ color: 'black', border: '1px solid #ddd' }}>
              {registeredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.location}</td>
                  <td>
                    <button onClick={() => handleEdit(index)} style={{ background: '#4CAF50', color: 'white', padding: '5px', border: 'none', borderRadius: '3px', marginRight: '5px', cursor: 'pointer' }}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(index)} style={{ background: '#f44336', color: 'white', padding: '5px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;













// src/App.js











// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     location: "",
//   });

//   const [registeredUsers, setRegisteredUsers] = useState(() => {
//     const storedData = localStorage.getItem("registeredUsers");
//     return storedData ? JSON.parse(storedData) : [];
//   });

//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.username || !formData.email || !formData.location) {
//       alert("Please fill in all fields");
//       return;
//     }

//     if (editingIndex !== null) {
//       // Update existing user data when in edit mode
//       const updatedUsers = [...registeredUsers];
//       updatedUsers[editingIndex] = formData;
//       setRegisteredUsers(updatedUsers);
//       setEditingIndex(null);
//     } else {
//       // Add new user data when not in edit mode
//       setRegisteredUsers((prevUsers) => [...prevUsers, formData]);
//     }

//     //setFormData({ username: "", email: "", location: "" });
//   };

//   const handleEdit = (index) => {
//     setFormData(registeredUsers[index]); 
//     setEditingIndex(index);
//   };

//   const handleDelete = (index) => {
//     const updatedUsers = [...registeredUsers];
//     updatedUsers.splice(index, 1);
//     setRegisteredUsers(updatedUsers);
//     setEditingIndex(null);
//   };

//   useEffect(() => {
//     localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
//   }, [registeredUsers]);

//   return (
//     <div>
//       <h1>User Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Location:
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleInputChange}
//           />
//         </label>
//         <button type="submit">
//           {editingIndex !== null ? "Update" : "Register"}
//         </button>
//       </form>

//       {registeredUsers.length > 0 && (
//         <div>
//           <h2>Registered Users</h2>
//           <table style={{ border: "1px solid black" }}>
//             <thead>
//               <tr style={{ color: "blue", border: "1px solid black" }}>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Location</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody style={{ color: "red", border: "1px solid black" }}>
//               {registeredUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                   <td>{user.location}</td>
//                   <td>
//                     <button onClick={() => handleEdit(index)}>Edit</button>
//                     <button onClick={() => handleDelete(index)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

//Working fine
// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     location: '',
//   });

//   const [registeredUsers, setRegisteredUsers] = useState(() => {
//     // Retrieve data from localStorage on component mount
//     const storedData = localStorage.getItem('registeredUsers');
//     return storedData ? JSON.parse(storedData) : [];
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if any field is empty
//     if (!formData.username || !formData.email || !formData.location) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setRegisteredUsers((prevUsers) => [...prevUsers, formData]);
//     setFormData({ username: '', email: '', location: '' });
//   };

//   const handleDelete = (index) => {
//     const updatedUsers = [...registeredUsers];
//     updatedUsers.splice(index, 1);
//     setRegisteredUsers(updatedUsers);
//   };

//   // Store data in localStorage whenever registeredUsers changes
//   useEffect(() => {
//     localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
//   }, [registeredUsers]);

//   return (
//     <div>
//       <h1>User Registration</h1>
//       <form onSubmit={handleSubmit}>
//       <label>
//          Username:
//            <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//         </label>
//          <label>
//            Location:
//            <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
//          </label>
//         <button type="submit">Register</button>
//       </form>

//       {registeredUsers.length > 0 && (
//         <div>
//           <h2>Registered Users</h2>
//           <table>
//              <thead>
//                <tr>
//                  <th>Username</th>
//                  <th>Email</th>
//                  <th>Location</th>
//                  <th>Action</th>
//                </tr>
//              </thead>
//              <tbody>
//                {registeredUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                   <td>{user.location}</td>
//                   <td>
//                     <button onClick={() => handleDelete(index)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useEffect,useState } from 'react';

// const App = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     location: '',
//   });

//   const [registeredUsers, setRegisteredUsers] = useState([]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.username || !formData.email || !formData.location) {
//       alert('Please fill in all fields');
//       return;
//     }
//     setRegisteredUsers((prevUsers) => [...prevUsers, formData]);
//     setFormData({ username: '', email: '', location: '' });
//   };
//   // useEffect(() => {
//   //   handleInputChange()
//   // }, [])
//   const handleDelete = (index) => {
//     const updatedUsers = [...registeredUsers];
//     updatedUsers.splice(index, 1);
//     setRegisteredUsers(updatedUsers);
//   };

//   return (
//     <div>
//       <h1>User Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//         </label>
//         <label>
//           Location:
//           <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Register</button>
//       </form>

//       {registeredUsers.length > 0 && (
//         <div>
//           <h2>Registered Users</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Location</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {registeredUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                   <td>{user.location}</td>
//                   <td>
//                     <button onClick={() => handleDelete(index)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

//
// src/App.js
// import React, { useState } from 'react';

// const App = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     location: '',
//   });

//   const [registeredUsers, setRegisteredUsers] = useState([]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setRegisteredUsers((prevUsers) => [...prevUsers, formData]);
//     setFormData({ username: '', email: '', location: '' });
//   };

//   return (
//     <div>
//       <h1>User Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//         </label>
//         <label>
//           Location:
//           <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Register</button>
//       </form>

//       {registeredUsers.length > 0 && (
//         <div>
//           <h2>Registered Users</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Location</th>
//               </tr>
//             </thead>
//             <tbody>
//               {registeredUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                   <td>{user.location}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

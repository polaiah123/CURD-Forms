// // UserTable.js
// import React from 'react';

// const UserTable = ({ users, onEdit, onDelete }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Username</th>
//           <th>Email</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user, index) => (
//           <tr key={index}>
//             <td>{user.username}</td>
//             <td>{user.email}</td>
//             <td>
//               <button onClick={() => onEdit(index)}>Edit</button>
//               <button onClick={() => onDelete(index)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable;


// UserTable.js
// import React from 'react';

// const UserTable = ({ users, onEdit, onDelete }) => {
//   return (
//     <table style={styles.table}>
//       <thead>
//         <tr style={styles.headerRow}>
//           <th style={styles.headerCell}>Username</th>
//           <th style={styles.headerCell}>Email</th>
//           <th style={styles.headerCell}>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user, index) => (
//           <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
//             <td style={styles.cell}>{user.username}</td>
//             <td style={styles.cell}>{user.email}</td>
//             <td style={styles.cell}>
//               <button style={styles.editButton} onClick={() => onEdit(index)}>
//                 Edit
//               </button>
//               <button style={styles.deleteButton} onClick={() => onDelete(index)}>
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// const styles = {
//   table: {
//     borderCollapse: 'collapse',
//     width: '80%',
//     margin: 'auto',
//     textAlign: 'center',
//     border: '1px solid #ddd',
//   },
//   headerRow: {
//     background: '#4CAF50',
//     color: 'white',
//     border: '1px solid #ddd',
//   },
//   headerCell: {
//     padding: '10px',
//   },
//   evenRow: {
//     background: '#f2f2f2',
//   },
//   oddRow: {
//     background: '#fff',
//   },
//   cell: {
//     padding: '10px',
//     border: '1px solid #ddd',
//   },
//   editButton: {
//     background: '#4CAF50',
//     color: 'white',
//     padding: '5px',
//     border: 'none',
//     borderRadius: '3px',
//     marginRight: '5px',
//     cursor: 'pointer',
//   },
//   deleteButton: {
//     background: '#f44336',
//     color: 'white',
//     padding: '5px',
//     border: 'none',
//     borderRadius: '3px',
//     cursor: 'pointer',
//   },
// };

// export default UserTable;


// src/UserTable.js
import React from 'react';
import { Link } from 'react-router-dom';

const UserTable = () => {
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  return (
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
                <Link to={`/edit/${index}`} style={{ background: '#4CAF50', color: 'white', padding: '5px', border: 'none', borderRadius: '3px', marginRight: '5px', cursor: 'pointer', textDecoration: 'none' }}>
                  Edit
                </Link>
                <button style={{ background: '#f44336', color: 'white', padding: '5px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;


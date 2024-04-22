import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Dashboard from './dashboardAdmin';
import { BiDotsVertical, BiEdit, BiSearch, BiUserPlus, BiTrash } from 'react-icons/bi'; // Import des icônes de recherche et de création

function Employee() {
  const [usersWithRoles, setUsersWithRoles] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // État pour stocker la requête de recherche
  const [activeUser, setActiveUser] = useState(null); // État pour stocker l'utilisateur actif

  useEffect(() => {
    axios.get('http://localhost:5001/users/allUsers')
      .then(response => {
        const filteredUsers = response.data.filter(user => user.role !== 'user');
        setUsersWithRoles(filteredUsers);
      })
      .catch(error => console.error(error));
  }, []);
  

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5001/users/delete/${id}`)
      .then(() => {
        console.log('User deleted successfully');
        window.location.reload();
      })
      .catch(error => console.error(error));
  };

  const handleToggleOptions = (userId) => {
    setActiveUser(activeUser === userId ? null : userId);
  };

  

  // Filtrer les utilisateurs en fonction de la requête de recherche
  const filteredUsers = usersWithRoles.filter(user =>
    (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (user.address && user.address.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (user.phone && user.phone.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (user.domaine && user.domaine.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (user.role && user.role.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <Dashboard />
      <div className='w-100 vh-100 d-flex justify-content-center align-items-center' >
        <div className='w-50' style={{ marginBottom: '300px' }}>
          <h2 style={{ marginBottom: '50px' }}>Employées</h2>
          <div style={{ display: 'flex', alignItems: 'center', width: '1200px' }}>
            <Link to='/create'>
              <IconButton><BiUserPlus /></IconButton>
            </Link>
            <TextField
              label="Rechercher"
              variant="outlined"
              size="small"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <BiSearch />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              style={{ width: '250px', marginLeft: '600px' }}
            />
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Domaine</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map(user => (
                <TableRow key={user._id}>
                  <TableCell>
                    <img src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} alt="" />
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.domaine}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                  <div style={{ position: 'relative' }}>
                      <IconButton onClick={() => handleToggleOptions(user._id)}>
                        <BiDotsVertical />
                      </IconButton>
                      {activeUser === user._id && (
                        <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '50%', right: '-40px', transform: 'translateY(-50%)', zIndex: 1 }}>
                          <IconButton><Link to={`/update/${user._id}`}><BiEdit /></Link></IconButton>
                          <IconButton onClick={() => handleDelete(user._id)}><BiTrash /></IconButton>
                        </div>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
export default Employee;

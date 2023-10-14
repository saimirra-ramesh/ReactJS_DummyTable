import {useEffect, useState} from 'react';
import Axios from 'axios';
import './table.css';


function DummyTable()
{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios.get('https://dummyjson.com/users')
        .then((response) => {
            if(response.status === 200)
            {
                setUsers(response.data.users);
            }
            else
            {
                Promise.reject();
            }
        })
        .catch((err) => console.error('Error Fetching Data: ', err))
    }, []);

    return(
        <div className='bg'>
            <h1>Dummy Data</h1>
            <center>
            <table>
                <thead>
                    <tr>
                        <th className='sno'>Sno</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td className='sno'>{user.id}</td>
                                <td>
                                    <img src={user.image} alt={'Profile Pic of ${user.firstName}'} />
                                </td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.domain}</td>
                                <td>{user.ip}</td>
                                <td>{user.university}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </center>
        </div>
    )
}

export default DummyTable;
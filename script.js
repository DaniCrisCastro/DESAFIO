const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

const register = async (req, res) => {
    
};

const login = async (req, res) => {
    
};

module.exports = { register, login };

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

};

module.exports = authMiddleware;

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

router.use(authMiddleware);

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    
});

const Task = sequelize.define('Task', {
    
});

module.exports = { User, Task };

const sequelize = require('./config/database');
sequelize.sync();

const [tasks, setTasks] = useState([]);

useEffect(() => {
   
}, []);

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
};

export { AuthContext, AuthProvider };

const login = (token) => {
    localStorage.setItem('token', token);
    setUser({ token });
};

import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

import Button from '@mui/material/Button';

const MyComponent = () => (
    <Button variant="contained">My Button</Button>
);



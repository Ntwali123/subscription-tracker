import {Router} from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send({title: 'GET all users'});
});

userRouter.get('/:id', (req, res) => {
    res.send({title: 'GET users details'});
});

userRouter.post('/', (req, res) => {
    res.send({title: 'CREATE new users'});
});

userRouter.put('/:id', (req, res) => {
    res.send({title: 'UPDATE users'});
});

userRouter.delete('/', (req, res) => {
    res.send({title: 'DELETE users'});
});

export default userRouter;
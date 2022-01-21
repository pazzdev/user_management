import { User } from "../entity/User";
import { createConnection } from "typeorm";

export default class UserController {
    public async createUser(req, res) {
        const requestParams = req.body;
        createConnection().then(async connection => {
            let user = new User();
            user.firstName = requestParams.firstName;
            user.lastName = requestParams.lastName;
            user.email = requestParams.email;
            user.phoneNumber = requestParams.phoneNumber;
            let userRepository = connection.getRepository(User);
            await userRepository.save(user).then(async user => {
                if (user) {
                    return res.status(200).json({ success: 'User has been successfully created.' });
                }
            });
            await connection.close();
        }).catch(error => console.log(error));
    }
    public async getUsers(req, res) {
        const requestParams = req.query;
        let query = {};
        createConnection().then(async connection => {
            if (requestParams.userId && requestParams.userId !== '') {
                query = {
                    ...query,
                    id: parseInt(requestParams.userId)
                }
            }

            if (requestParams.phoneNumber && requestParams.phoneNumber !== '') {
                query = {
                    ...query,
                    phoneNumber: parseInt(requestParams.phoneNumber)
                }
            }
            let userRepository = connection.getRepository(User);
            let allUsers = await userRepository.find(query);
            await connection.close();
            return res.send(allUsers);
        }).catch(error => console.log(error));
    }
    public async updateUser(req, res) {
        const requestParams = req.query;
        createConnection().then(async connection => {
            let userRepository = connection.getRepository(User);

            let photoToUpdate = await userRepository.findOne(requestParams.userId);
            if (photoToUpdate !== undefined) {
                photoToUpdate.firstName = requestParams.firstName;
                photoToUpdate.lastName = requestParams.lastName;
                photoToUpdate.email = requestParams.email;
                photoToUpdate.phoneNumber = requestParams.phoneNumber;
                await userRepository.save(photoToUpdate).then(user => {
                    if (user) {
                        return res.status(200).json({ success: 'User has been successfully updated.' });
                    }
                });
            } else {
                return res.status(404).json({ success: 'User not found.' })
            }
            await connection.close();
        }).catch(error => console.log(error));
    }
    public async deleteUser(req, res) {
        const requestParams = req.query;
        let query = {};
        createConnection().then(async connection => {
            if (requestParams.userId && requestParams.userId !== '') {
                query = {
                    ...query,
                    id: parseInt(requestParams.userId)
                }
            }

            if (requestParams.phoneNumber && requestParams.phoneNumber !== '') {
                query = {
                    ...query,
                    phoneNumber: parseInt(requestParams.phoneNumber)
                }
            }
            
            if (requestParams.userId || requestParams.phoneNumber) {
                let userRepository = connection.getRepository(User);
                let userToRemove = await userRepository.findOne(query);
               
                if (userToRemove !== undefined) {
                    let userDeleted = await userRepository.remove(userToRemove);
                    if (userDeleted) {
                        return res.status(200).json({ success: 'User has been successfully deleted.' })
                    }
                } else {
                    return res.status(404).json({ success: 'User not found.' })
                }
            } else {
                return res.status(404).json({ success: 'Please pass either userId or phoneNumber.' })
            }
            await connection.close();
        }).catch(error => console.log(error));
    }
}
import { Service } from "@tsed/di";

export interface IUser {
    firstname: string;
    lastname: string;
}

class UserProvider {
    private static readonly users: IUser[] = [
        {
            firstname: "Brahim",
            lastname: "Guessaoui"
        },
        {
            firstname: "Samuel",
            lastname: "Dematte"
        },
        {
            firstname: "François",
            lastname: "Hamy"
        },
        {
            firstname: "Pierre-Henri",
            lastname: "Desoomer"
        },
        {
            firstname: "Alexis",
            lastname: "Samoy"
        },
        {
            firstname: "Maxence",
            lastname: "Branswick"
        },
        {
            firstname: "Maxime",
            lastname: "WasiJewski"
        },
        {
            firstname: "Antoine",
            lastname: "Mazure"
        }
    ];

    static getUsers(): IUser[] {
        return this.users;
    }

    static getUser(id: number): IUser {
        return this.users[id];
    }

    static addUser(user: IUser): IUser {
        this.users.push(user);

        return user;
    }
}

@Service()
export class UserService {
    getUsers(): IUser[] {
        return UserProvider.getUsers();
    }

    createUser(user: IUser): IUser {
        UserProvider.addUser(user);

        return user;
    }

    getUser(id: number): IUser {
        return UserProvider.getUser(id);
    }
}

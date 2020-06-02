import { Controller, Get, Post, PathParams, BodyParams } from "@tsed/common";
import { UserService, IUser } from "../services/userProvider";

@Controller("/users")
export class UserController {
    constructor(private readonly UserService: UserService) {
    }

    @Get()
    findAll(): IUser[] {
        return this.UserService.getUsers();
    }

    @Get("/:id")
    getOne(@PathParams("id") id: number): IUser {
        return this.UserService.getUser(id);
    }

    @Post()
    createOne(@BodyParams("user") user: IUser): IUser {
        return this.UserService.createUser(user);
    }
}

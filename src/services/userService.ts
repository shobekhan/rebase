import { formatCustomerName } from "../utils/format";
import { isValidEmail } from "../utils/validate";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export class UserService {
    createUser(user: User): string {
        if (!isValidEmail(user.email)) {
            throw new Error("Invalid email");
        }

        return `Created user ${formatCustomerName(
            user.firstName,
            user.lastName
        )}`;
    }

    getUserEmail(user: User): string {
        return user.email;
    }
}
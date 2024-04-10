// Receives a required role and a session and return a boolean indicating if the provided session matches the required role
import {isNil} from "lodash";
import {type UserRole} from "@prisma/client";

export function hasRequiredRole(role: UserRole, session: unknown) {
    if (isNil(session)) return false
    // eslint-disable-next-line
    return session?.user?.role === role
}
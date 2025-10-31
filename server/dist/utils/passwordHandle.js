import bcrypt from "bcrypt";
export const hashedPassword = async (confirmPassword) => {
    try {
        const newHashed = await bcrypt.hash(confirmPassword, 10);
        return newHashed;
    }
    catch (er) {
        throw er;
    }
};
export const checkPassword = (hashedPassword, userPassword) => {
    try {
        return bcrypt.compareSync(userPassword, hashedPassword);
    }
    catch {
        return false;
    }
};
//# sourceMappingURL=passwordHandle.js.map
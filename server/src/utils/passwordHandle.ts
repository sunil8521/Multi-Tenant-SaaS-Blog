import bcrypt from "bcrypt";

export const hashedPassword = async (confirmPassword: string): Promise<string> => {
  try {
    const newHashed = await bcrypt.hash(confirmPassword, 10);
    return newHashed;
  } catch (er) {
    throw er;
  }
};

export const checkPassword=(hashedPassword:string,userPassword:string):boolean=>{
    try {
        return bcrypt.compareSync(userPassword, hashedPassword);
    } catch {
        return false;
    }

}
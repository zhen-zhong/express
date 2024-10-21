import bcrypt from 'bcryptjs';

// 加密密码
export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;  // 加密强度（salt 值的成本）
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

// 验证密码
export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
};

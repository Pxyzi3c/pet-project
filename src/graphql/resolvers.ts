import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Post = Prisma.PostGetPayload<object>;
type User = Prisma.UserGetPayload<object>;

const resolvers = {
    Query: {
        posts: async (): Promise<Post[]> => {
            return prisma.post.findMany();
        },
        post: async (_: undefined, { id }: { id: number }): Promise<Post | null> => {
            return prisma.post.findUnique({ where: { id } });
        },
        users: async (): Promise<User[]> => {
            return prisma.user.findMany();
        },
        user: async (_: undefined, { id }: { id: number }): Promise<User | null> => {
            return prisma.user.findUnique({ where: { id } });
        },
    },
    Mutation: {
        createPost: async (_: undefined, { data }: { data: Prisma.PostCreateInput }): Promise<Post> => {
            return prisma.post.create({ data });
        },
        updatePost: async (_: undefined, { id, data }: { id: number, data: Prisma.PostUpdateInput }): Promise<Post> => {
            return prisma.post.update({ where: { id }, data });
        },
        deletePost: async (_: undefined, { id }: { id: number }): Promise<Post> => {
            return prisma.post.delete({ where: { id } });
        },
        createUser: async(_: undefined, { data }: { data: Prisma.UserCreateInput }): Promise<User> => {
            return prisma.user.create({ data });
        },
        updateUser: async (_: undefined, { id, data }: { id: number, data: Prisma.UserUpdateInput }): Promise<User> => {
            return prisma.user.update({ where: { id }, data })
        }
    },
};

export default resolvers;
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resolvers = {
    Query: {
        posts: async () => {
            return prisma.post.findMany();
        },
        post: async (_, { id }) => {
            return prisma.post.findUnique({ where: { id } });
        },
    },
    Mutation: {
        createPost: async (_, { data }) => {
            return prisma.post.create({ data });
        },
        updatePost: async (_, { id, data }) => {
            return prisma.post.update({ where: { id }, data });
        },
        deletePost: async (_, { id }) => {
            return prisma.post.delete({ where: { id } });
        },
    },
};

export default resolvers;
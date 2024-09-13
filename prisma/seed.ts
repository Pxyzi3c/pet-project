import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await Promise.all([
        prisma.role.createMany({
            data: [
                { name: 'user' },
                { name: 'admin' },
            ],
        }),
        prisma.category.createMany({
            data: [
                { name: 'General' },
                { name: 'Programming' },
                { name: 'Design' },
                { name: 'Culture' },
                { name: 'Business' },
                { name: 'Health' },
            ],
        }),
    ]);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
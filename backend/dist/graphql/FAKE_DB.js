const businesses = [
    {
        businessId: 'b1',
        name: 'Missoula Public Library',
        address: '301 E Main St, Missoula, MT 59802',
        reviewIds: ['r1', 'r2'],
        categories: ['Library', 'Downtown'],
    },
    {
        businessId: 'b2',
        name: 'San Mateo Public Library',
        address: '55 W 3rd Ave, San Mateo, CA 94402',
        reviewIds: ['r3'],
        categories: ['Library'],
    },
];
const categories = [
    {
        name: 'Downtown',
    },
    {
        name: 'Library',
    },
];
const reviews = [
    {
        reviewId: 'r1',
        stars: 3,
        text: 'Friendly staff. Interlibrary loan is super fast',
        businessId: 'b1',
        userId: 'u1',
    },
    {
        reviewId: 'r2',
        stars: 4,
        text: 'Easy downtown access, lots of free parking',
        businessId: 'b1',
        userId: 'u2',
    },
    {
        reviewId: 'r3',
        stars: 5,
        text: 'Lots of glass and sunlight for reading.',
        businessId: 'b1',
        userId: 'u1',
    },
];
const users = [
    { userId: 'u1', name: 'Will', reviewIds: ['r1', 'r2'] },
    { userId: 'u2', name: 'Bob', reviewIds: ['r3'] },
];
const db = { businesses, reviews, users, categories };
export default db;

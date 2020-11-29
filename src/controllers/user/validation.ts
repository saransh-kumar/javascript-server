const config = {
    create:
    {
        name: {
            required: false,
            string: true,
            in: ['body'],
            errorMessage: 'Name is required',
        },
        email: {
            required: true,
            regex: /\w+.\w+@successive.tech$/i,
            in: ['body'],
            errorMessage: 'Email is required',
        },
        role: {
            required: false,
            string: true,
            in: ['body'],
        },
        password: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Password is required',
        }
    },
    delete:
    {
        originalId: {
            required: true,
            errorMessage: 'Id is required',
            in: ['body'],
        }
    },
    get:
    {
        skip:
        {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit:
        {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        },
        search: {
            required: false,
            string: true,
            in: ['query'],
            errorMessage: 'Search is invalid',
        }
    },
    update:
    {
        originalId:
        {
            required: true,
            string: true,
            in: ['body'], }
    }
};

export default config;
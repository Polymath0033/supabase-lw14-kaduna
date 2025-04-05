export const notes_create = `CREATE TABLE notes (
    uuid UUID PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    content TEXT NOT NULL,
    last_updated TIMESTAMP DEFAULT now(),
    user_id UUID NOT NULL
);
`;

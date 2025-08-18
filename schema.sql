-- Database schema for guestbook application
-- Run this script to create the required tables

CREATE TABLE IF NOT EXISTS guestbook_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    message TEXT NOT NULL CHECK (length(message) <= 500),
    location VARCHAR(255),
    website VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on created_at for better performance when ordering
CREATE INDEX IF NOT EXISTS idx_guestbook_messages_created_at ON guestbook_messages(created_at DESC);

-- Insert some sample data (optional)
INSERT INTO guestbook_messages (name, email, message, location, website) VALUES
    ('John Doe', 'john@example.com', 'Welcome to the guestbook! This is a great application.', 'San Francisco, CA', 'https://johndoe.com'),
    ('Jane Smith', 'jane@example.com', 'Love the clean design and functionality!', 'New York, NY', NULL),
    ('Mike Johnson', NULL, 'Thanks for building this awesome tool.', 'London, UK', 'https://mikejohnson.dev')
ON CONFLICT DO NOTHING;
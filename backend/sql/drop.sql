DROP TABLE IF EXISTS contacts;
DROP TRIGGER IF EXISTS message_sent_notification ON messages;
DROP FUNCTION IF EXISTS notify_message_sent();
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users;

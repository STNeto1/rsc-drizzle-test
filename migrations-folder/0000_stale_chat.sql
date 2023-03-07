CREATE TABLE `accesses` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`created_at` timestamp DEFAULT (now())
);

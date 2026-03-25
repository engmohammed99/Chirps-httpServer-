ALTER TABLE "users" ALTER COLUMN "hashed_password" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "hashed_password" SET DEFAULT 'unset';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "is_chirby_red" boolean DEFAULT false NOT NULL;
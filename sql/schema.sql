PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE [dockerratelimitLimit] (
    "date" text DEFAULT None,
    "docker_ratelimit_source" text DEFAULT None PRIMARY KEY,
    "country" text DEFAULT None,
    "ratelimit_limit" text DEFAULT None,
    "ratelimit_remaining" text DEFAULT None,
    "server_status" text DEFAULT None,
    "update_time" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
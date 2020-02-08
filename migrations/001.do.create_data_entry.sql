CREATE TABLE dataentry (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    date TIMESTAMP DEFAULT now() NOT NULL,
    department TEXT NOT NULL,
    shift INTEGER NOT NULL,
    goal_1 INTEGER DEFAULT 263,
    produced_1 INTEGER,
    downtime_1 INTEGER,
    reason_1 TEXT,
    goal_2 INTEGER DEFAULT 263,
    produced_2 INTEGER,
    downtime_2 INTEGER,
    reason_2 TEXT,
    goal_3 INTEGER DEFAULT 263,
    produced_3 INTEGER,
    downtime_3 INTEGER,
    reason_3 TEXT,
    goal_4 INTEGER DEFAULT 263,
    produced_4 INTEGER,
    downtime_4 INTEGER,
    reason_4 TEXT,
    goal_5 INTEGER DEFAULT 263,
    produced_5 INTEGER,
    downtime_5 INTEGER,
    reason_5 TEXT,
    goal_6 INTEGER DEFAULT 263,
    produced_6 INTEGER,
    downtime_6 INTEGER,
    reason_6 TEXT,
    goal_7 INTEGER DEFAULT 263,
    produced_7 INTEGER,
    downtime_7 INTEGER,
    reason_7 TEXT,
    goal_8 INTEGER DEFAULT 263,
    produced_8 INTEGER,
    downtime_8 INTEGER,
    reason_8 TEXT    
);
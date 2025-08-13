CREATE TABLE employee (
    employee_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    min_hours NUMERIC(4, 2) NOT NULL,
    max_hours NUMERIC(4, 2) NOT NULL
);

CREATE TABLE shift (
    shift_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    employee_id BIGINT REFERENCES employee(employee_id),
    week_id BIGINT REFERENCES week(week_id),
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(500)
);

CREATE TABLE week (
    week_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    required_hours NUMERIC(6, 2),
    assigned_hours NUMERIC(6, 2),
    month_id BIGINT REFERENCES month(month_id)
);

CREATE TABLE month (
    month_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    required_hours NUMERIC(6, 2),
    assigned_hours NUMERIC(6, 2)
);

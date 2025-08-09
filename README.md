# Employee Shift Management App

A fullstack web application for managing employee shifts, built with HTML, CSS, JavaScript, and PostgreSQL.

## Features

- Create, edit, and delete employee profiles
- Assign and manage shifts
- View shift schedules by employee or date
- App will assist in assigning shifts based on availability and preferences
- Responsive UI for desktop and mobile

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** JavaScript (Node.js or similar)
- **Database:** PostgreSQL

## Getting Started

1. **Clone the repository**

    ```bash
    git clone https://github.com/cjparsonson/schedule-fullstack.git
    cd schedule-fullstack
    ```

2. **Install dependencies**

    ```bash
    # Example for Node.js backend
    npm install
    ```

3. **Configure the database**
    - Set up a PostgreSQL instance
    - Update connection settings in your backend config

4. **Run the application**

    ```bash
    npm start
    ```

## Folder Structure

```text
/frontend   # HTML, CSS, JS files
/backend    # Server-side code
/db         # Database scripts and migrations
```

## Entities

- **Employee**
  - id: UUID
  - name: String
  - minHours: Int
  - maxHours: Int
  - shifts: [Shift]

- **Shift**
  - id: UUID
  - employeeId: UUID
  - startTime: DateTime
  - endTime: DateTime
  - status: String

- **Week**
  - id: UUID
  - startDate: DateTime
  - endDate: DateTime
  - requiredHours: Int
  - assignedHours: Int
  - shifts: [Shift]
  - month: [Month]

- **Month**
  - id: UUID
  - startDate: DateTime
  - endDate: DateTime
  - requiredHours: Int
  - assignedHours: Int
  - weeks: [Week]

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

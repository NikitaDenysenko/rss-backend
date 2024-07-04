## Installation
To install necessary packages, execute this command in the root folder of the project

```bash
$ yarn
```

## Running the app

1. Create `.env` file and paste all the necessary variables (use `.env.example` for reference)


2. Open first terminal window and run MySqlServer.
   Use command below, or other user that you have setted up

```bash
mysql -u root -p
```

3. Open second terminal in the root folder of the project and execute this command

```bash
yarn run start
```

## Running the Docker

To run the Docker, execute the following commands

```bash
cd docker
docker compose up --build
```

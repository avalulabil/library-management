
# Library Manegement dengan Express JS

dibuat dengan Express JS dan di test menggunakan POSTMAN



## Screenshots

![App Screenshot](https://github.com/avalulabil/library-management/blob/library-management/img/struktur%20(1).png)

## Running Tests

To run server run the following
```bash
  node src/server.js
```

To run tests, run the following command

```bash
  npx jest
```
![App Screenshot](https://github.com/avalulabil/library-management/blob/library-management/img/testwithjest.png)

## API Reference

#### Get all books

```http
  GET http://localhost:3000/books
```
![App Screenshot](https://github.com/avalulabil/library-management/blob/library-management/img/getbook.png)


#### Get all members

```http
  GET http://localhost:3000/members
```

![App Screenshot](https://github.com/avalulabil/library-management/blob/library-management/img/getmembers.png)

#### Post Borrow Books

```http
  Post http://localhost:3000/members/borrow
```

![App Screenshot](https://github.com/avalulabil/library-management/blob/library-management/img/getpinjam.png)

#### Post Return Books

```http
  Post http://localhost:3000/members/return
```

![App Screenshot](https://github.com/avalulabil/library-management/blob/library-management/img/getreturn.png)


const express = require('express')
const app = express()
const fs = require('fs')
const async = require('async')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('/stories', (req, res, next) => {
    let obj = {}
    fs.readdir('content/stories', (err, files) => {
        if (err) {
            next(err);
            return;
        }
        async.each(files, (file, onEnd) => {
            fs.readFile(`content/stories/${file}`, (err, data) => {
                obj[file] = JSON.parse(data);
                onEnd();
            })
        }, () => {
            res.json(obj);
        });
    });
})

module.exports = app
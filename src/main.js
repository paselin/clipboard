"use strict";

// electron module
var electron = require("electron");
var app = electron.app;

var mainWindow = null;

// 全てのウィンドウが閉じたら、の記述
// Java Swingにもあったな？こんなの
app.on("window-all-closed", function(){
    if(process.platform != "darwin") app.quit();
});

// アプリケーションが開いた時の記述
app.on("ready", function(){
    // ブラウザ(chromium)起動
    mainWindow = new electron.BrowserWindow({width:400,height:300});
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    mainWindow.on("closed",function(){
        mainWindow = null;
    });
});


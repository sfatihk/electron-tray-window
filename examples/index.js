const TrayWindow = require("electron-tray-window");

const { ipcMain, Tray, app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", () => {
  var timeout = 10;
  if (process.platform === "linux") {
    timeout = 200;
  }
  setTimeout(function () {
    TrayWindow.setOptions({
      trayIconPath: path.join("resources/icon.png"),
      windowUrl: `file://${path.join(__dirname, "resources/index.html")}`,
      width: 340,
      height: 380,
    });
  }, timeout);
});

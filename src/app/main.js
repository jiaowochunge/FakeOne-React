var App = {
  // Application Constructor
  initialize() {
    this.bindEvents()
  },

  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
    // if run project with `npm start`, there's no 'deviceready' event, we trigger it manually
    if (!window.cordova) {
      this.onDeviceReady()
    }
  },

  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'Phonegap.receivedEvent(...);'
  onDeviceReady() {
    this.receivedEvent()
  },

  // Update DOM on a Received Event
  receivedEvent() {
    console.log('The device is ready!!!')
    require('./App')
  }
}

App.initialize()

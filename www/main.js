var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("connectwifiButton").addEventListener('click', this.connectwifiButtonClicked.bind(this), false);
        document.getElementById("connectwifiopenButton").addEventListener('click', this.connectwifiopenButtonClicked.bind(this), false);
        document.getElementById("iswifienabledButton").addEventListener('click', this.iswifienabledButtonClicked.bind(this), false);
        document.getElementById("enablewifiButton").addEventListener('click', this.enablewifiButtonClicked.bind(this), false);
        document.getElementById("disablewifiButton").addEventListener('click', this.disablewifiButtonClicked.bind(this), false);
        document.getElementById("testmethodsButton").addEventListener('click', this.testmethodsButtonClicked.bind(this), false);
    },

    /* button click listeners */
    connectwifiButtonClicked: function() {
        this.connectWifi('sweetbox', 'cheznous2015');
    },

    connectwifiopenButtonClicked: function() {
        this.connectWifiOpen('AndroidWifi');
    },
    
    iswifienabledButtonClicked: function() {
        this.isWifiEnabled();
    },

    enablewifiButtonClicked: function() {
        this.enableWifi();
    },
    
    disablewifiButtonClicked: function() {
        this.disableWifi();
    },

    testmethodsButtonClicked: function() {
        this.pluginTestMethods();
    },

    /* basic callback functions (success, error) */
    success: function(message) {
        alert(message);
    },

    error: function(message) {
        alert("Error");
    },

    /* plugin calls */
    connectWifi: function(ssid, pass) {
        console.log('call Wifi.connectWifi ssid=' + ssid + " pass=" + pass);
        Wifi.connectWifi(ssid, pass, this.success, this.error);
    },

    connectWifiOpen: function(ssid) {
        console.log('call Wifi.connectWifiOpen ssid=' + ssid);
        Wifi.connectWifiOpen(ssid, this.success, this.error);
    },
    
    isWifiEnabled: function() {
        console.log('call Wifi.isWifiEnabled');
        Wifi.isWifiEnabled(this.success, this.error);
    },
    
    enableWifi: function() {
        console.log('call Wifi.setWifiEnabled(true)');
        Wifi.setWifiEnabled(true);
    },
    
    disableWifi: function() {
        console.log('call Wifi.setWifiEnabled(false)');
        Wifi.setWifiEnabled(false);
    },

    pluginTestMethods: function() {
        Wifi.successTestMethod(this.success, this.error);
        Wifi.errorTestMethod(this.success, this.error);
    },
};

app.initialize();
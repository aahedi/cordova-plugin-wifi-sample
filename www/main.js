var app = {
    
        initialize: function() {
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        },
    
        onDeviceReady: function() {
            document.getElementById("connectwifiButton").addEventListener('click', this.button1Clicked.bind(this), false);
            document.getElementById("connectwifiopenButton").addEventListener('click', this.button2Clicked.bind(this), false);
            document.getElementById("testMethodsButton").addEventListener('click', this.button3Clicked.bind(this), false);
        },
    
        button1Clicked: function() {
            this.connectWifi('sweetbox', 'cheznous2015');
        },
    
        button2Clicked: function() {
            this.connectWifiOpen('AndroidWifi');
        },
    
        button3Clicked: function() {
            this.pluginTestMethods();
        },
    
        success: function(message) {
                alert(message);
        },
    
        error: function(message) {
                alert("Error");
        },
    
        connectWifi: function(ssid, pass) {
            console.log('call Wifi.connectWifi ssid=' + ssid + " pass=" + pass);
            Wifi.connectWifi(ssid, pass, this.success, this.error);
        },
    
        connectWifiOpen: function(ssid) {
            console.log('call Wifi.connectWifiOpen ssid=' + ssid);
            Wifi.connectWifiOpen(ssid, this.success, this.error);
        },
    
        pluginTestMethods: function() {
            Wifi.successTestMethod(this.success, this.error);
            Wifi.errorTestMethod(this.success, this.error);
        },
    };
    
    app.initialize();
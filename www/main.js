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
        document.getElementById("iswificonnectedButton").addEventListener('click', this.iswificonnectedButtonClicked.bind(this), false);
        document.getElementById("getcurrentssidButton").addEventListener('click', this.getcurrentssidButtonClicked.bind(this), false);        
        document.getElementById("getmacaddressButton").addEventListener('click', this.getmacaddressButtonClicked.bind(this), false);
        document.getElementById("listwifinetworksButton").addEventListener('click', this.listwifinetworksButtonClicked.bind(this), false);
        document.getElementById("getconfigurednetworksButton").addEventListener('click', this.getconfigurednetworksButtonClicked.bind(this), false);        
    },

    /* button click listeners */
    
    connectwifiButtonClicked: function() {
    var wifi_ssid = document.getElementById('SSID').value;
    var wifi_pass = document.getElementById('pass').value;
        
        if (wifi_ssid == null || wifi_ssid == "") {
        alert("SSID harus diisi");
        return false;
    }
    else if (wifi_pass == null || wifi_pass == "") {
        alert("Password harus diisi");
        return false;
    }
	else{
        this.connectWifi(wifi_ssid,wifi_pass);
    }
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
    
    iswificonnectedButtonClicked: function() {
        this.isWifiConnected();
    },
    
    getcurrentssidButtonClicked: function() {
        this.getCurrentSSID();
    },
    
    getmacaddressButtonClicked: function() {
        this.getMacAddress();
    },
    
    listwifinetworksButtonClicked: function() {
        this.listWifiNetworks();
    },

    getconfigurednetworksButtonClicked: function() {
        this.getConfiguredNetworks();
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
        Wifi.setWifiEnabled(true, this.success, this.error);
    },
    
    disableWifi: function() {
        console.log('call Wifi.setWifiEnabled(false)');
        Wifi.setWifiEnabled(false, this.success, this.error);
    },
    
    isWifiConnected: function() {
        console.log('call Wifi.isWifiConnected');
        Wifi.isWifiConnected(this.success, this.error);
    },
    
    getCurrentSSID: function() {
        console.log('call Wifi.getCurrentSSID');
        Wifi.getCurrentSSID(this.success, this.error);
    },
    
    getMacAddress: function() {
        console.log('call Wifi.getMacAddress');
        Wifi.getMacAddress(this.success, this.error);
    },
    
    listWifiNetworks: function() {
        console.log('call Wifi.listWifiNetworks');
        Wifi.listWifiNetworks(this.success, this.error);
        Wifi.listWifiNetworks(function(message) {
            var s = "";
            for (var i = 0; i < message.length; i++) {
                s = s + '\n\n' + JSON.stringify(message[i]);
            }
            alert(s);
        }, this.error);
    },
    
    getConfiguredNetworks: function() {
        console.log('call Wifi.getConfiguredNetworks');
        Wifi.getConfiguredNetworks(this.success, this.error);
    },
};

app.initialize();

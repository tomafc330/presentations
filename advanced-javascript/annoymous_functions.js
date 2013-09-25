var o = {};
o.whatever = function tom() {console.log('hi')};

o.whatever();
o.tom()



var ninja = {
    chirp: function signal(n) {
        return n > 1 ? signal(n - 1) + "-chirp" : "chirp";
    }
};

ninja.chirp(3);

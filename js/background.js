'use strict';

var images = [
    "WExrrdPvZH7LuT19gR2YBQ",
    "gufn_J_qdw4S1GZwn4YBIw",
    "t09TJfYU3H86zyfkbc8wYw",
    "YYuI0FpkY8WXdV-z26wbzg",
    "74KeirfgEaYN6wz6OFDliw",
    "1L4Z1DIAgxdAA-Q5NhWNkQ",
    "mzxQwrbkTVc5PNva6hkRvw",
    "P9S83E3jfq69VOui8fGCuw",
    "cuP9ZR78BXYJBCvu2wQFOA",
    "1ZzD5dRQVXpB9sHeWtU_sg",
    "Lf8J0xDBcxerldhRCUvmnA",
    "i1ZxK0pW595saLlw-Zdy4Q",
    "XziqAVxvPSMudScVbpwDzw",
    "p10DH2DoYZSWTS3IceETig",
    "Z91hsJKnuXjX6BNkOVoYdA",
    "ztQBs95gqgLDZd8vTu5rLg",
    "xgttTrVhnSjRMYdA-rHnNQ",
    "p2fvL3WFxh8vV3_UvCihBA",
    "FSykYpVR0XaUW_wCUMfh8Q",
    "fBH8kVXh60kFrkCbuJJf0Q",
    "V9L328QFpkkcDdebBstDlA",
    "p3jTqLi-F3goRXgPbOg5eg",
    "PSyWXzHFfUbLywtH9kHmlg",
    "cLo_TNYjFEgCGuSdwCN4_A",
    "n2cvGu2Nnp8aGyq_b-jGmA",
    "pH8eJOrvw2kiOEHvWNe7bQ",
    "fNpe2RAuwSCoAFuJK6PZew",
    "3bsa6D5UlognGiL1ibLj-A",
    "M9-HHbBnOd7ZaUFp5-UYEQ",
    "ftwQvrwmCbu6qJIcuVB2Rw",
    "aWm9EHxDZNsn-fGXhz2OGg",
    "cI37KgJg2Lq6PM9ujwnIow",
    "3lkO9DF81-tp6cy9PeCXTg",
    "Km71Yj-1K8YJWOpMnGcrHQ",
    "bYUTzS8e0nt9uRV4KdIT6A",
    "5F02KTdqTOeyiAmp6JgeEg",
    "xTnDU5v_zwLfzGvXlQrhhw",
    "uHrvIRJwHgKRpTJvTDlUXw",
    "qRzcMuhVpqaryFoUgxDkCg",
    "QJthjbNWubE2srS5En-3Ng",
    "pRo8rYxF00ouwcWBVhnkNg",
    "q3mAZ-tbOr9-RHx3maXKBg",
    "LHP93MylOBtsGMAxrP__Mw",
    "OAXxjknnpALlMBz6nELSjA",
    "kIoeAyrwfCpta1yPM3RXAg",
    "H5OXDTcOTV8f2FYsROyL_Q",
    "i13v4JACsRPW9iLiVkTtsQ",
    "WfeT9yLWDzqCB56vLyFWjA",
    "htMDVSZ27_F3C7XD9PiNYg",
    "442y3xqcF23KAUhwHaIhcg",
    "v8V9g4taTfNd_RhdJcuD_A",
    "91LL8RTjU-4WmdzORJPtYA",
    "Uy8qX_N1lx040NWC0t06Vw",
    "nwfiqpDXPConxn5WDcnzxw",
    "dZptv8rl6c0iPQArAPf5xQ",
    "pRBcBvMrud1-2HcYLU6eaA",
    "Da4_KZ_Qa_ww7000GGC24w",
    "62lDBkG9LylmCdhJ4YohkQ",
    "P5zU0NRfFaEauPkzbMPZRA",
    "18HEaS-VihanW-AaHf0MYQ",
    "u3XjOxYNNxgd2rx__8UJxw",
    "yaS5ZRNgk1ABECLrMfk9VA",
    "VkABP26dtzguem0MZu7Vng",
    "LgEESIPwUzgj39wNisrN0g",
    "k1WeYcT92IW3LIHxz5IHqg",
    "s-MQXrSOdOaWLa9k2q-cgw",
    "GutIEXcm14M2QlnFYz76LQ",
    "TLUYitWvNwj0r2CfwWrk4A",
    "lzQRwnIpOvmlRsyxOJ5g3w",
    "bXdFAb5OXPS4FZq03XzUFQ",
    "vZUYBzF_Fw-xrTPzcJ68jg",
    "T15R9U_khklWChL-X4klEQ",
    "NBC4MPOajumljX1u1zpsrg",
    "tpU1Lty1Zfqa_A2pUQYdZQ",
    "HfygWp_KRFLXTE8zYouG2w",
    "Y8UZybi4j8Op1tTk4xES7w",
    "mG7G45TMpLsh-RWk8iup_A",
    "lXnaZDf7NWW9MiXfzMJhQw",
    "w-l365Xv24F9vX3VsVfORw",
    "Len4RVeowa_44Dpn5oI4tw",
    "WiAeHtWWyHdOVIPf67Fpdw",
    "eEvbtpP9vxS6NeHZWZWWfg",
    "m77CtYhbFnRUXxgZsaMpKA",
    "KIRtFMWhxdDhqAtjZolUGA",
    "ou2v9TWAvTQTwRzBKtfElg",
    "aZeroORNkfSTAqPQaHeQyg",
    "1Q3Eu5he_nv2SztiRG28gQ",
    "E4D63Bkz6oZRJGa8ajPYgA",
    "MTKX48IA25Gj-ly5iQv4vQ",
    "7ZCtY45n9th_Tl_fMmH44g",
    "yugmB2ajW-NGbtJh5UuczQ",
    "-i4MV6ZVvMKEB-nhuQYrgQ",
    "ewhLXROOWPjMdpjo8BcJTw",
    "3FVf8nJxtcLE1FzwIJO8Hg",
    "sfBVuLR4lPtFR9EAqmSZ-Q",
    "iQq-DXdLR_OAn3LOYg7jug",
    "ASuUJz8izMEVK8wy2d3wXw",
    "Nd0WUnlJ8Bd2krhn4aCEvg",
    "xQrRPl7qKPjRWIOh_vbNDg",
    "l8vT5zn3qsUOj60bWq6QcQ",
    "DlBx-BpD0b619eKZ9WjGpQ",
    "wEwvcVg_MjOpKALeZx-QNw",
    "w7ZYXPNnwNKrwnbKNmLOcQ",
    "stjPaTcPHqvruxDvZlRjPQ",
    "ZWK7csCA-JKPsUwKs5jMDQ",
    "dpqSfDAmWTlCTgABj8EgJA",
    "5DQqeBnSAJyny8HpyM2jRA",
    "qB2tgnyuXKtZu1FhGJMMpg",
    "JOfQyTYohwvXeXQwwy_nlg",
    "1Lf6jCo3fn6uzmJROAOjTw",
    "jCToFO93PpUKezFTtb-Rlw",
    "M0Nvnl9LfFRzLmsvhdwSuA",
    "q6usFR_PXCLw9KhKEDmYhA",
    "P7xM842DoKV_iLCgsVxHBw",
    "foFtM3zOUrwzcweNFusg3A",
    "jLCqcuGBBPWCEZ0ZnePaNQ",
    "EF4nVWzKhpOyTlcqPqET9w",
    "nALrdbaOxWISFQEN2lgVag",
    "rBD3Zj-3arai1WFZjERt_Q",
    "-47bY3i_u_fQF4pKFZD2nw"
];

function randomImage() {

    function show(url) {
        var background = document.getElementById('background');
        background.style.backgroundImage = "url('" + url + "')";
        background.style.opacity = "1";

        setTimeout(randomImage, 5000);
    }

    var min = 0;
    var max = images.length;
    var random = Math.floor(Math.random() * (max - min)) + min;
    var url = "https://d1cuyjsrcm0gby.cloudfront.net/"+images[random]+"/thumb-2048.jpg";
    
    var sprite = new Image();
    sprite.onload = function() {
        show(url);
    }
    sprite.src = url;
}

window.onload = function() {
    randomImage();
};


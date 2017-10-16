'use strict';

(function($) {

    function getPostcodeData(callback) {

        $.ajax({
            url: "/assets/postcodes-by-ward.json"
        }).done(function(body) {
            callback(body);
        })
    }

    function getAddressByPostcode(callback) {
        $.ajax({
            url: "/assets/address-by-postcode.json"
        }).done(function(body) {
            callback(body);
        })
    }

    function standardisePostcode(postcode) {
        return postcode.replace(" ", "").toUpperCase();
    }

    function convertToHyphens(str) {
        return str.replace(/\s+/g, '-').toLowerCase();
    }


    $('.postcode-form').on('submit', function(event){

        event.preventDefault();

        $('.ward-information').addClass('hidden');
        $('.address-information').removeClass('open');
        $('.ward-panel').addClass('hidden');
        $('.ward-content').removeClass('visible');

        var myPostcode = standardisePostcode($('.postcode-form .postcode-input').val());

        getPostcodeData(function(postcodes){
            var ward = false;
            var address = false;

            $.each(postcodes, function(key, postcodesForWard) {
                $.each(postcodesForWard, function(index, postcode) {
                    if(postcode === myPostcode) {
                        ward = key;
                    }
                });
            });

            if(ward) {

                $('.ward-information .ward-name').text(ward);
                $('.ward-information').removeClass('hidden');
                $('.' + convertToHyphens(ward) + '-panel').removeClass('hidden');
                if($('.' + convertToHyphens(ward) + '-panel').length) {
                    $('.ward-content').addClass('visible');
                }

//                getAddressByPostcode(function(addressByPostcode) {
//
//                    address = addressByPostcode[myPostcode] ? addressByPostcode[myPostcode] : false;
//                    $('.address-information .address-first-line').text(address);
//                    $('.address-information .address-postcode-line').text(myPostcode);
//                    $('.address-information').addClass('open');
//                })
            }


        });

    });

})(jQuery)
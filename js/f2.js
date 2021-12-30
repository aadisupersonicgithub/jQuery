jQuery.noConflict();
jQuery(document).ready(function ($) {
    // IMP NOTE toggle fadeToggle slideToggle 
    // TOPIC1 show hide toggle 
    // Type1 show 
    $('#btn-show').click(function () {
        $('#image-id').show(1000, function () {
            console.log("show grabbed element");
        });
    });

    // Type2 hide 
    $('#btn-hide').click(function () {
        $('#image-id').hide(1000, function () {
            console.log("hide grabbed element");
        });
    });

    // Type3 toggle 
    $('#btn-toggle').click(function () {
        $('#image-id').toggle(1000, function () {
            console.log("toggle grabbed element");
        });
    });

    // TOPIC2 fadeIn fadeOut fadeToggle fadeTo 
    // Type1 fadeIn 
    $('#btn-fadeIn').click(function () {
        $('#image-id').fadeIn(1000, function () {
            console.log("fadeIn grabbed element");
        });
    });

    // Type2 fadeOut
    $('#btn-fadeOut').click(function () {
        $('#image-id').fadeOut(1000, function () {
            console.log("fadeOut grabbed element");
        });
    });

    // Type3 fadeToggle 
    $('#btn-fadeToggle').click(function () {
        $('#image-id').fadeToggle(1000, function () {
            console.log("fadeToggle the grabbed element");
        });
    });

    // Type4 fadeTo 
    $('#btn-fadeTo').click(function () {
        $('#image-id').fadeTo(1000, 0.5, function () {
            console.log("fadeTo opacity 0.5 the grabbed element");
        });
    });

    // IMP TODOD console.log("Think some simple applications of these animations");
    // console.log("How to apply fadeTo in some context");
    // TODO How to bring back the opacity 
    // $(document.body).click(function () {
    // $('#image-id').fadeIn(1000, function () {
    //     console.log("Make everyone visible");
    // });
    // });

    // NOTE speed of animation and callbacks are optinoals

    // TOPIC3 slideUp slideDown slideToggle 
    // Type1 slideUp 
    $('#btn-slideUp').click(function () {
        $('#image-id').slideUp(2000, function () {
            console.log("slideUp happened on grabbed element");
        });
    });

    // Type2 slideDown (Default)
    $('#btn-slideDown').click(function () {
        $('#image-id').slideDown(2000, function () {
            console.log("slideDown happened on grabbed element");
        });
    });

    // Type3 slideToggle 
    $('#btn-slideToggle').click(function () {
        $('#image-id').slideToggle(2000, function () {
            console.log("slideToggle happened on grabbed element");
        });
    });

    let ct = 0;
    $('#btn-optional').click(function () {
        ++ct;
        switch (ct) {
            case 1:
                $('#image-id').hide();
                break;
            case 2:
                $('#image-id').toggle();
                break;
            case 3:
                $('image-id').slideDown();
                break;
            case 4:
                $('#image-id').fadeTo(1000, 0.5);
                break;
            case 5:
                $('#image-id').hide();
                break;
            case 6:
                $('#image-id').show();
                break;
            case 7:
                $('#image-id').fadeOut();
                break;
            case 8:
                $('#image-id').fadeIn();
                break;
            case 9:
                $('#image-id').fadeToggle();
                break;
            case 10:
                $('#image-id').slideToggle();
                break;
            case 11:
                $('#image-id').slideUp();
                break;
            default:
                console.log("wtf");
                break;
        }
    });

    // TOPIC Animate 
    $('#btn-animate').click(function () {
        $('#zom-id').animate({ left: "+=80" }, 1000, function () {
            console.log("Zom has been animated");
        });
    });
    for (let i = 0; i < 4; ++i) {
        $('#btn-animate').click();
    }

    // IMP text html val 

    // TOPIC Get and set text 
    // Type 1a Get Set 
    // console.log($('p').text());
    // $('p').text("It modifies the previous text to this text.");

    // Type 1b eg Get and set in button
    $('#get-text').click(function () {
        let txt = $('p').text();
        let str = ` *** The text of p tag is ${txt}`;
        let cur = $('#get-text').text();
        cur += str;
        $('#get-text').text(cur);
    });

    $('#set-text').click(function () {
        let cur = $('#set-text').text();
        let txt = " *** Yaayyyy !! New modified text is here.";
        txt = cur + txt;
        $('#set-text').text(txt);
    });
    // Type 2 
    $('#changeHTML').click(function () {
        // TOPIC Get Set html 
        let HTMLData = $('.container').html();
        let addHTML = `<br> <div id="hi" class="bg-info"> righthi </div> `;
        let newHTML = HTMLData + addHTML;
        // newHTML = addHTML;
        console.log(HTMLData, newHTML);
        $('.container').html(newHTML);
    });
    // Type 3 
    // get value in input 
    let val = $('#name').val();
    console.log(val);
    // change value in input 
    $('#btn-change').click(function () {
        $('#name').val("Walk like a king, or dont care who the fuck is king.");
    });

    // TOPIC get attrbiutes value (used in AJAX)
    let val2 = $('link').attr('href');
    console.log(val2);

    $('#btn-changeAttrValue').click(function () {
        console.log("Old data : ", $('#name').attr('id'));
        $('#name').attr('id', 'name2');
        console.log("Technically abhi #name not existing so next line error ");
        console.log("Data after changing : ", $('#name').attr('id'));
        console.log($('#name').attr('value'));

    })

    // change attribuite of img src to switch photos after pressing a button 
    ct = -1;
    let hh = true;
    let i = 0;
    $('#img-change-btn').click(function () {
        ct = (ct + 1) % 10;
        // hh = false;
        // console.log("printing ct = ", ct);
        // let sw = i;
        switch (ct) {
            case 0: $('#my-image-id').attr('src', 'img/post-bg.jpg'); break;
            case 1: $('#my-image-id').attr('src', 'img/i_a1.jpg'); break;
            case 2: $('#my-image-id').attr('src', 'img/i_a2.jpg'); break;
            case 3: $('#my-image-id').attr('src', 'img/i_a3.jpg'); break;
            case 4: $('#my-image-id').attr('src', 'img/i_a4.jpg'); break;
            case 5: $('#my-image-id').attr('src', 'img/i_a5.webp'); break;
            case 6: $('#my-image-id').attr('src', 'img/i_a6.jpg'); break;
            case 7: $('#my-image-id').attr('src', 'img/i_a7.jpg'); break;
            case 8: $('#my-image-id').attr('src', 'img/i_a8.jpg'); break;
            default: $('#my-image-id').attr('src', 'img/i_a9.jpg'); break;
        }
        hh = true;
        console.log("aaya kya");
    })
    // BUG slowdown for loop 
    // for (i = 0; i < 10; ++i) {
    //     // $('#img-change-btn').click().delay(1000).queue(function () {
    //     //     $(this).click();
    //     // });
    //     $('#img-change-btn').delay(1000).queue(function () {
    //         console.log("hi");
    //         $('#img-change-btn').click();
    //     });
    //     //     // while (hh) {

    //     //     // }
    //     //     console.log(i);
    //     //     // $('#img-change-btn').click().delay(1000 * i);
    //     //     // $('#img-change-btn').slideUp(1000).click().delay(1000 * i).slideDown(1000);
    //     //     // $('#img-change-btn').slideUp(1000).click().delay(1000 * i).slideDown(1000);
    //     //     $('#img-change-btn').click().delay(1000);

    // }
    // TIP recursion slows this down but solve above one.
    function go(i) {
        if (i > 10) return;
        $('#img-change-btn').click();
        setTimeout(function () {
            go(i + 1);
        }, 1000);
    }
    go(1);

    // TOPIC CSS property 
    // Type1 
    $('#btn-addClass').click(function () {
        $('p').addClass('bg-info');
        $('p').addClass('myClass');
    });
    // Type2 
    $('#btn-removeClass').click(function () {
        $('p').removeClass('bg-info');
    })
    // Type3 
    $('#btn-toggleClass').click(function () {
        $('p').toggleClass('bg-info');
    });
    // $('body').addClass(myClass);
    // TODO wtf is this 'on'
    $("body").on({ mouseenter: function () { $(this).css("background-color", "gray"); }, });

    // TOPIC CSS 
    $('#btn-setCSS').click(function () {
        $('#div-id').css('color', 'aqua');
        $('#div-id').css('font-size', 80);
    });
    // Multiple CSS oneliner
    $('#btn-multipleSetCSS').click(function () {
        $('#div-id').css({ 'color': 'aqua', "background-color": 'green', "font-size": 100 });
    });

    let whatColor = $('#div-id').css('color');
    console.log(whatColor);

    // Further docs 
















});
